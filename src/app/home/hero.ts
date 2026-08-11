import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { Actions } from '../core/actions';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
import { Player } from '../core/player';
import { Scroll } from '../core/scroll';
import { ARTIST } from '../data/catalog';
import { copy } from '../data/copy';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <header class="hero" [style.--fade]="fade()">
      <picture>
        <source [attr.srcset]="ARTIST.photoLow" media="(max-width: 700px)" />
        <img [src]="ARTIST.photo" [alt]="ARTIST.name" />
      </picture>
      <div class="veil"></div>
      <div class="copy">
        <p class="verified">
          <app-icon name="verified" />
          <span>{{ language.t(copy.verified) }}</span>
        </p>
        <h1>{{ ARTIST.name }}</h1>
        <p class="listeners">{{ ARTIST.monthlyListeners }} {{ language.t(copy.monthly) }}</p>
        <div class="actions">
          <button
            type="button"
            class="play-disc"
            (click)="play()"
            [attr.aria-label]="language.t(player.playing() ? copy.pause : copy.play)"
          >
            <app-icon [name]="player.playing() && player.current() ? 'pause' : 'play'" />
          </button>
          <button type="button" class="pill" [class.is-on]="actions.following()" (click)="actions.follow()">
            {{ language.t(actions.following() ? copy.following : copy.follow) }}
          </button>
          <button type="button" class="more" (click)="actions.share()" [attr.aria-label]="language.t(copy.more)">
            <app-icon name="more" />
          </button>
        </div>
      </div>
    </header>
  `,
  styles: `
    .hero {
      position: relative;
      min-height: 200px;
      overflow: hidden;
      color: #fff;
    }
    picture,
    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 48% 32%;
      opacity: calc(1 - var(--fade, 0) * 0.92);
      transform: scale(calc(1 + var(--fade, 0) * 0.04));
      transform-origin: 48% 32%;
      will-change: opacity, transform;
    }
    .veil {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(
          180deg,
          rgb(0 0 0 / calc(0.1 + var(--fade, 0) * 0.55)) 10%,
          rgb(18 18 18 / calc(0.88 + var(--fade, 0) * 0.12)) 100%
        ),
        linear-gradient(90deg, rgb(0 0 0 / calc(0.42 + var(--fade, 0) * 0.35)) 0%, transparent 55%);
    }
    .copy {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 200px;
      padding: 72px 24px 20px;
      opacity: calc(1 - var(--fade, 0) * 0.35);
    }
    .verified {
      display: flex;
      gap: 6px;
      align-items: center;
      margin: 0 0 6px;
      font-size: 14px;
      font-weight: 700;
    }
    .verified app-icon {
      width: 18px;
      height: 18px;
      color: #4cb3ff;
    }
    h1 {
      margin: 0;
      font-size: clamp(2.5rem, 5.6vw, 5.25rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 0.95;
    }
    .listeners {
      margin: 10px 0 0;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
    .actions {
      display: flex;
      gap: 16px;
      align-items: center;
      margin-top: 18px;
    }
    .more {
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      color: #b3b3b3;
    }
    .more:hover {
      color: #fff;
    }
    .more app-icon {
      width: 24px;
      height: 24px;
    }
    @media (max-width: 900px) {
      .hero,
      .copy {
        min-height: 58vw;
      }
      h1 {
        font-size: clamp(2.2rem, 11vw, 3.2rem);
      }
      .copy {
        padding: 64px 16px 16px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      picture,
      img,
      .copy {
        transform: none;
        opacity: 1;
      }
      .veil {
        background:
          linear-gradient(180deg, rgb(0 0 0 / 10%) 10%, rgb(18 18 18 / 88%) 100%),
          linear-gradient(90deg, rgb(0 0 0 / 42%) 0%, transparent 55%);
      }
    }
  `,
})
export class Hero implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly scroll = inject(Scroll);
  protected readonly language = inject(Language);
  protected readonly player = inject(Player);
  protected readonly actions = inject(Actions);
  protected readonly ARTIST = ARTIST;
  protected readonly copy = copy;
  protected readonly fade = signal(0);

  ngOnInit(): void {
    const main = this.scroll.main();
    if (!main) {
      return;
    }
    this.updateFade(main);
    fromEvent(main, 'scroll', { passive: true })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateFade(main));
  }

  protected play(): void {
    this.player.playPopular();
    void this.scroll.toSection('popular');
  }

  private updateFade(main: HTMLElement): void {
    const hero = main.querySelector('.hero') as HTMLElement | null;
    const height = hero?.offsetHeight || 320;
    const next = Math.min(1, Math.max(0, main.scrollTop / (height * 0.85)));
    this.fade.set(Math.round(next * 100) / 100);
  }
}

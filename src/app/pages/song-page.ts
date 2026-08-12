import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
import { Player } from '../core/player';
import { SheetPage } from '../core/sheet-page';
import { sampleWash } from '../core/wash';
import { albumById, popularSongs, songById } from '../data/catalog';
import { copy } from '../data/copy';

@Component({
  selector: 'app-song-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  hostDirectives: [SheetPage],
  template: `
    @if (song(); as current) {
      <article class="page" [style.--wash]="wash()">
        <header>
          <img class="cover" [src]="current.image" [alt]="language.t(current.name)" width="80" height="80" />
          <div class="info">
            <h1>{{ language.t(current.name) }}</h1>
            @if (album(); as record) {
              <a [routerLink]="['/album', record.id]">{{ language.t(record.title) }}</a>
            }
            <p class="when">{{ language.t(current.duration) }}</p>
            <button
              type="button"
              class="play-disc"
              (click)="player.toggle()"
              [attr.aria-label]="language.t(player.currentId() === current.id && player.playing() ? copy.pause : copy.play)"
            >
              <app-icon [name]="player.currentId() === current.id && player.playing() ? 'pause' : 'play'" />
            </button>
          </div>
        </header>
        <div class="body" [innerHTML]="language.t(current.description)"></div>
      </article>
    }
  `,
  styles: `
    .page {
      --wash: #1a1a1a;
      min-height: 100%;
      padding: 8px 32px 64px;
      background: linear-gradient(180deg, var(--wash) 0, var(--bg-base) 260px);
    }
    header {
      display: flex;
      gap: 16px;
      align-items: center;
      padding: 12px 0 8px;
    }
    .info {
      min-width: 0;
    }
    .cover {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      border-radius: 4px;
      object-fit: cover;
      background: var(--bg-elevated);
      box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
    }
    h1 {
      margin: 0 0 6px;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1.05;
      overflow-wrap: anywhere;
    }
    a {
      font-size: 14px;
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 0.18em;
    }
    a:hover {
      color: #4cb3ff;
    }
    .when {
      margin: 6px 0 14px;
      color: rgb(255 255 255 / 72%);
      font-size: 14px;
    }
    .body {
      max-width: 62ch;
      margin-top: 28px;
      color: #eaeaea;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.6;
      overflow-wrap: anywhere;
    }
    .body p {
      margin: 0 0 1em;
    }
    .body p:last-child {
      margin-bottom: 0;
    }
    .body a {
      color: #4cb3ff;
      font-weight: 700;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.18em;
    }
    .body a:hover {
      color: #fff;
      text-decoration-thickness: 2px;
    }
    @media (max-width: 700px) {
      .page {
        padding: 4px 16px 48px;
      }
      .cover {
        width: 72px;
        height: 72px;
      }
      h1 {
        font-size: clamp(2rem, 8vw, 2.5rem);
      }
    }
  `,
})
export class SongPage {
  private readonly router = inject(Router);
  protected readonly language = inject(Language);
  protected readonly player = inject(Player);
  protected readonly copy = copy;
  readonly id = input.required<string>();
  protected readonly wash = signal('#1a1a1a');

  protected readonly song = computed(() => songById(Number(this.id())));
  protected readonly album = computed(() => {
    const song = this.song();
    return song ? albumById(song.albumId) : undefined;
  });

  constructor() {
    let token = 0;
    effect(() => {
      const song = this.song();
      if (!song) {
        void this.router.navigateByUrl('/');
        return;
      }
      if (this.player.currentId() !== song.id) {
        const queue = this.player.queueForAlbum(song.albumId);
        this.player.play(song, queue.length ? queue : popularSongs);
      }
      const current = ++token;
      this.wash.set('#1a1a1a');
      void sampleWash(song.image).then((color) => {
        if (current === token) {
          this.wash.set(color);
        }
      });
    });
  }
}

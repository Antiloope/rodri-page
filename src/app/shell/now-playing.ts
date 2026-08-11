import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Actions } from '../core/actions';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
import { Player } from '../core/player';
import { ARTIST } from '../data/catalog';
import { copy } from '../data/copy';

@Component({
  selector: 'app-now-playing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RouterLink],
  template: `
    <div class="dock">
      <div class="meta">
        @if (song(); as current) {
          <a [routerLink]="['/song', current.id]" class="cover-link">
            <img [src]="current.image" [alt]="language.t(current.name)" width="56" height="56" />
          </a>
          <div class="titles">
            <a [routerLink]="['/song', current.id]">{{ language.t(current.name) }}</a>
            <span>{{ ARTIST.name }}</span>
          </div>
          <button
            type="button"
            class="like"
            [class.is-on]="player.liked()"
            (click)="player.toggleLike()"
            [attr.aria-pressed]="player.liked()"
            [attr.aria-label]="language.t(copy.follow)"
          >
            <app-icon [name]="player.liked() ? 'heart-fill' : 'heart'" />
          </button>
        }
      </div>

      <div class="transport">
        <div class="controls">
          <button
            type="button"
            [class.is-on]="player.shuffleOn()"
            (click)="player.toggleShuffle()"
            [attr.aria-pressed]="player.shuffleOn()"
          >
            <app-icon name="shuffle" />
          </button>
          <button type="button" (click)="player.previous()" [attr.aria-label]="language.t(copy.previous)">
            <app-icon name="prev" />
          </button>
          <button
            type="button"
            class="play"
            (click)="player.toggle()"
            [attr.aria-label]="language.t(player.playing() ? copy.pause : copy.play)"
          >
            <app-icon [name]="player.playing() ? 'pause' : 'play'" />
          </button>
          <button type="button" (click)="player.next()" [attr.aria-label]="language.t(copy.next)">
            <app-icon name="next" />
          </button>
          <button
            type="button"
            [class.is-on]="player.repeatOn()"
            (click)="player.toggleRepeat()"
            [attr.aria-pressed]="player.repeatOn()"
          >
            <app-icon name="repeat" />
          </button>
        </div>
        <div class="timeline">
          <span>{{ left() }}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="0.3"
            [value]="player.progress()"
            (input)="onSeek($event)"
            [attr.aria-valuetext]="left() + ' / ' + right()"
          />
          <span>{{ right() }}</span>
        </div>
      </div>

      <div class="extras">
        <button type="button" (click)="actions.share()" [attr.aria-label]="language.t(copy.share)">
          <app-icon name="share" />
        </button>
        <button
          type="button"
          [class.is-on]="!player.muted()"
          (click)="player.toggleMute()"
          [attr.aria-pressed]="!player.muted()"
        >
          <app-icon [name]="player.muted() ? 'volume-off' : 'volume'" />
        </button>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 0;
    }
    .dock {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(280px, 1.4fr) minmax(0, 1fr);
      align-items: center;
      height: 100%;
      padding: 0 16px 0 12px;
    }
    .meta,
    .extras {
      display: flex;
      gap: 12px;
      align-items: center;
      min-width: 0;
    }
    .extras {
      justify-content: flex-end;
      color: #b3b3b3;
    }
    .extras button:hover,
    .extras .is-on,
    .controls .is-on {
      color: #1ed760;
    }
    .cover-link img {
      width: 56px;
      height: 56px;
      border-radius: 4px;
      object-fit: cover;
    }
    .titles {
      display: grid;
      min-width: 0;
    }
    .titles a {
      overflow: hidden;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .titles a:hover {
      text-decoration: underline;
    }
    .titles span {
      color: #b3b3b3;
      font-size: 11px;
    }
    .like {
      color: #b3b3b3;
    }
    .like.is-on,
    .like:hover {
      color: #1ed760;
    }
    .like app-icon,
    .extras app-icon {
      width: 16px;
      height: 16px;
    }
    .transport {
      display: grid;
      gap: 6px;
    }
    .controls {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;
    }
    .controls button {
      display: grid;
      place-items: center;
      color: #b3b3b3;
    }
    .controls button:hover {
      color: #fff;
    }
    .controls app-icon {
      width: 16px;
      height: 16px;
    }
    .play {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #fff;
      color: #0d0d0d !important;
    }
    .play app-icon {
      width: 14px;
      height: 14px;
    }
    .timeline {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 8px;
      align-items: center;
      color: #b3b3b3;
      font-size: 11px;
      font-variant-numeric: tabular-nums;
    }
    input[type='range'] {
      width: 100%;
      height: 4px;
      appearance: none;
      background: linear-gradient(to right, #fff calc(var(--pos, 0) * 1%), #4d4d4d 0);
      border-radius: 999px;
    }
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #fff;
    }
    @media (max-width: 900px) {
      .dock {
        grid-template-columns: minmax(0, 1fr) auto;
        padding: 8px 12px;
        background: #181818;
        border-radius: 8px;
        margin: 0 8px;
      }
      .transport {
        justify-items: end;
      }
      .timeline,
      .extras,
      .like,
      .controls button:not(.play) {
        display: none;
      }
      .play {
        width: 36px;
        height: 36px;
      }
    }
  `,
  host: {
    '[style.--pos]': 'player.progress()',
  },
})
export class NowPlaying {
  protected readonly player = inject(Player);
  protected readonly language = inject(Language);
  protected readonly actions = inject(Actions);
  protected readonly ARTIST = ARTIST;
  protected readonly copy = copy;
  protected readonly song = this.player.current;

  protected readonly left = computed(() => this.edge(0));
  protected readonly right = computed(() => this.edge(1));

  protected onSeek(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.player.seek(value);
  }

  private edge(index: 0 | 1): string {
    const duration = this.song() ? this.language.t(this.song()!.duration) : '—';
    const parts = duration.split('-').map((part) => part.trim());
    if (parts.length === 1) {
      return index === 0 ? '0:00' : parts[0];
    }
    return parts[index] ?? '—';
  }
}

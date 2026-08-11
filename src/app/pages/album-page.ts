import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Language } from '../core/language';
import { Player } from '../core/player';
import { albumById, songsInAlbum } from '../data/catalog';
import { copy } from '../data/copy';
import { Song } from '../data/types';

@Component({
  selector: 'app-album-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    @if (album(); as record) {
      <article>
        <header>
          <img [src]="record.image" [alt]="language.t(record.title)" />
          <div>
            <p>{{ language.t(copy.albums) }}</p>
            <h1>{{ language.t(record.title) }}</h1>
            <p class="sub">{{ language.t(record.subtitle) }}</p>
          </div>
        </header>
        @if (tracks().length === 0) {
          <p class="empty">{{ language.t(copy.comingSoon) }}</p>
        } @else {
          <ol class="track-list">
            @for (song of tracks(); track song.id; let i = $index) {
              <li>
                <div class="track-row" [class.is-current]="player.currentId() === song.id">
                  <button type="button" class="track-index" (click)="play(song)">{{ i + 1 }}</button>
                  <img class="track-cover" [src]="song.image" [alt]="language.t(song.name)" />
                  <a class="track-name" [routerLink]="['/song', song.id]">{{ language.t(song.name) }}</a>
                  <span class="track-meta">{{ language.t(song.duration) }}</span>
                </div>
              </li>
            }
          </ol>
        }
      </article>
    }
  `,
  styles: `
    article {
      padding: 8px 24px 64px;
    }
    header {
      display: flex;
      gap: 24px;
      align-items: end;
      min-height: 240px;
      padding: 24px 0 28px;
    }
    header img {
      width: min(232px, 40vw);
      aspect-ratio: 1;
      border-radius: 4px;
      object-fit: cover;
      box-shadow: 0 16px 40px rgb(0 0 0 / 50%);
    }
    header p {
      margin: 0 0 8px;
      font-size: 14px;
      font-weight: 700;
    }
    h1 {
      margin: 0;
      font-size: clamp(2rem, 5vw, 4.5rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1;
    }
    .sub,
    .empty {
      color: #b3b3b3;
      font-size: 14px;
      font-weight: 400;
    }
    .empty {
      padding: 32px 8px;
      text-align: center;
    }
    @media (max-width: 700px) {
      article {
        padding: 8px 16px 48px;
      }
      header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  `,
})
export class AlbumPage {
  private readonly router = inject(Router);
  protected readonly language = inject(Language);
  protected readonly player = inject(Player);
  protected readonly copy = copy;
  readonly id = input.required<string>();

  protected readonly album = computed(() => albumById(Number(this.id())));

  constructor() {
    effect(() => {
      if (!this.album()) {
        void this.router.navigateByUrl('/');
      }
    });
  }

  protected readonly tracks = computed(() => {
    const record = this.album();
    return record ? songsInAlbum(record.id) : [];
  });

  protected play(song: Song): void {
    this.player.play(song, this.tracks());
  }
}

import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
import { Player } from '../core/player';
import { albumById, popularSongs, songById } from '../data/catalog';
import { copy } from '../data/copy';

@Component({
  selector: 'app-song-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    @if (song(); as current) {
      <article class="page">
        <img class="cover" [src]="current.image" [alt]="language.t(current.name)" />
        <div class="info">
          <h1>{{ language.t(current.name) }}</h1>
          @if (album(); as record) {
            <a [routerLink]="['/album', record.id]">{{ language.t(record.title) }}</a>
          }
          <p class="when">{{ language.t(current.duration) }}</p>
          <button type="button" class="play-disc" (click)="player.toggle()" [attr.aria-label]="language.t(copy.play)">
            <app-icon [name]="player.currentId() === current.id && player.playing() ? 'pause' : 'play'" />
          </button>
          <div class="body" [innerHTML]="language.t(current.description)"></div>
        </div>
      </article>
    }
  `,
  styles: `
    .page {
      display: grid;
      grid-template-columns: minmax(160px, 280px) minmax(0, 1fr);
      gap: 32px;
      align-items: start;
      padding: 24px 32px 64px;
    }
    .cover {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      object-fit: cover;
      box-shadow: 0 16px 40px rgb(0 0 0 / 50%);
    }
    h1 {
      margin: 0 0 8px;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1.05;
    }
    a {
      font-size: 14px;
      font-weight: 700;
    }
    a:hover {
      text-decoration: underline;
    }
    .when {
      margin: 8px 0 20px;
      color: #b3b3b3;
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
    .body a {
      color: #4cb3ff;
    }
    @media (max-width: 700px) {
      .page {
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 16px 16px 48px;
        text-align: center;
      }
      .cover {
        width: min(72vw, 280px);
      }
      .info {
        justify-items: center;
      }
      .body {
        text-align: left;
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

  protected readonly song = computed(() => songById(Number(this.id())));
  protected readonly album = computed(() => {
    const song = this.song();
    return song ? albumById(song.albumId) : undefined;
  });

  constructor() {
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
    });
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
import { Player } from '../core/player';
import { popularSongs } from '../data/catalog';
import { copy } from '../data/copy';
import { Song } from '../data/types';

@Component({
  selector: 'app-popular',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    <section id="popular">
      <h2 class="section-title">{{ language.t(copy.popular) }}</h2>
      <ol class="track-list">
        @for (song of songs; track song.id; let i = $index) {
          <li>
            <a class="track-row" [class.is-current]="player.currentId() === song.id" [routerLink]="['/song', song.id]">
              <button type="button" class="index" (click)="play($event, song)" [attr.aria-label]="language.t(copy.play)">
                <span class="num">{{ i + 1 }}</span>
                <app-icon class="hover-play" [name]="player.currentId() === song.id && player.playing() ? 'pause' : 'play'" />
              </button>
              <img class="track-cover" [src]="song.image" [alt]="language.t(song.name)" width="40" height="40" />
              <span class="track-name">{{ language.t(song.name) }}</span>
              <span class="track-meta">{{ language.t(song.duration) }}</span>
            </a>
          </li>
        }
      </ol>
    </section>
  `,
  styles: `
    .index {
      position: relative;
      width: 24px;
      height: 24px;
      color: inherit;
    }
    .hover-play {
      position: absolute;
      inset: 0;
      display: none;
      width: 14px;
      height: 14px;
      margin: auto;
    }
    .track-row:hover .num,
    .track-row:focus-within .num,
    .track-row.is-current .num {
      display: none;
    }
    .track-row:hover .hover-play,
    .track-row:focus-within .hover-play,
    .track-row.is-current .hover-play {
      display: block;
    }
  `,
})
export class Popular {
  protected readonly language = inject(Language);
  protected readonly player = inject(Player);
  protected readonly copy = copy;
  protected readonly songs = popularSongs;

  protected play(event: Event, song: Song): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.player.currentId() === song.id) {
      this.player.toggle();
      return;
    }
    this.player.play(song, popularSongs);
  }
}

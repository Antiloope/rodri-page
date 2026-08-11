import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './hero';
import { Popular } from './popular';
import { Contact } from './contact';
import { Shelf } from './shelf';
import { About } from './about';
import { albums, playlists } from '../data/catalog';
import { copy } from '../data/copy';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, Popular, Contact, Shelf, About],
  template: `
    <app-hero />
    <div class="band">
      <div class="split">
        <app-popular />
        <app-contact />
      </div>
      <app-shelf id="albums" [title]="copy.albums" kind="album" [items]="albums" />
      <app-shelf id="playlists" [title]="copy.playlists" kind="playlist" [items]="playlists" />
      <app-about />
    </div>
  `,
  styles: `
    .band {
      position: relative;
      padding: 12px 24px 96px;
      background: var(--bg-base);
    }
    .split {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.7fr);
      gap: 32px;
      align-items: start;
    }
    @media (max-width: 900px) {
      .band {
        padding: 0 16px 48px;
      }
      .split {
        grid-template-columns: 1fr;
        gap: 32px;
      }
    }
  `,
})
export class Home {
  protected readonly albums = albums;
  protected readonly playlists = playlists;
  protected readonly copy = copy;
}

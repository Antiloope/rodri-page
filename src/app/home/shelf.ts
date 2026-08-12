import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
import { songsInAlbum } from '../data/catalog';
import { copy } from '../data/copy';
import { Album, Localized, Playlist } from '../data/types';

@Component({
  selector: 'app-shelf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    <section [id]="id()">
      <h2 class="section-title">{{ language.t(title()) }}</h2>
      <div class="shelf">
        @for (item of items(); track item.id) {
          <a class="shelf-card" [routerLink]="[kind() === 'album' ? '/album' : '/playlist', item.id]">
            <div class="shelf-cover-wrap">
              <img class="shelf-cover" [src]="item.image" [alt]="language.t(item.title)" />
              @if (kind() === 'playlist' || hasTracks(item.id)) {
                <span class="shelf-play play-disc"><app-icon name="play" /></span>
              }
            </div>
            <div class="shelf-title">{{ language.t(item.title) }}</div>
            @if (kind() === 'playlist' && item.subtitle; as subtitle) {
              <div class="shelf-sub">{{ language.t(subtitle) }}</div>
            } @else if (kind() === 'album' && !hasTracks(item.id)) {
              <div class="shelf-sub">{{ language.t(copy.comingSoon) }}</div>
            }
          </a>
        }
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
      margin-top: 24px;
    }
  `,
})
export class Shelf {
  protected readonly language = inject(Language);
  protected readonly copy = copy;
  readonly id = input.required<string>();
  readonly title = input.required<Localized>();
  readonly kind = input.required<'album' | 'playlist'>();
  readonly items = input.required<readonly (Album | Playlist)[]>();

  protected hasTracks(id: number): boolean {
    return songsInAlbum(id).length > 0;
  }
}

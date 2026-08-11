import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
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
              <span class="shelf-play play-disc"><app-icon name="play" /></span>
            </div>
            <div class="shelf-title">{{ language.t(item.title) }}</div>
            <div class="shelf-sub">{{ language.t(item.subtitle) }}</div>
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
  readonly id = input.required<string>();
  readonly title = input.required<Localized>();
  readonly kind = input.required<'album' | 'playlist'>();
  readonly items = input.required<readonly (Album | Playlist)[]>();
}

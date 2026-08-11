import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Icon, IconName } from '../core/icon';
import { Language } from '../core/language';
import { contacts } from '../data/catalog';
import { copy } from '../data/copy';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <section id="contact">
      <h2 class="section-title">{{ language.t(copy.contact) }}</h2>
      <ul>
        @for (item of contacts; track item.id) {
          <li>
            <a [href]="item.href" target="_blank" rel="noopener noreferrer">
              <span class="mark"><app-icon [name]="icon(item.id)" /></span>
              <span>{{ language.t(item.name) }}</span>
            </a>
          </li>
        }
      </ul>
    </section>
  `,
  styles: `
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a {
      display: grid;
      grid-template-columns: 40px 1fr;
      gap: 12px;
      align-items: center;
      min-height: 56px;
      padding: 0 8px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
    }
    a:hover {
      background: rgb(255 255 255 / 10%);
    }
    .mark {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #282828;
    }
    app-icon {
      width: 18px;
      height: 18px;
    }
  `,
})
export class Contact {
  protected readonly language = inject(Language);
  protected readonly copy = copy;
  protected readonly contacts = contacts;

  protected icon(id: string): IconName {
    if (id === 'email' || id === 'github' || id === 'linkedin' || id === 'instagram') {
      return id === 'email' ? 'mail' : id;
    }
    return 'mail';
  }
}

import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '../core/actions';
import { Icon } from '../core/icon';
import { Language } from '../core/language';
import { Scroll } from '../core/scroll';
import { Sheet } from '../core/sheet';
import { copy } from '../data/copy';

@Component({
  selector: 'app-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <div class="bar">
      <button class="round" type="button" (click)="back()" [attr.aria-label]="language.t(copy.back)">
        <app-icon name="back" />
      </button>
      <div class="end">
        <div class="lang" role="group" [attr.aria-label]="language.t(copy.language)">
          <button type="button" [class.is-on]="language.lang() === 'en'" (click)="language.set('en')">EN</button>
          <span aria-hidden="true">|</span>
          <button type="button" [class.is-on]="language.lang() === 'es'" (click)="language.set('es')">ES</button>
        </div>
        <button class="round share" type="button" (click)="actions.share()" [attr.aria-label]="language.t(copy.share)">
          <app-icon name="share" />
        </button>
      </div>
    </div>
  `,
  styles: `
    .bar {
      position: sticky;
      top: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 16px;
      background: #121212;
    }
    .end {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .round {
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgb(0 0 0 / 70%);
      color: #fff;
    }
    .round app-icon {
      width: 18px;
      height: 18px;
    }
    .lang {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      padding: 3px;
      border: 1px solid rgb(255 255 255 / 18%);
      border-radius: 999px;
      background: rgb(0 0 0 / 72%);
    }
    .lang span {
      color: #7c7c7c;
      font-size: 11px;
      font-weight: 700;
    }
    .lang button {
      min-width: 40px;
      height: 28px;
      border-radius: 999px;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .lang .is-on {
      background: #fff;
      color: #0d0d0d;
    }
    @media (max-width: 900px) {
      .share {
        display: none;
      }
      .lang button {
        min-width: 44px;
      }
    }
  `,
})
export class Topbar {
  private readonly location = inject(Location);
  private readonly router = inject(Router);
  private readonly scroll = inject(Scroll);
  private readonly sheet = inject(Sheet);
  protected readonly language = inject(Language);
  protected readonly actions = inject(Actions);
  protected readonly copy = copy;

  protected back(): void {
    if (this.sheet.isDetail(this.router.url)) {
      this.location.back();
      return;
    }
    void this.scroll.toTop();
  }
}

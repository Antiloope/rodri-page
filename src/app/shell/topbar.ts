import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, fromEvent } from 'rxjs';
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
  host: {
    '[class.is-home]': 'atHome()',
    '[style.--solid]': 'solid()',
  },
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
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 5;
    }
    :host.is-home {
      margin-bottom: calc(-1 * var(--topbar));
    }
    .bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      min-height: var(--topbar);
      padding: 12px 16px;
      background: rgb(18 18 18 / var(--solid, 1));
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
export class Topbar implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly location = inject(Location);
  private readonly router = inject(Router);
  private readonly scroll = inject(Scroll);
  private readonly sheet = inject(Sheet);
  protected readonly language = inject(Language);
  protected readonly actions = inject(Actions);
  protected readonly copy = copy;
  protected readonly atHome = signal(!this.sheet.isDetail(this.router.url));
  protected readonly solid = signal(this.sheet.isDetail(this.router.url) ? 1 : 0);

  ngOnInit(): void {
    this.sync();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.sync());
    const main = this.scroll.main();
    if (!main) {
      return;
    }
    fromEvent(main, 'scroll', { passive: true })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.sync());
  }

  protected back(): void {
    if (this.sheet.isDetail(this.router.url)) {
      this.location.back();
      return;
    }
    void this.scroll.toTop();
  }

  private sync(): void {
    const home = !this.sheet.isDetail(this.router.url);
    this.atHome.set(home);
    if (!home) {
      this.solid.set(1);
      return;
    }
    const top = this.scroll.main()?.scrollTop ?? 0;
    this.solid.set(Math.min(1, Math.round((top / 80) * 100) / 100));
  }
}

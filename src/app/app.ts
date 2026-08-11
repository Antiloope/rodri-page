import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { copy } from './data/copy';
import { Language } from './core/language';
import { Scroll } from './core/scroll';
import { Sheet } from './core/sheet';
import { Toast } from './core/toast';
import { Icon } from './core/icon';
import { Topbar } from './shell/topbar';
import { NowPlaying } from './shell/now-playing';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Icon, Topbar, NowPlaying],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly language = inject(Language);
  private readonly toast = inject(Toast);
  private readonly scroll = inject(Scroll);
  private readonly router = inject(Router);
  protected readonly sheet = inject(Sheet);

  protected readonly copy = copy;
  protected readonly message = this.toast.message;

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => (event as NavigationEnd).urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  protected readonly atHome = computed(() => {
    const path = this.url().split('?')[0].split('#')[0];
    return path === '/' || path === '';
  });

  protected t(value: typeof copy.home): string {
    return this.language.t(value);
  }

  protected goHome(): void {
    void this.scroll.toTop();
  }

  protected go(id: string): void {
    void this.scroll.toSection(id);
  }
}

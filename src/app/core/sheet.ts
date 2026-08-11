import { Injectable, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

const DETAIL = /^\/(song|album|playlist)(\/|$)/;
const SHEET_MS = 400;

@Injectable({ providedIn: 'root' })
export class Sheet {
  readonly phase = signal<'idle' | 'enter' | 'leave'>('idle');

  constructor(private readonly router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      const next = (event as NavigationStart).url.split('?')[0];
      const prev = this.router.url.split('?')[0];
      if (this.isDetail(next) && !this.isDetail(prev) && this.phase() !== 'leave') {
        this.phase.set('enter');
      }
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = (event as NavigationEnd).urlAfterRedirects.split('?')[0];
      if (this.isDetail(url)) {
        window.setTimeout(() => {
          if (this.phase() === 'enter') {
            this.phase.set('idle');
          }
        }, SHEET_MS + 20);
        return;
      }
      this.phase.set('idle');
    });
  }

  isDetail(url: string): boolean {
    return DETAIL.test(url.split('?')[0]);
  }

  beginLeave(): Promise<boolean> {
    if (this.phase() === 'leave') {
      return Promise.resolve(true);
    }
    this.phase.set('leave');
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(true), SHEET_MS);
    });
  }
}

import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const DETAIL = /^\/(song|album|playlist)(\/|$)/;
const SHEET_MS = 200;

@Injectable({ providedIn: 'root' })
export class Sheet {
  readonly phase = signal<'idle' | 'leave'>('idle');

  constructor(private readonly router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.phase() !== 'leave') {
        this.phase.set('idle');
      }
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
      window.setTimeout(() => {
        this.phase.set('idle');
        resolve(true);
      }, SHEET_MS);
    });
  }
}

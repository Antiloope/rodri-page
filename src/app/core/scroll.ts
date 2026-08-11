import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const SECTION_FLASH = 'is-section-flash';

@Injectable({ providedIn: 'root' })
export class Scroll {
  constructor(private readonly router: Router) {}

  main(): HTMLElement | null {
    return document.getElementById('main');
  }

  async toSection(id: string): Promise<void> {
    const path = this.router.url.split('#')[0];
    if (path !== '/' && path !== '') {
      await this.router.navigateByUrl('/');
      await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.remove(SECTION_FLASH);
    void target.offsetWidth;
    target.classList.add(SECTION_FLASH);
    window.setTimeout(() => target.classList.remove(SECTION_FLASH), 700);
  }

  async toTop(): Promise<void> {
    const path = this.router.url.split('#')[0];
    if (path !== '/' && path !== '') {
      await this.router.navigateByUrl('/');
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    this.main()?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

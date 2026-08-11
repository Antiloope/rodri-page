import { Injectable, computed, effect, signal } from '@angular/core';
import { Lang, Localized } from '../data/types';

const STORAGE_KEY = 'rp-lang';

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') {
      return saved;
    }
  } catch {
    // private mode
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

@Injectable({ providedIn: 'root' })
export class Language {
  readonly lang = signal<Lang>(detectLang());
  readonly isEs = computed(() => this.lang() === 'es');

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // private mode
      }
    });
  }

  t(value: Localized): string {
    return this.lang() === 'es' ? value[1] : value[0];
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.set(this.lang() === 'es' ? 'en' : 'es');
  }
}

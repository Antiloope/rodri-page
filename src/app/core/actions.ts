import { Injectable, inject, signal } from '@angular/core';
import { ARTIST } from '../data/catalog';
import { copy } from '../data/copy';
import { Language } from './language';
import { Toast } from './toast';

const FOLLOW_KEY = 'rp-following';

@Injectable({ providedIn: 'root' })
export class Actions {
  private readonly language = inject(Language);
  private readonly toast = inject(Toast);
  readonly following = signal(this.readFollowing());

  follow(): void {
    this.following.set(true);
    try {
      localStorage.setItem(FOLLOW_KEY, '1');
    } catch {
      // private mode
    }
    window.open(ARTIST.linkedIn, '_blank', 'noopener,noreferrer');
  }

  async share(): Promise<void> {
    const url = window.location.href;
    const payload = {
      title: ARTIST.name,
      text: ARTIST.name,
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }
    } catch {
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      this.toast.show(this.language.t(copy.shareCopied));
    } catch {
      this.toast.show(url);
    }
  }

  private readFollowing(): boolean {
    try {
      return localStorage.getItem(FOLLOW_KEY) === '1';
    } catch {
      return false;
    }
  }
}

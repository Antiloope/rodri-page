import { Injectable, computed, signal } from '@angular/core';
import { popularSongs, songById, songsInAlbum } from '../data/catalog';
import { Song } from '../data/types';

const TICK_MS = 80;
const STEP = 0.35;

@Injectable({ providedIn: 'root' })
export class Player {
  readonly current = signal<Song | null>(popularSongs[0] ?? null);
  readonly queue = signal<Song[]>(popularSongs);
  readonly playing = signal(false);
  readonly progress = signal(0);
  readonly liked = signal(false);
  readonly muted = signal(false);
  readonly shuffleOn = signal(false);
  readonly repeatOn = signal(false);

  readonly currentId = computed(() => this.current()?.id ?? null);

  private timer: ReturnType<typeof setInterval> | null = null;

  play(song: Song, queue: Song[] = popularSongs): void {
    this.current.set(song);
    this.queue.set(queue);
    this.progress.set(0);
    this.liked.set(false);
    this.start();
  }

  playPopular(): void {
    const head = this.current() ?? popularSongs[0];
    if (!head) {
      return;
    }
    if (this.current()?.id === head.id && this.playing()) {
      this.pause();
      return;
    }
    if (this.current()?.id === head.id) {
      this.start();
      return;
    }
    this.play(head, popularSongs);
  }

  toggle(): void {
    if (!this.current()) {
      this.playPopular();
      return;
    }
    if (this.playing()) {
      this.pause();
    } else {
      this.start();
    }
  }

  seek(value: number): void {
    this.progress.set(Math.min(100, Math.max(0, value)));
  }

  next(): void {
    const song = this.neighbor(1);
    if (song) {
      this.play(song, this.queue());
    }
  }

  previous(): void {
    if (this.progress() > 8) {
      this.progress.set(0);
      return;
    }
    const song = this.neighbor(-1);
    if (song) {
      this.play(song, this.queue());
    }
  }

  toggleLike(): void {
    this.liked.update((value) => !value);
  }

  toggleMute(): void {
    this.muted.update((value) => !value);
    if (this.muted()) {
      this.pause();
    }
  }

  toggleShuffle(): void {
    this.shuffleOn.update((value) => !value);
  }

  toggleRepeat(): void {
    this.repeatOn.update((value) => !value);
  }

  queueForAlbum(albumId: number): Song[] {
    return songsInAlbum(albumId);
  }

  private neighbor(step: number): Song | null {
    const current = this.current();
    const queue = this.queue();
    if (!current || queue.length === 0) {
      return songById(popularSongs[0]?.id ?? 1) ?? null;
    }
    const index = queue.findIndex((song) => song.id === current.id);
    if (index === -1) {
      return queue[0] ?? null;
    }
    if (this.shuffleOn() && step > 0) {
      const rest = queue.filter((song) => song.id !== current.id);
      return rest[Math.floor(Math.random() * rest.length)] ?? current;
    }
    const next = queue[index + step];
    if (next) {
      return next;
    }
    return this.repeatOn() ? (queue[0] ?? null) : (queue[index] ?? null);
  }

  private start(): void {
    if (this.muted()) {
      this.muted.set(false);
    }
    this.playing.set(true);
    this.clearTimer();
    this.timer = setInterval(() => {
      const next = this.progress() + STEP;
      if (next >= 100) {
        this.progress.set(100);
        this.next();
        return;
      }
      this.progress.set(next);
    }, TICK_MS);
  }

  private pause(): void {
    this.playing.set(false);
    this.clearTimer();
  }

  private clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

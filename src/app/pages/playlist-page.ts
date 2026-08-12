import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Language } from '../core/language';
import { SheetPage } from '../core/sheet-page';
import { playlistById } from '../data/catalog';

@Component({
  selector: 'app-playlist-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [SheetPage],
  template: `
    @if (playlist(); as list) {
      <article>
        <iframe
          [src]="embed()"
          [title]="language.t(list.title)"
          allow="encrypted-media; autoplay; clipboard-write; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </article>
    }
  `,
  styles: `
    article {
      display: flex;
      flex-direction: column;
      min-height: calc(100dvh - 160px);
      padding: 8px 24px 24px;
    }
    iframe {
      flex: 1;
      width: 100%;
      min-height: 360px;
      border: 0;
      border-radius: 12px;
    }
    @media (max-width: 700px) {
      article {
        padding: 8px 16px 16px;
      }
    }
  `,
})
export class PlaylistPage {
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly language = inject(Language);
  readonly id = input.required<string>();

  protected readonly playlist = computed(() => {
    const list = playlistById(Number(this.id()));
    if (!list) {
      void this.router.navigateByUrl('/');
    }
    return list;
  });

  protected readonly embed = computed(() => {
    const list = this.playlist();
    if (!list) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/playlist/${list.spotifyId}?utm_source=generator&theme=0`,
    );
  });
}

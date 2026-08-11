import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Language } from '../core/language';
import { playlistById } from '../data/catalog';

@Component({
  selector: 'app-playlist-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (playlist(); as list) {
      <article>
        <header>
          <img [src]="list.image" [alt]="language.t(list.title)" />
          <div>
            <p>Playlist</p>
            <h1>{{ language.t(list.title) }}</h1>
          </div>
        </header>
        <iframe
          [src]="embed()"
          title="Spotify"
          allow="encrypted-media; autoplay; clipboard-write; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </article>
    }
  `,
  styles: `
    article {
      display: grid;
      grid-template-rows: auto minmax(360px, 1fr);
      min-height: calc(100dvh - 160px);
      padding: 8px 24px 24px;
    }
    header {
      display: flex;
      gap: 20px;
      align-items: end;
      padding: 16px 0 24px;
    }
    header img {
      width: 160px;
      aspect-ratio: 1;
      border-radius: 4px;
      object-fit: cover;
      box-shadow: 0 12px 32px rgb(0 0 0 / 50%);
    }
    header p {
      margin: 0 0 6px;
      font-size: 14px;
      font-weight: 700;
    }
    h1 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 900;
      letter-spacing: -0.04em;
    }
    iframe {
      width: 100%;
      min-height: 360px;
      border: 0;
      border-radius: 12px;
    }
    @media (max-width: 700px) {
      article {
        padding: 8px 16px 16px;
      }
      header {
        flex-direction: column;
        align-items: start;
      }
      header img {
        width: 120px;
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

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../core/language';
import { copy } from '../data/copy';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about">
      <h2 class="section-title">{{ language.t(copy.about) }}</h2>
      <div class="mosaic">
        <figure class="lead">
          <img src="assets/aboutImg.jpg" [alt]="language.t(copy.about)" />
          <figcaption>{{ language.t(copy.aboutBody) }}</figcaption>
        </figure>
        <img src="assets/aboutImg1.jpg" alt="" />
        <img src="assets/aboutImg2.png" alt="" />
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
      margin: 48px -24px 0;
      padding: 0 24px;
      background: #000;
    }
    .mosaic {
      display: grid;
      width: 80%;
      height: min(480px, 56vw);
      margin-inline: auto;
      grid-template-columns: minmax(0, 1.6fr) minmax(120px, 0.7fr);
      grid-template-rows: 1fr 1fr;
      gap: 8px;
      background: #000;
    }
    .lead {
      position: relative;
      grid-row: 1 / span 2;
      margin: 0;
      overflow: hidden;
      border-radius: 6px;
    }
    .lead img,
    .mosaic > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
    .lead img {
      object-position: 50% 18%;
    }
    .mosaic > img:first-of-type {
      object-position: 18% 40%;
    }
    figcaption {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      max-width: 72ch;
      padding: 88px 18px 18px;
      background: linear-gradient(
        180deg,
        transparent 0%,
        rgb(0 0 0 / 55%) 42%,
        rgb(0 0 0 / 94%) 100%
      );
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.55;
      text-shadow: 0 1px 2px rgb(0 0 0 / 65%);
    }
    @media (max-width: 900px) {
      :host {
        margin-inline: -16px;
        padding-inline: 16px;
      }
    }
    @media (max-width: 700px) {
      .mosaic {
        width: 88%;
        height: min(420px, 108vw);
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      .mosaic > img {
        display: none;
      }
      figcaption {
        font-size: 13px;
        padding: 96px 14px 14px;
      }
    }
  `,
})
export class About {
  protected readonly language = inject(Language);
  protected readonly copy = copy;
}

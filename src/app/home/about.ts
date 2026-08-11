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
      margin-top: 48px;
    }
    .mosaic {
      display: grid;
      grid-template-columns: minmax(0, 1.6fr) minmax(140px, 0.7fr);
      grid-template-rows: 1fr 1fr;
      gap: 8px;
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
    figcaption {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      max-width: 72ch;
      padding: 64px 16px 16px;
      background: linear-gradient(180deg, transparent, rgb(0 0 0 / 82%));
      color: #eaeaea;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    }
    @media (max-width: 700px) {
      .mosaic {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      .mosaic > img {
        display: none;
      }
      figcaption {
        font-size: 13px;
      }
    }
  `,
})
export class About {
  protected readonly language = inject(Language);
  protected readonly copy = copy;
}

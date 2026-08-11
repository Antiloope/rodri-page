import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'play'
  | 'pause'
  | 'next'
  | 'prev'
  | 'shuffle'
  | 'repeat'
  | 'heart'
  | 'heart-fill'
  | 'share'
  | 'more'
  | 'home'
  | 'search'
  | 'library'
  | 'back'
  | 'verified'
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'check'
  | 'volume'
  | 'volume-off';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      @switch (name()) {
        @case ('play') {
          <path d="M8.2 5.4a.9.9 0 0 0-1.4.75v11.7a.9.9 0 0 0 1.4.75l9.7-5.85a.9.9 0 0 0 0-1.5L8.2 5.4Z" />
        }
        @case ('pause') {
          <path d="M6.5 5.5h3.2v13H6.5v-13Zm7.8 0h3.2v13h-3.2v-13Z" />
        }
        @case ('next') {
          <path d="M5.2 5.6v12.8l8.6-6.4L5.2 5.6Zm10.3 0h2.3v12.8h-2.3V5.6Z" />
        }
        @case ('prev') {
          <path d="M18.8 5.6v12.8l-8.6-6.4 8.6-6.4ZM6.2 5.6h2.3v12.8H6.2V5.6Z" />
        }
        @case ('shuffle') {
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7h3.2c.7 0 1.3.3 1.7.9L16 17.2c.4.5 1 .8 1.7.8H21M16.8 7H21M18.6 5.2 21 7l-2.4 1.8M3 17h3.2c.7 0 1.3-.3 1.7-.9l1.4-1.9M16.8 17H21M18.6 15.2 21 17l-2.4 1.8"
          />
        }
        @case ('repeat') {
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 3.8 19.5 6 17 8.2M6.5 6H16a3 3 0 0 1 3 3v2.2M7 20.2 4.5 18 7 15.8M17.5 18H8a3 3 0 0 1-3-3v-2.2"
          />
        }
        @case ('heart') {
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linejoin="round"
            d="M12 19.4s-6.6-4.1-6.6-8.6A3.5 3.5 0 0 1 12 8.1a3.5 3.5 0 0 1 6.6 2.7c0 4.5-6.6 8.6-6.6 8.6Z"
          />
        }
        @case ('heart-fill') {
          <path d="M12 19.4s-6.6-4.1-6.6-8.6A3.5 3.5 0 0 1 12 8.1a3.5 3.5 0 0 1 6.6 2.7c0 4.5-6.6 8.6-6.6 8.6Z" />
        }
        @case ('share') {
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 14.5V4.8m0 0 3.2 3.2M12 4.8 8.8 8M6.5 11v6.8a1.2 1.2 0 0 0 1.2 1.2h8.6a1.2 1.2 0 0 0 1.2-1.2V11"
          />
        }
        @case ('more') {
          <circle cx="5.5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="18.5" cy="12" r="1.5" />
        }
        @case ('home') {
          <path d="M4.2 10.8 12 4.2l7.8 6.6V19a1.2 1.2 0 0 1-1.2 1.2h-4.4v-5.4H9.8v5.4H5.4A1.2 1.2 0 0 1 4.2 19v-8.2Z" />
        }
        @case ('search') {
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            d="M10.8 17.2a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8Zm4.7-1.7 3.7 3.7"
          />
        }
        @case ('library') {
          <path d="M4 4.5h2.2v15H4v-15Zm4.3 0h2.2v15H8.3v-15Zm5 .8 6.5 1.2v12.8l-6.5-1.2V5.3Z" />
        }
        @case ('back') {
          <path
            d="M14.8 5.2 8.2 12l6.6 6.8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('verified') {
          <path
            d="M12 2.5 14.1 4l2.5.2.9 2.3 2.1 1.5-.6 2.5.6 2.5-2.1 1.5-.9 2.3-2.5.2L12 21.5 9.9 20l-2.5-.2-.9-2.3-2.1-1.5.6-2.5-.6-2.5 2.1-1.5.9-2.3 2.5-.2L12 2.5Z"
          />
          <path
            d="m8.9 12 2 2 4.2-4.2"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('mail') {
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linejoin="round"
            d="M4.5 7h15v10h-15V7Zm0 0 7.5 5.5L19.5 7"
          />
        }
        @case ('github') {
          <path
            d="M12 2.4c-5.3 0-9.6 4.3-9.6 9.6 0 4.2 2.7 7.8 6.5 9.1.5.1.6-.2.6-.5v-1.7c-2.6.6-3.2-1.1-3.2-1.1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2-.2-4.2-1-4.2-4.5 0-1 .4-1.8 1-2.5-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .5 1.2.2 2.2.1 2.4.6.7 1 1.5 1 2.5 0 3.5-2.1 4.3-4.2 4.5.3.3.6.8.6 1.7v2.5c0 .3.2.6.6.5 3.8-1.3 6.5-4.9 6.5-9.1C21.6 6.7 17.3 2.4 12 2.4Z"
          />
        }
        @case ('linkedin') {
          <path
            d="M6.2 9.4H3.8V20h2.4V9.4ZM5 4.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM20.2 20h-2.4v-5.1c0-1.4-.5-2.4-1.8-2.4-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8V20H11.8s0-9.3 0-10.6h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.4 0 4 1.5 4 4.9V20Z"
          />
        }
        @case ('instagram') {
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            d="M8.2 4.5h7.6A3.7 3.7 0 0 1 19.5 8.2v7.6a3.7 3.7 0 0 1-3.7 3.7H8.2A3.7 3.7 0 0 1 4.5 15.8V8.2A3.7 3.7 0 0 1 8.2 4.5Z"
          />
          <circle cx="12" cy="12" r="3.1" fill="none" stroke="currentColor" stroke-width="1.7" />
          <circle cx="16.9" cy="7.2" r="0.85" />
        }
        @case ('check') {
          <path
            d="m6.2 12.2 3.5 3.5 8.1-8.1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('volume') {
          <path d="M4.2 9.2h3L11.5 5.8v12.4L7.2 14.8h-3V9.2Z" />
          <path
            d="M14.8 9.4a3.2 3.2 0 0 1 0 5.2M17.2 7.2a5.8 5.8 0 0 1 0 9.6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        }
        @case ('volume-off') {
          <path d="M4.2 9.2h3L11.5 5.8v12.4L7.2 14.8h-3V9.2Z" />
          <path
            d="m15 9.8 4.4 4.4m0-4.4L15 14.2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      width: 1em;
      height: 1em;
      line-height: 0;
      color: inherit;
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: currentColor;
      overflow: visible;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}

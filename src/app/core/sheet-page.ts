import { Directive, inject } from '@angular/core';
import { Sheet } from './sheet';

@Directive({
  selector: '[appSheetPage]',
  host: {
    class: 'sheet-page',
    '[class.is-leaving]': 'sheet.phase() === "leave"',
  },
})
export class SheetPage {
  protected readonly sheet = inject(Sheet);
}

import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Sheet } from './sheet';

export const deferSheetLeave: CanDeactivateFn<unknown> = (_component, _current, _state, next) => {
  const sheet = inject(Sheet);
  if (sheet.isDetail(next.url)) {
    return true;
  }
  return sheet.beginLeave();
};

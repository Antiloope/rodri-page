import { Routes } from '@angular/router';
import { deferSheetLeave } from './core/sheet-guard';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  {
    path: 'song/:id',
    canDeactivate: [deferSheetLeave],
    loadComponent: () => import('./pages/song-page').then((m) => m.SongPage),
  },
  {
    path: 'album/:id',
    canDeactivate: [deferSheetLeave],
    loadComponent: () => import('./pages/album-page').then((m) => m.AlbumPage),
  },
  {
    path: 'playlist/:id',
    canDeactivate: [deferSheetLeave],
    loadComponent: () => import('./pages/playlist-page').then((m) => m.PlaylistPage),
  },
  { path: '**', redirectTo: '' },
];

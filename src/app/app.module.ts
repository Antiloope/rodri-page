import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { ContactComponent } from './contact/contact.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PlaylistsComponent } from './playlists/playlists.component';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './song/song.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { PlaylistViewComponent } from './playlist-view/playlist-view.component';

const routes: Routes = [
  { path: 'song/:id', component: SongComponent },
  { path: 'album/:id', component: AlbumViewComponent },
  { path: 'playlist/:id', component: PlaylistViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopFiveComponent,
    ContactComponent,
    AlbumsComponent,
    AboutComponent,
    PlaylistsComponent,
    SongComponent,
    AlbumViewComponent,
    PlaylistViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    OwlModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

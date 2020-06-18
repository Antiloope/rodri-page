import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { TopFiveComponent } from './top-five/top-five.component';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from "@angular/material/divider";
import { ContactComponent } from './contact/contact.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PlaylistsComponent } from './playlists/playlists.component';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './song/song.component';
import {MatSliderModule} from "@angular/material/slider";
import { AlbumViewComponent } from './album-view/album-view.component';

const routes: Routes = [
  { path: 'song/:id', component: SongComponent },
  { path: 'album/:id', component: AlbumViewComponent },
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
    AlbumViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatSliderModule,
    OwlModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

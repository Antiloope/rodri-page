import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Playlist} from '../global-types';
import {albums, lang, playlists, upDownAnimation} from '../global-content';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss'],
  animations: upDownAnimation,
})
export class PlaylistViewComponent implements OnInit {
  langId: number;
  texts: any = [];
  isOpen = false;
  currentPlaylist: Playlist;
  toggle() {
    (document.querySelector('#album') as HTMLElement).style.top = window.pageYOffset + 'px';
    if (this.isOpen){
      document.body.style.overflow = 'visible';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 400);
      setTimeout(() => {
        this.isOpen = false;
      }, 1);
    }else{
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        this.isOpen = true;
      }, 1);
    }
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (lang.split('-')[0] === 'es') {this.langId = 1; }
    else { this.langId = 0; }
    this.toggle();
    this.route.paramMap.subscribe(params => {
      this.currentPlaylist = playlists.find(play => play.id === +params.get('id'));
      document.getElementById('playlist-div').innerHTML = this.currentPlaylist.embedded;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Album} from '../global-types';
import {albums, lang} from '../global-content';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  langId: number;
  texts: any = [
    ['Albums', 'Albums'],
  ];
  mySlideOptions = {
    autoWidth: true,
    dots: false,
    nav: false,
    lazyLoad: true,
    margin: 20,
  };

  // tslint:disable-next-line:variable-name
  _albums: Album[] = albums;

  ngOnInit(): void {
    if (lang.split('-')[0] === 'es'){
      this.langId = 1;
    }else{
      this.langId = 0;
    }
  }

}

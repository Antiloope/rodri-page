import { Component, OnInit } from '@angular/core';
import {lang, Song, songs} from "../app.component";
import {range} from "rxjs";

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {

  constructor() {
  }

  langId:number;
  texts:any=[
    ["Popular","Popular"],
  ]

  ngOnInit(): void {
    if (lang.split('-')[0]==='es'){
      this.langId=1;
    }else{
      this.langId=0;
    }
    for (let i = 1; i < 6; i++){
      let tmp = songs.find(song => song.id === i);
      if (tmp) this.experiences.push(tmp);
      else break;
    }
  }

  experiences:Song[] = [];
}

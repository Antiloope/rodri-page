import { Component, OnInit } from '@angular/core';
import {Song, songs} from "../app.component";

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  experiences:Song[] = songs;
}

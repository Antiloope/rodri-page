import { Component, OnInit } from '@angular/core';

export interface Experience {
  id: number;
  name: string;
  duration: string;
  image: string;
}

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

  experiences: Experience[] = [
    {
      id: 1,
      name: "Siges",
      image: "assets/siges.jpg",
      duration: "2019 (July) - today"
    },
    {
      id: 2,
      name: "School support classes",
      image: "assets/school.png",
      duration: "2018 - today"
    },
    {
      id: 3,
      name: "Internship in Pentacom",
      image: "assets/pentacom.png",
      duration: "2016 (3 months)"
    },
  ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  public insta: Instagram[] = instagram;

  ngOnInit(): void {
    console.log('InstagramComponent');
  }
}

export interface Instagram {
  id: number,
  img: string
}

export const instagram: Instagram[] = [
  {
      "id": 1,
      "img": "assets/img/ig/1.jpg"
  },
  {
      "id": 2,
      "img": "assets/img/ig/2.jpg"
  },
  {
      "id": 3,
      "img": "assets/img/ig/3.jpg"
  },
  {
      "id": 4,
      "img": "assets/img/ig/4.jpg"
  },
  {
      "id": 5,
      "img": "assets/img/ig/5.jpg"
  },
  {
      "id": 6,
      "img": "assets/img/ig/6.jpg"
  },
  {
      "id": 7,
      "img": "assets/img/ig/7.jpg"
  },
  {
      "id": 8,
      "img": "assets/img/ig/8.jpg"
  }
]
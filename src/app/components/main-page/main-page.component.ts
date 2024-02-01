import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  images = [
    {
      imageSrc: '../../../assets/img/JSbankCard02.jpg',
      imageAlt: 'imagen1',
    },
    {
      imageSrc: '../../../assets/img/JSbankCard03.jpg',
      imageAlt: 'imagen2',
    },
    {
      imageSrc: '../../../assets/img/JSbankCard04.jpg',
      imageAlt: 'imagen3',
    }
  ]
}

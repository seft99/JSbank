import { Component, Input, OnInit } from '@angular/core';

interface carouselimg{
  imageSrc : string;
  imageAlt : string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images : carouselimg[] = [];
  @Input() indicador = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;
  selectedIndex = 0;
  ngOnInit(){
    if(this.autoSlide){
      this.autoSlideImg()
    }
  }

  autoSlideImg(){
    setInterval(()=> {
      this.onNextClick();

    }, this.slideInterval);
  }


  selectImg(index : number) {
      this.selectedIndex = index;
  }

  onPrevClick(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1 ;
    }else{
      this.selectedIndex -- ;
    }
  }

  onNextClick(){
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex ++;
    }
  }
}

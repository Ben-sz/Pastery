import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-herobuilder',
  templateUrl: './herobuilder.component.html',
  styleUrls: ['./herobuilder.component.scss']
})
export class HerobuilderComponent implements OnInit {

  bgOpacity: number;
  horizontalPadding: number;
  verticalPadding: number;

  bgColor: string;
  
  constructor() {
    this.bgOpacity= 50;
    this.horizontalPadding= 5;
    this.verticalPadding= 50;
    this.bgColor = '#000000cf';

   }

  ngOnInit(): void {
  }


  bgOpacityChange(event) {
    this.bgOpacity = event.value;
  }


  vPaddingChange(event) {
    this.verticalPadding = event.value;
  }

  hPaddingChange(event) {
    this.horizontalPadding = event.value;
  }


  onChangeColor(color: string): void {
    console.log('Color changed:', color);
  }
}

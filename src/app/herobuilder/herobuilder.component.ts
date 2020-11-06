import { Component, OnInit } from '@angular/core';
import { Rgba } from 'ngx-color-picker';


@Component({
  selector: 'app-herobuilder',
  templateUrl: './herobuilder.component.html',
  styleUrls: ['./herobuilder.component.scss']
})
export class HerobuilderComponent implements OnInit {

  bgOpacity: number;
  horizontalPadding: number;
  verticalPadding: number;
  borderWidth: number;
  heroText: string;
  bgColor: string;

  htmlStr: string;


  
  
  constructor() {
    this.bgOpacity= 50;
    this.horizontalPadding= 50;
    this.verticalPadding= 30;
    this.bgColor = '#000000cf';
    this.heroText = "Serenity";
    this.borderWidth = 3;

    this.htmlStr = `<div class="hero-wrapper">
                      <div class="hero-container">
                      <div class="box hero-layer">
      <div class="hero-text">
      ` +
        this.heroText +
     `
     </div>
    </div>
  </div>
</div>`
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

  borderWChange(event) {
    this.borderWidth = event.value;
  }


  onChangeColor(color: string): void {
    console.log('Color changed:', color);
  }
}

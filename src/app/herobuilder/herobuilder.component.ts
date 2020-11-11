import { Component, OnInit } from '@angular/core';
import { Rgba } from 'ngx-color-picker';
import {ViewChild, ElementRef} from '@angular/core';

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
  csscodeToCopy: string;
  heroFontSize: number;
  bgXPos: number;
  bgYPos: number;
  heroHeight: number;

  htmlStr: string;

  constructor() {

    this.bgOpacity= 50;
    this.horizontalPadding= 50;
    this.verticalPadding= 30;
    this.bgColor = '#000000cf';
    this.heroText = "Serenity";
    this.borderWidth = 3;
    this.heroFontSize = 48;
    this.bgXPos = 50;
    this.bgYPos = 63;
    this.heroHeight = 400;


   /*  this.htmlStr = 
  `<{{'&lt;'}}>div class=&quot;hero-wrapper&quot;&gt;
    {{'&lt;'}} div class=&quot;hero-container&quot;&gt;
  
      {{'&lt;'}} div class=&quot;box hero-layer&quot;&gt;
  
        {{'&lt;'}} div class=&quot;hero-text&quot;&gt;
  
        {{this.heroText}}
  
        {{'&lt;'}} /div&gt;
  
       {{'&lt;'}} /div&gt;
  
     {{'&lt;'}} /div&gt;
     
   {{'&lt;'}} /div&gt;
   ` */
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

  fontSizeChange(event){
    this.heroFontSize = event.value;
  }

  heightChange(event){
    this.heroHeight = event.value;
  }

  bgXPosChange(event){
    this.bgXPos = event.value;
  }

  bgYPosChange(event){
    this.bgYPos = event.value;
  }
  
  onChangeColor(color: string): void {
    console.log('Color changed:', color);
  }


  setCopyText(code){
  this.csscodeToCopy = code.innerHTML;
  return this.csscodeToCopy
  } 
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-herobuilder',
  templateUrl: './herobuilder.component.html',
  styleUrls: ['./herobuilder.component.scss']
})
export class HerobuilderComponent implements OnInit {

  bgOpacity: number;
  bgColorCode: string;
  
  constructor() {
    this.bgOpacity= 50;
   }

  ngOnInit(): void {
  }


  onInputChange(event) {
    this.bgOpacity = event.value;
  }
}

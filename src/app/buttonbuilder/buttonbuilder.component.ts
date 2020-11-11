import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonbuilder',
  templateUrl: './buttonbuilder.component.html',
  styleUrls: ['./buttonbuilder.component.scss']
})
export class ButtonbuilderComponent implements OnInit {

  buttonText: string;
  borderwidth: number;
  borderColor: string;
  borderRadius: number;
  bgColor: string;
  padding: number;
  fontSize: number;



  constructor() {
    this.bgColor = "#D2DEEF";
    this.buttonText = "Click here";
    this.borderwidth = 1;
    this.borderColor = "white";
    this.borderRadius = 10;
    this.padding = 5;
    this.fontSize = 18;
   }

  ngOnInit(): void {
  }

}

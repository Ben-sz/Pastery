import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HerobuilderComponent } from './herobuilder/herobuilder.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from "@angular/cdk/clipboard";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HerobuilderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
    ColorPickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSliderModule,
    MatInputModule
  ]
})
export class AppModule { }

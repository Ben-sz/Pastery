import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerobuilderComponent } from './herobuilder/herobuilder.component';
import { ButtonbuilderComponent } from './buttonbuilder/buttonbuilder.component';

const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', component: HerobuilderComponent },
  { path: 'button', component:  ButtonbuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

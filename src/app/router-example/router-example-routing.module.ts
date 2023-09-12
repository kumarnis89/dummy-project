import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path : 'first', component : FirstComponent, title : 'First component'},
  {path : 'second', component : SecondComponent, title : 'Second Component'},
  // {path : '', redirectTo: '/first', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterExampleRoutingModule { }

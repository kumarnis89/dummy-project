import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterExampleRoutingModule } from './router-example-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterExampleRoutingModule
  ],
  exports : [
    FirstComponent,
    SecondComponent
  ]
})
export class RouterExampleModule { }

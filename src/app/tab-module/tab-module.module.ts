import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabListComponent } from './tab-list/tab-list.component';



@NgModule({
  declarations: [
    TabComponent,
    TabListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabListComponent
  ]
})
export class TabModuleModule { }

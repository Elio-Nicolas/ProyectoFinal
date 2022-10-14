import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHomeComponent } from './my-home/my-home.component';



@NgModule({
  declarations: [
    MyHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyHomeComponent
  ]
})
export class HomeModule { }

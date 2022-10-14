import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoryComponent } from './my-story/my-story.component';



@NgModule({
  declarations: [
    MyStoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyStoryComponent
  ]
})
export class MyStoryModule { }

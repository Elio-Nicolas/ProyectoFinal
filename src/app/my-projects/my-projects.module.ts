import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProjectsComponent } from './my-projects/my-projects.component';
import { EpicKComponent } from './epic-k/epic-k.component';
import { StoryJComponent } from './epic-k/story-j/story-j.component';



@NgModule({
  declarations: [
   EpicKComponent,
   StoryJComponent,
   MyProjectsComponent

  ],
  imports: [
    CommonModule
  ],
  
  exports: [
    EpicKComponent,
    StoryJComponent,
    MyProjectsComponent
  ]
})
export class MyProjectsModule { }

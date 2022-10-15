import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MyStoryModule } from './my-story/my-story.module';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectNComponent } from './my-projects/project-n/project-n.component';
import { EpicKComponent } from './my-projects/project-n/epic-k/epic-k.component';
import { StoryJComponent } from './my-projects/project-n/epic-k/story-j/story-j.component';
import { TaskComponent } from './my-projects/project-n/epic-k/story-j/task/task.component';





@NgModule({
  declarations: [
    AppComponent,
    MyProjectsComponent,
    ProjectNComponent,
    EpicKComponent,
    StoryJComponent,
    TaskComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MyStoryModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

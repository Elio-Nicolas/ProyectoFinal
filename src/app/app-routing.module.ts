import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { MyHomeComponent } from './home/my-home/my-home.component';
import { MyProjectsComponent } from './my-projects/my-projects/my-projects.component';
import { MyStoryComponent } from './my-story/my-story/my-story.component';

const routes: Routes = [
  {path: '',
  component:MyHomeComponent
  },

  {
  path:'my-Projects',
  component:MyProjectsComponent
  },

  {path: 'my-Story',
  component:MyStoryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

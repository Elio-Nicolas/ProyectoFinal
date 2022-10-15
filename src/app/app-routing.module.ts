import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './home/Home/my-home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { EpicKComponent } from './my-projects/project-n/epic-k/epic-k.component';
import { StoryJComponent } from './my-projects/project-n/epic-k/story-j/story-j.component';
import { ProjectNComponent } from './my-projects/project-n/project-n.component';
import { MyStoryComponent } from './my-story/my-story/my-story.component';
import { SettingsComponent } from './settings/settings/settings.component';

//const routes!: Routes ;

@NgModule({
  imports: [RouterModule.forRoot(
    [
  
      {path: '',
      component:MyHomeComponent
      },
    
     
      {path: 'my-Story',
      component:MyStoryComponent
      },

      {path: 'Settings',
       component:SettingsComponent
      },

      {path: 'my-projects',
       component: MyProjectsComponent
      },

      {path: 'my-projects/project-n',
       component:ProjectNComponent
      },

      {path: 'my-projects/project-n/epic-k',
       component:EpicKComponent
      },

      {
        path: 'my-projects/project-n/epic-k/story-j',
        component:StoryJComponent
      }

    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

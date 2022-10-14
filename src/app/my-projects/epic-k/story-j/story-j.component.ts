import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-story-j',
  templateUrl: './story-j.component.html',
  styleUrls: ['./story-j.component.scss']
})
export class StoryJComponent implements OnInit {

  constructor(private servicioTarea: TaskService) { }

  ngOnInit(): void {
  }

  arrayTasks: Task[]=[{'id':1,'nombre':'comprar pan','estado':true},
                      {'id':2,'nombre':'comprar leche','estado':true}
                      ];
  

   enviarTarea(){
    
    this.servicioTarea.EnviaTarea(this.arrayTasks);
   }                   

  
}

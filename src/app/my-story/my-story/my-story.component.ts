import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-my-story',
  templateUrl: './my-story.component.html',
  styleUrls: ['./my-story.component.scss']
})
export class MyStoryComponent implements OnInit {

  constructor( private servicioTarea: TaskService) { }

  arrayTarea: Task[]=[]
  ngOnInit(): void {

    this.servicioTarea.datoTarea.subscribe(data=> {
      console.log( ' ' ,data);
      this.arrayTarea.push(data);
    });
  }

}

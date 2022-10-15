import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private servicioTarea: TaskService ) { }

  @Output() envio: EventEmitter<string>=new EventEmitter();

  ngOnInit(): void {
  }

  enviar(tarea:string){

    this.servicioTarea.EnviaTarea(tarea);

  }
}

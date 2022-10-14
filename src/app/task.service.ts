import { EventEmitter, Injectable,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  @Output() datoTarea: EventEmitter<any>= new EventEmitter();

  constructor() { }

  EnviaTarea(data:any){
    this.datoTarea.emit(data);
  }

}

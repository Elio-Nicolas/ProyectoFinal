import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  @Output() datoTarea: EventEmitter<any>= new EventEmitter();

  constructor(private http:HttpClient) { }

  EnviaTarea(data:any){
    this.datoTarea.emit(data);
  }

  
}

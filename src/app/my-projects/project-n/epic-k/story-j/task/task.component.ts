import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public datos :any =[]

  public x:any

  constructor(private servicioTarea: TaskService, private servicio: ServiciosService,
              private http: HttpClient ) { }

  @Output() envio: EventEmitter<string>=new EventEmitter();

  ngOnInit(): void {
    //this.route.paramMap.subscribe( (paramMap:any)=>{
     // const {params}= paramMap
     this.cargaTask()

     //console.log(paramMap)
      //this.cargaProject()
    //})
  }


  cargaTask(){
    this.servicio.get('http://localhost:3001/apiWeb/tasks').
    subscribe( (respuesta)=>{
      this.datos=(respuesta)
    })
  }
  enviar(tarea:string){

    this.servicioTarea.EnviaTarea(tarea);

  }

  enviaTask(data:string,event: MouseEvent){
    //event.preventDefault(); 
    this.servicio.post(data).
    subscribe((respuesta) => {this.datos.unshift(data)
     this.x= (respuesta)
     console.log(this.x)
    })
  }
}

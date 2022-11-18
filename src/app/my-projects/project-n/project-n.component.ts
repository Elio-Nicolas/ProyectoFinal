import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';

@Component({
  selector: 'app-project-n',
  templateUrl: './project-n.component.html',
  styleUrls: ['./project-n.component.scss']
})
export class ProjectNComponent implements OnInit {

  public datos:any=[]

  constructor(private http:HttpClient  ,private servicio:ServiciosService) { }

  ngOnInit(): void {
    //this.route.paramMap.subscribe( (paramMap:any)=>{
     // const {params}= paramMap
     //console.log(paramMap)
      //this.cargaProject()
    //})
    this.cargaProject()
  }

  public cargaProject(){

    this.servicio.get('http://localhost:4200/my-projects/project-n').
    subscribe( (respuesta)=>{
      this.datos=respuesta
    })
  }
}

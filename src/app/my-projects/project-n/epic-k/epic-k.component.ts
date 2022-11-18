import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';

@Component({
  selector: 'app-epic-k',
  templateUrl: './epic-k.component.html',
  styleUrls: ['./epic-k.component.scss']
})
export class EpicKComponent implements OnInit {

  public datos: any=[]

  constructor(private http:HttpClient, private servicio:ServiciosService) { }

  ngOnInit(): void {
    //this.route.paramMap.subscribe( (paramMap:any)=>{
     // const {params}= paramMap
     this.cargaEpicas()

     //console.log(paramMap)
      //this.cargaProject()
    //})
  }

  public cargaEpicas(){
    this.servicio.get('http://localhost:4200/my-projects/project-n/epic-k').
    subscribe( (respuesta)=>{
      this.datos=respuesta
    })
  }
}

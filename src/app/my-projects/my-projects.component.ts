import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../Services/servicios.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor( private route:ActivatedRoute, private servicio: ServiciosService) { }

  public datos:any =[]

  ngOnInit(): void {

    //this.route.paramMap.subscribe( (paramMap:any)=>{
     // const {params}= paramMap
     this.cargaProject()

     //console.log(paramMap)
      //this.cargaProject()
    //})

  }

  public cargaProject(){
    this.servicio.get('http://localhost:3001/apiWeb/projects').
    subscribe(respuesta=>{
      this.datos=respuesta;
      console.log(respuesta)
    })
    

  }
}

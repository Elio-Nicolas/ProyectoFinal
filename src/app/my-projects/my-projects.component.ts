import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../Services/servicios.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  public respuesta:any

  constructor( private route:ActivatedRoute, private servicio: ServiciosService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( (paramMap:any)=>{
     // const {params}= paramMap
     this.cargaProject()

     //console.log(paramMap)
      //this.cargaProject()
    })

  }

  cargaProject(){
    this.servicio.get('http://localhost:3001/apiWeb/projects').
    subscribe(respuesta=>{
      console.log(respuesta)
    })
    

  }
}

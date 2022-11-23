import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';

@Component({
  selector: 'app-story-j',
  templateUrl: './story-j.component.html',
  styleUrls: ['./story-j.component.scss']
})
export class StoryJComponent implements OnInit {

  public datos: any=[]
  constructor(private http:HttpClient, private servicio:ServiciosService) { }

  ngOnInit(): void {
    //this.route.paramMap.subscribe( (paramMap:any)=>{
     // const {params}= paramMap
     this.cargaStory()

     //console.log(paramMap)
      //this.cargaProject()
    //})
  }

  public cargaStory(){
    this.servicio.get('http://localhost:3001/apiWeb/storys').
    subscribe( (respuesta)=>{
      this.datos=(respuesta)
    })
  }
}

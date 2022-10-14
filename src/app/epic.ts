import { Datos } from "./datos";

export class Epic implements Datos {
    id: number;
    nombre: string;
    informacion: string;

    constructor( id:number,nombre:string,info:string){

        this.id=id;
        this.nombre=nombre;
        this.informacion=info;

    }
}

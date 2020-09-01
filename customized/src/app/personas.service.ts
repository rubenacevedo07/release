import { Persona } from './persona.model';
import { LoginService } from './login.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Juan","Perez"), 
        new Persona("Laura","Juarez")
    ];

    saludar = new EventEmitter<number>();

    constructor(private loginService: LoginService){}

    agregarPersona(persona: Persona){
        this.loginService.consolaEnviaMensaje("agregamos persona:" + persona.toString());
        this.personas.push(persona);
    }

    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        this.loginService.consolaEnviaMensaje("persona encontrada:" + persona.toString());
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        this.loginService.consolaEnviaMensaje("persona a modificar:" + persona.toString() + " con indice:" + index);
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index:number){
        this.loginService.consolaEnviaMensaje("eliminar persona con indice: " + index); 
        this.personas.splice(index,1);
    }
}
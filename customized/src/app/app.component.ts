import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customized';
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona("Juan","Perez"), new Persona("Laura","Juarez")];
 
  constructor(private loginService: LoginService){}

  onPersonaAgregada(persona: Persona){
    this.loginService.consolaEnviaMensaje("agregamos al arreglo la nueva persona:" + persona.nombre);
    this.personas.push(persona);
  }
}

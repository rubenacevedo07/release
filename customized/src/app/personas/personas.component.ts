import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoginService } from '../login.service';
import { PersonasService } from '../personas.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
    agregarPersona=false;
    agregarPersonaStatus = "No se ha agregado ninguna persona";
    tituloPersona = "Ingeniero";

    personas: Persona[] = [];
  
    constructor(private loggingService: LoginService,
              private personasService: PersonasService,
              private router: Router,
              private route:ActivatedRoute
              ){}
    
    ngOnInit(): void {
     this.personas = this.personasService.personas;
    }

    irAgregar(){
      console.log("nos vamos a agregar ");
      this.router.navigate(['./personas/agregar'],{queryParams:{modoEdicion:0}});
    }
}
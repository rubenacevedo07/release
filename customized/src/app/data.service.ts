import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient,
                private loginService: LoginService        
        ) { }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://*.firebaseio.com/datos.json?auth=' + token);
    }

    //Guarda todo el arreglo de personas 
    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://*.firebaseio.com/datos.json?auth=' + token, personas)
            .subscribe(
                (response) => {
                    console.log("resultado guardar Personas: " + response);
                },
                (error) => console.log("Error en guardar Personas: " + error)
            );
    }


    modificarPersona(index:number, persona: Persona){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://*.firebaseio.com' + '/datos/' + index + '.json?auth=' + token;
        console.log("url de modificarPersona:" + url);
        this.httpClient.put( url, persona)
            .subscribe(
                (response) => {
                    console.log("resultado modificar Persona: " + response);
                },
                (error) => console.log("Error en modificar Persona: " + error)
            );
    }

    eliminarPersona(index:number){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://*.firebaseio.com' + '/datos/' + (index) + '.json?auth=' + token;
        console.log("url de eliminarPersona:" + url);
        this.httpClient.delete( url)
            .subscribe(
                (response) => {
                    console.log("resultado eliminar Persona: " + response);
                },
                (error) => console.log("Error en eliminar Persona: " + error)
            );
    }

}
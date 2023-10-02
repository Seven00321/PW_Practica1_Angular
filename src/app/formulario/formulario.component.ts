import { Component } from '@angular/core';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
    
    openAlert: boolean = false;
    
    ngOnInit():void{

    }

    mostrar_en_consola(name:string){
        console.log("Bienvenido", name)
        this.openAlert = true;
    }
}

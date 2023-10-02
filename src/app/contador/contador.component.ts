import { Component, OnInit } from '@angular/core';
import { persona } from '../persona';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
    constructor(){ }

    ngOnInit(): void {
        
    }
 
    // persona:persona = {
    //     nombre: 'Richard Mikahel',
    //     edad: 23
    // }

    numero: number = 1;

    // Metodos
    decrementar = () => this.numero--;

    incrementar = () => this.numero +=1;
    
    

}

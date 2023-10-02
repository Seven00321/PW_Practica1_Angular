import { Component } from '@angular/core';
import { persona } from '../persona';

@Component({
    selector: 'app-bucles',
    templateUrl: './bucles.component.html',
    styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

    personas: persona[] = [];


    constructor(){

    }

    ngOnInit():void{

    }
}

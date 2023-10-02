import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';

import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
    declarations: [
        AppComponent,
        ContadorComponent,
        BotonesComponent,
        FormularioComponent,
        BuclesComponent,

        PersonasComponent,
        PersonaComponent,
        CalculadoraComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

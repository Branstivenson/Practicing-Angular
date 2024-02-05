import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from "./botones/botones.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { BuclesComponent } from "./bucles/bucles.component";
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [Formulario2Component, RouterOutlet, ContadorComponent, BotonesComponent, FormularioComponent, BuclesComponent, SwitchComponent]
})
export class AppComponent {
  title = 'CURSO ANGULAR';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  openAlert:boolean=false;

  mostrar_en_consola(name:string){
    console.log(name)
    this.openAlert=true
  }
}

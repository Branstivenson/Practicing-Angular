import { Component } from '@angular/core';
import { Persona } from '../persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

  personas:Persona[]=[
    { nombre: 'brayan', edad: 19},
    { nombre: 'jeni', edad: 22},
    { nombre: 'angela', edad: 25},
    { nombre: 'joselyn', edad: 28},
  ];


}

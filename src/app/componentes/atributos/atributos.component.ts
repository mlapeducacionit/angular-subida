import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResaltarDirective } from '../../directivas/resaltar.directive';

// Decorador (herencia dinamica)
@Component({
  selector: 'app-atributos',
  imports: [
    CommonModule,
    ResaltarDirective
  ],
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {

  // propiedad/atributo
  estado1 = true
  estado2 = true
  // métodos
  cambiarPropiedad(estado1: boolean) {
    return {
      backgroundColor: estado1 ? 'blue' : 'gold',
      color: estado1 ? 'white' : 'black',
      padding: estado1 ? '10px' : '15px',
      'border-radius': '10px'
    }
  }
  cambiarClase() {
    return {
      btn: true,
      'btn-dark': !this.estado2,
      'btn-danger': this.estado2
    }
  }

}

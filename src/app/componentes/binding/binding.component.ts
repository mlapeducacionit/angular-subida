import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  // atributos/propiedades
  public mensaje:string = 'Hola mundo'
  valor1 = 345 // valor1 va inferirlo como un numero
  valor2 = 789
  contador = 0
  valor3 = 222
  valor4 = 555
  clientes:string[] = []

  constructor(private clientesService: ClientesService) {
    this.clientes = this.clientesService.getClientes()
  }

  // métodos
  modificar(e:any) {
    //console.log(e)
    //console.log(e.target.value)
    let valor = e.target.value

    this.valor3 = valor
  }

  borrarCliente() {
    this.clientesService.borrarUltimoCliente()
  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  // atributos/propiedades
  private clientes:string[] = [
    'Pedro',
    'Juana',
    'Selena',
    'Laura',
    'Roberto'
  ]

  // Métodos
  // GET CLIENTES
  getClientes():string[] {
    return this.clientes
  }

  // POST CLIENTE
  agregarCliente(cliente:string):void {
    this.clientes.push(cliente)
  }

  // DELETE CLIENTE
  borrarUltimoCliente():void {
    this.clientes.pop()
  }

}

import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {


  clientes:string[] = []
  cliente:string = ''

  // Patrón de diseño inyección de dependencias
  // Cuando la clase ClientesComponente se crea (construye) pide al servicio el array de clientes
  constructor(private clientesService: ClientesService, private router: Router) {
    this.clientes = this.clientesService.getClientes()
    console.log(this.clientes) // Tengo los clientes que me entrega el servicio.
  }

  agregarCliente(cliente:string):void {
    this.clientesService.agregarCliente(cliente)
  }

  verProductos() {
    this.router.navigate(['/productos'])
  }

  verProductosParametros() {
    // Parametros -> http://localhost:4200/productos/id
    // Parametros -> http://localhost:4200/productos/42
    this.router.navigate(['/productos', 42])
  }

  verProductosConQueryParams() {
    this.router.navigate(['/productos'], {
      // Query String -> http://localhost:4200/productos?categoria=electro&orden=precio
      queryParams: { categoria: 'electro', orden: 'precio'}
    })
  }

}

import { Component } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Producto } from '../../modelos/producto';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-productos-back',
  imports: [],
  templateUrl: './productos-back.component.html',
  styleUrl: './productos-back.component.css'
})
export class ProductosBackComponent {

  // Atributo/Propiedad
  productos:Producto[] = []

  // inyección de dependencias
  constructor(private productosService: ProductosService) {}

  private handleError(error:any) {
    return throwError(() => 'No se pudo obtener los productos')
  }

  obtenerProductos() {
    this.productosService.obtener()
    .pipe(catchError(error => this.handleError(error)))
    .subscribe((productos:Producto[]) => {
      console.log(productos)
      this.productos = productos
    })
  }

  guardarProducto() {
    const nuevoProducto:Producto = {
      nombre: 'Teclado',
      precio: 33
    }

    this.productosService.guardar(nuevoProducto).subscribe((producto:Producto) => {
      console.log(producto)

      this.productos.push(producto)
    })
  }

}

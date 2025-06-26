import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:8080/productos/'

  // Inyección de dependencias
  // https://refactoring.guru/es/design-patterns/observer
  // https://rxjs.dev/
  // https://rxjs.dev/guide/operators
  // https://i.sstatic.net/Ewn3b.png

  constructor(private httpClient: HttpClient) { }

  // ! CRUD
  // ! R:READ -> Method GET
  // ? input: No tiene
  // ? output: Observable
  obtener() {
    return this.httpClient.get<Producto[]>(this.url) // retorna una observable
  }
  // ! C:CREATE -> Method POST
  // * -> Necesito el producto que voy a crear (Se envia por el body)
  // ? input: producto
  // ? output: Observable
  guardar(producto:Producto) {
    return this.httpClient.post<Producto>(this.url, producto) // retorna una observable
  }
  // ! U:UPDATE -> Method PUT
  // * -> El producto actualizado (Se envia el body)
  // * -> Y el ID que (se envía por la URL)
  // ? input: producto, id
  // ? output: Observable
  actualizar(productoActualizado:any, id:string) {

  }
  // ! D:DELETE -> Method DELETE
  // * -> El id del producto que quiero eliminar
  // ? input: id
  // ? output: Observable
  borrar(id:string) {

  }


}

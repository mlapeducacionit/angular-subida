import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
// Ciclos de vida de los componentes de Angular
// https://v17.angular.io/guide/lifecycle-hooks
// Implementar la interfaz (Contrato que propone) OnInit
// Uso	                         Constructor	                             ngOnInit()
// ¿Cuándo se ejecuta?	         Al crear la instancia del componente	     Cuando Angular termina de inicializar las propiedades del componente
// ¿Qué se debería hacer?	       Inyección de dependencias y setup simple	 Lógica de inicialización más compleja (como cargar datos, subscribirse a observables, etc.)
// ¿Se accede al @Input()?	     ❌ No	                                   ✅ Sí
// ¿Es asincrónico?	             ❌ No                                    ✅ Puede ser


export class ProductosComponent implements OnInit {

  categoria:string|null = ''
  orden:string|null = ''
  id:string|null = ''

  constructor(private router: ActivatedRoute) {
    // https://refactoring.guru/es/design-patterns/observer
    /* this.router.queryParamMap.subscribe(params => {
      this.categoria = params.get('categoria')
      this.orden = params.get('orden')
    }) */
  }

  ngOnInit() {
    this.router.snapshot.paramMap.get('id') // string | null
    this.router.queryParamMap.subscribe(params => {
      this.categoria = params.get('categoria') // string
      this.orden = params.get('orden') // string
    })
  }


  verInfo() {
    console.log(this.categoria)
    console.log(this.orden)
    console.log(this.id)
  }


}

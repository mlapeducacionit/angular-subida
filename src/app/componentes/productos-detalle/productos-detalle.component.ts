import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-detalle',
  imports: [],
  templateUrl: './productos-detalle.component.html',
  styleUrl: './productos-detalle.component.css'
})
export class ProductosDetalleComponent implements OnInit {

  id:string|null = ''
  constructor(private router: ActivatedRoute) {
    // https://refactoring.guru/es/design-patterns/observer
    // this.id = this.router.snapshot.paramMap.get('id') // string | null
  }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id') // string | null
  }

  verInfo() {
    console.log(this.id)
  }

}

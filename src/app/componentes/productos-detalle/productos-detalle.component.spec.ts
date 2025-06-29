import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDetalleComponent } from './productos-detalle.component';

describe('ProductosDetalleComponent', () => {
  let component: ProductosDetalleComponent;
  let fixture: ComponentFixture<ProductosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

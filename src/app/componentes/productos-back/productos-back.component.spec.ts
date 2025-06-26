import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBackComponent } from './productos-back.component';

describe('ProductosBackComponent', () => {
  let component: ProductosBackComponent;
  let fixture: ComponentFixture<ProductosBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

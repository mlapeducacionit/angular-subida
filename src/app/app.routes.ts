import { Routes } from '@angular/router';
import { BindingComponent } from './componentes/binding/binding.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { EstructuraModernoComponent } from './componentes/estructura-moderno/estructura-moderno.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductosDetalleComponent } from './componentes/productos-detalle/productos-detalle.component';
import { ProductosBackComponent } from './componentes/productos-back/productos-back.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' }, /* http://localhost:4200/ */
  { path: 'binding', component: BindingComponent }, /* case  http://localhost:4200/binding */
  { path: 'estructura', component: EstructuraComponent }, /* case http://localhost:4200/estructura */
  { path: 'estructura-moderno', component: EstructuraModernoComponent }, /* case */
  { path: 'atributos', component: AtributosComponent }, /* case */
  { path: 'formularios', component: FormulariosComponent },
  { path: 'productos-back', component: ProductosBackComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductosDetalleComponent },
  { path: '**', redirectTo: 'estructura' } /* default */
];

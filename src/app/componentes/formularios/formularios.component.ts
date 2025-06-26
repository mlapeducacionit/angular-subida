import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { VerificarEspacios, VerificarEspaciosConMensajesPersonalizados } from '../../validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {

  /* ------------------- */
  /* Template Driven     */
  /* ------------------- */
  /* propiedad/atributo */
  form = {
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    password: ''
  }

  logNombreControl(nombreControl:NgModel) {
    console.log(nombreControl)
  }

  enviar(loginForm:NgForm) {
    console.log('Se envía el form...')
    console.log(loginForm.form.value) // <---- todos los datos del formulario.
    /* TODO Reseteo formu */

    loginForm.form.reset()
  }

  /* ------------------- */
  /* Reactive Forms      */
  /* ------------------- */
  // FormBuilder, FormGroup, ReactiveFormsModule
  // Validaciones -> Validators

  /* Propiedad/Atributo */
  f:FormGroup
  sizeMinNombre = 4
  sizeMaxNombre = 11

  constructor(private fb: FormBuilder) {
    this.f = fb.group(
      {
        nombre: ['', Validators.compose([
          Validators.required,
          Validators.minLength(this.sizeMinNombre),
          Validators.maxLength(this.sizeMaxNombre),
          /* VerificarEspacios */
          VerificarEspaciosConMensajesPersonalizados('Campo con espacios intermedio. CUIDADO!')
        ])],
        apellido: ['', Validators.required],
        edad: ['', Validators.required],
        contacto: fb.group({
          correo: ['', Validators.required],
          telefono: ['', Validators.required],
        }),
        password: ['', Validators.required]
      }
    )
  }

  enviarRf() {
    console.log(this.f)
    console.log(this.f.value)
  }



}

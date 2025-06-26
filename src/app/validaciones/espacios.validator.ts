import { AbstractControl } from "@angular/forms";

export function VerificarEspacios(c: AbstractControl) {

  if ( c.value == null ) return null // Quiere decir que todavía no se escribió nada

  if ( c.value.includes(' ')) {
    return { conEspacios: 'Este campo no debe poseer espacios intermedios'}
  }

  return null

}

// Composicion de funciones

export function VerificarEspaciosConMensajesPersonalizados(mensaje: string) {

  return function VerificarEspacios(c: AbstractControl) {

    if ( c.value == null ) return null // Quiere decir que todavía no se escribió nada

    if ( c.value.includes(' ')) {
      return { conEspacios: mensaje }
    }

    return null

  }

}


/*
errors: null // ! sin errores

! con errores
errors: {
  require: true
}
 */

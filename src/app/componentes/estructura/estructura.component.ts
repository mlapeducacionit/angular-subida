import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estructura',
  imports: [CommonModule],
  templateUrl: './estructura.component.html',
  styleUrl: './estructura.component.css'
})
export class EstructuraComponent {

  // atributo/propiedades
  // tipos primitivos la inferencia perfecta
  mostrar = true

  // tipos objetos -> array, objetos, funciones (Peligroso)
  //personas:Array<string> = [
  personas:string[] = [
    'Juan',
    'Roberto',
    'Carlos',
    'Ramón',
    'Jose',
    'Matías',
  ]

  // alumnos:Array<any> = [
  alumnos:any[] = [
    { nombre: 'Juan', apellido: 'Gimenez', edad: 22, curso: true, foto: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png'},
    { nombre: 'Laura', apellido: 'Rodriguez', edad: 43, curso: false, foto: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'},
    { nombre: 'Cristina', apellido: 'Alvarez', edad: 21, curso: true, foto: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-1024.png'},
    { nombre: 'Roberto', apellido: 'Gutierrez', edad: 64, curso: false, foto: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png'},
    { nombre: 'Tomás', apellido: 'Gomez', edad: 12, curso: true, foto: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-1024.png'},
  ]

  // Métodos
  agregarAlumno() {
    const alumno:any = {
      nombre: 'Lucrecia',
      apellido: 'Lopez',
      edad: 21,
      curso: false,
      foto: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_person_kid_child-512.png'
    }

    this.alumnos.push(alumno)
  }

  borrarAlumno(index:number) {
    console.log(index)

    // método de los array -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.alumnos.splice(index, 1)
  }

}

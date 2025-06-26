import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  // Atributos/propiedades
  // @Input() conecta la propiedad de la clase con el atributo dentro de la plantilla
  // @Input() color:string = '' // con inilización
  // No tener que inicializarlo lo coloco opcional -> !
  @Input('colorInit') colorInicial!:string
  @Input('colorEnd') colorFinal:string = ''
  @Input() appResaltar:string = ''

  // Al usar la directiva es como si hiciera un new (Se crea la instancia y se ejecuta el contructor)
  // Y tengo como si hubiera hecho un querySelector sobre el elemnto que tenga la directiva como atributo
  constructor(private  el:ElementRef) {
    console.log('constructor Resaltar', el) // <--- node html
    // El constructor me da acceso directo al elemento html
    //el.nativeElement.style.color = 'yellow'
  }

  // Decorador para darla la capacidad al método para estar atento al mouse enter
  // node.addEventListener('mouseenter', () => {})
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Pasaron por arriba')
    // console.log(this.colorInicial)
    this.resaltar( this.colorInicial, this.appResaltar )
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Se fueron del elemento')
    this.resaltar( this.colorFinal, this.appResaltar )
  }

  private resaltar(colorBase:string, colorTexto:string) {
    this.el.nativeElement.style.backgroundColor = colorBase
    this.el.nativeElement.style.color = colorTexto
    this.el.nativeElement.style.border = '5px solid red'
  }

}

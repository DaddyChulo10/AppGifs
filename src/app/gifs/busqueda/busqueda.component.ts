import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  //Obtiene el valor de la caja de texto
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>
  constructor(private gifsService: GifsService) {
  }
  //Obtener el valor de la busqueda
  buscar() {
    const valor = this.txtBuscar.nativeElement.value
    //Que no almacene datos vacios
    if (valor.trim().length === 0) {
      return
    }
    this.gifsService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = ""
  }


}

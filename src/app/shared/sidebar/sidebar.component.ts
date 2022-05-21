import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }


  history(resultado: string) {
    this.gifsService.buscarGifs(resultado)
    //alert(resultado)
  }

  get historial() {
    return this.gifsService.historial;
  }

  // historial2() {
  //   const valor = this.gifsService.historial;
  //   return valor;
  //   console.log(valor)
  // }


}

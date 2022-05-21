import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados() {
    localStorage.setItem('Resultado', JSON.stringify(this.gifService.resultados))
    return this.gifService.resultados
  }
  constructor(private gifService: GifsService) {
    this.gifService.resultados = JSON.parse(localStorage.getItem('Resultado')!) || []
  }
}

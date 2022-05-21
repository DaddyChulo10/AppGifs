import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '2ciDUqrfUIffgI3zrzcN0ga0OfLoeR8l'
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];
  //Todo: Cambiar su tipo correspondiente GIF[]
  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('Historial')!) || []
    //this.resultados = JSON.parse(localStorage.getItem('Resultado')!) || []
    //if (localStorage.getItem('Historial')) {
    //  this._historial =JSON.parse(localStorage.getItem('Historial')!)
    //}
  }
  buscarGifs(query: string = '') {
    query = query.trim().toLocaleUpperCase();
    //Sirve para almacenar solamente una vez y no repetir la busqueda
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      //Sirve para mantener un margen de 1 al 10 en la busqueda
      this._historial = this._historial.splice(0, 10)
      localStorage.setItem('Historial', JSON.stringify(this._historial))
      //localStorage.setItem('Resultado', JSON.stringify(this.resultados))

    }

    //HttpParametros
    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '30').set('q', query);

    //console.log(this._historial);
    /*fetch('https://api.giphy.com/v1/gifs/search?api_key=2ciDUqrfUIffgI3zrzcN0ga0OfLoeR8l&q=dragon ball z&limit=10')
    .then(resp => {
      resp.json().then(data => (console.log(data)))
    })*/
    //Peticción http
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      })
  }
}

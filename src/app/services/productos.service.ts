import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos_loaded: boolean = false;
  productos: any[] = [];

  constructor(
    private http: Http
  ) {
    this.cargar_productos();
  }

  public cargar_productos() {
    this.productos_loaded = false;
    if (this.productos.length === 0) {
      this.http.get('https://jcgco-udemy-html2angular.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          setTimeout( () => {
            this.productos = data.json();
            this.productos_loaded = true;
          }, 2000);
          // console.log(this.productos);
        });
    }
  }
}

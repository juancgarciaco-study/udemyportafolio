import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos_loaded: boolean = false;
  productos: any[] = [];

  producto_loaded: boolean = false;

  constructor(
    private http: Http
  ) {
    this.cargar_productos();
  }

  public cargar_producto2(prodId: string) {
    return this.http.get(`https://jcgco-udemy-html2angular.firebaseio.com/productos/${prodId}.json`)
      .subscribe(data => {
        const _data = data.json();
        this.producto_loaded = true;
        return _data;
        // console.log(this.productos);
      });
  }

  public cargar_producto(prodId: string) {
    return this.http.get(`https://jcgco-udemy-html2angular.firebaseio.com/productos/${prodId}.json`);
  }

  public cargar_productos() {
    this.productos_loaded = false;
    if (this.productos.length === 0) {
      this.http.get('https://jcgco-udemy-html2angular.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          setTimeout(() => {
            this.productos = data.json();
            this.productos_loaded = true;
          }, 1000);
          // console.log(this.productos);
        });
    }
  }
}

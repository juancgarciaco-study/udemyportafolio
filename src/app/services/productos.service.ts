import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos_loading: boolean = false;
  productos_loaded: boolean = false;
  productos: any[] = [];

  producto_loaded: boolean = false;

  productos_filtrado: any[] = [];


  constructor(
    private http: Http
  ) {
    this.cargar_productos();
  }

  public buscar_productos(termino: string) {
    // console.log('Buscando ...');
    // console.log(this.productos.length);
    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        // termina la carga
        this.filtrar_productos(termino);
      });
    } else {
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino: string) {
    this.productos_filtrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      if (prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod);
      }
    });

    // console.log(this.productos_filtrado);
  }

  public cargar_producto(prodId: string) {
    return this.http.get(`https://jcgco-udemy-html2angular.firebaseio.com/productos/${prodId}.json`);
  }

  public cargar_productos() {
    this.productos_loaded = false;

    let promesa = new Promise((resolve, reject) => {
      if (this.productos.length === 0 /*&& !this.productos_loading*/) {
        this.productos_loading = true;
        // console.log('go to productos_idx');
        this.http.get('https://jcgco-udemy-html2angular.firebaseio.com/productos_idx.json')
          .subscribe(data => {
            // setTimeout(() => {
            this.productos = data.json();
            this.productos_loaded = true;
            this.productos_loading = false;
            resolve();
            // }, 3000);
          });
      }
    });

    return promesa;
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


}

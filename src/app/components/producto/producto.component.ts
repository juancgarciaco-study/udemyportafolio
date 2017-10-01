import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
  product: any = undefined;
  cod: string = undefined;

  constructor(
    private route: ActivatedRoute,
    private _ps: ProductosService
  ) {
    route.params.subscribe(params => {
      if (params['id']) {
        this.cod = params['id'];
        // console.log(params);
        // console.log(this.cod);

        // this.product = _ps.cargar_producto2(id)[0];
        // console.log(this.product);

        _ps.cargar_producto(this.cod).subscribe(res => {
          this.product = res.json();
          // console.log(this.product);
        });
      }
    });
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino: string = undefined;
  constructor(
    private route: ActivatedRoute,
    public _ps: ProductosService
  ) {
    route.params.subscribe(params => {
      this.termino = params['searchTerm'];
      // console.log(this.termino);

      _ps.buscar_productos(this.termino);
    });
  }

  ngOnInit() {
  }

}

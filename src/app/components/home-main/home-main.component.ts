import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styles: []
})

export class HomeMainComponent {
  constructor(
    private _ps: ProductosService
  ) { }
}

import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  constructor(
    public _is: InformacionService,
    private router: Router
  ) { }

  buscar_producto(searchTerm: string) {
    // console.log(searchTerm);
    this.router.navigate(['search', searchTerm]);
  }
}

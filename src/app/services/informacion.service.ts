import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  infoData: object = {};

  constructor(
    public http: Http
  ) {
    this.http.get('assets/data/info.pages.json')
      .subscribe(data => {
        this.infoData = data.json();
        console.log(this.infoData);
      });
  }

}

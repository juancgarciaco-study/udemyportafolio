import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  pageinfo: object = {
    'basic': {
        'title': '',
        'email': '',
        'authorName': '',
        'authorWeb': ''
    },
    'social': {
        'facebook': '',
        'twitter': '',
        'instagram': ''
    },
    'teamWork': []
};

  constructor(
    public http: Http
  ) {
    this.http.get('assets/data/info.pages.json')
      .subscribe(data => {
        this.pageinfo = data.json();
        console.log(this.pageinfo);
      });
  }

}

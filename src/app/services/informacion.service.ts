import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  info_main_headerfooter_loaded: boolean = false;
  info_main_headerfooter: any = {
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
    }
  };

  info_aboutus_teamwork_loaded: boolean = false;
  info_aboutus_teamwork: any[] = [];

  constructor(
    public http: Http
  ) {
    this.loadDataHeaderFooter();
    this.loadDataAboutUs_TeamWork();
  }

  public loadDataHeaderFooter() {
    this.http.get('assets/data/info.pages.json')
      .subscribe(data => {
        this.info_main_headerfooter = data.json();
        this.info_main_headerfooter_loaded = true;
        // console.log(this.info_main_headerfooter);
      });
  }

  public loadDataAboutUs_TeamWork() {
    this.http.get('https://jcgco-udemy-html2angular.firebaseio.com/teamWork.json')
      .subscribe(data => {
        this.info_aboutus_teamwork = data.json();
        this.info_aboutus_teamwork_loaded = true;
        // console.log(this.info_aboutus_teamwork);
      });

  }
}

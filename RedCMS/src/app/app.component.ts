import { HttpBaseService } from './_services/http/http-base.service';
import { IPageData } from './_interfaces/IPageData';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public dbSub: Subscription;
  public dbResponse: IPageData;
  public caughtRoutes = [];

  constructor(
    private httpService: HttpBaseService
  ) {
    this.dbSub = this.httpService._getDb().subscribe(
      res => {
        this.dbResponse = res;
        for (let i = 0; i < res[0].pageData.length; i++) {
          this.caughtRoutes.push(res[0].pageData[i].routeName);
        }
      }
    );
  }

}

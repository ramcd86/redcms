import { IRouteMatch } from './../../_interfaces/IRouteMatch';
import { HttpBaseService } from './../../_services/http/http-base.service';
import { Subscription, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IPageData } from 'src/app/_interfaces/IPageData';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {


  public route: string;
  public pageData: IPageData;
  public pageConstruct = new Subject<IRouteMatch>();
  public pageObject = <IRouteMatch>{};
  public filteredPage: any;
  public routeSub: Subscription;


  constructor(
    private router: Router,
    private httpService: HttpBaseService
    ) {
      this._routeCapture();
      this._routeObjectRequest();
      this._routeCorrection();
  }


  ngOnInit() {
  }


  public _routeCapture() {
    this.router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        this.route = event.url.replace('/', '');
        this.pageObject.route = event.url.replace('/', '');
        this.pageConstruct.next(this.pageObject);
      }
    }));
  }

  public _routeObjectRequest() {
    this.routeSub = this.httpService.getDb().subscribe(res => {
      this.pageData = res;
      this.pageObject.routeObject = res[0].pageData;
      this.pageConstruct.next(this.pageObject);
    });
  }

  public _routeCorrection() {
    this.pageConstruct.subscribe(res => {
      if (res.route !== undefined && res.routeObject !== undefined) {
        this._pagePropertySearch(res.route, this.pageData);
      }
    });
  }

  public _pagePropertySearch(nameKey, myArray) {
    for (let i = 0; i < myArray[0].pageData.length; i++) {
        if (myArray[0].pageData[i].routeName === nameKey) {
            console.log('Success!');
            break;
        } else {
          console.log('Failure!');
          this.router.navigateByUrl('/404');
        }
    }
  }

}

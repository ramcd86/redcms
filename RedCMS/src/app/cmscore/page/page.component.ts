import { HttpBaseService } from './../../_services/http/http-base.service';
import { Subscription } from 'rxjs';
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
  public routeSub: Subscription;
  public pageData: IPageData;
  public filteredPage: any;

  constructor(
    private router: Router,
    private httpService: HttpBaseService
    ) {
    this.router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        this.route = event.url.replace('/', '');
        console.log(this.route);
      }
    }));
    this.routeSub = this.httpService.getDb().subscribe(res => {
      this.pageData = res;
      console.log(this.pageData[0].pageData);
    });

  }

  ngOnInit() {
  }

  //fix this
  public search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

}

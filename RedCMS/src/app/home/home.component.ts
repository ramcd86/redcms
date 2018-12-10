import { HttpBaseService } from './../_services/http/http-base.service';
import { IPageData } from './../_interfaces/IPageData';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dbSub: Subscription;
  public dbResponse: IPageData;

  constructor(
    private httpService: HttpBaseService
  ) { 
    this.dbSub = this.httpService.getDb().subscribe(
      res => {
        this.dbResponse = res;
        console.log(res);
      }
    );
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cmspage',
  templateUrl: './cmspage.component.html',
  styleUrls: ['./cmspage.component.scss']
})
export class CmspageComponent implements OnInit {

  public route: string;

  constructor(router: Router) {
    router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        console.log (event.url);
        const tidyString = event.url.replace('/', '');
        this.route = tidyString;
      }
    }));
  }

  ngOnInit() {
  }

}

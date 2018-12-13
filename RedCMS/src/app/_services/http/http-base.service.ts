import { IPageData } from './../../_interfaces/IPageData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(
    private http: HttpClient
  ) { }

public _getDb(): Observable<any> {
  const endpoint = `http://localhost:3000/pageData`;
  return this.http.get(endpoint).pipe(map(
    (res: IPageData) => res
  ));
}

}

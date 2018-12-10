import { IPageData } from './../../_interfaces/IPageData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map}
import { map } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(
    private http: HttpClient
  ) { }

public getDb(): Observable<any> {
  const endpoint = `http://localhost:3000/pageData`;
  return this.http.get(endpoint).pipe(map(
    (res: IPageData) => res
  ));
}

}

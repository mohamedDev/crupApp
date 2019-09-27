import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, Subject } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  public freelancers: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  getAllFreelancer(): Observable<any> {
    return this.http
      .get(environment.APIEndpoint + "users")
      .pipe(map(data => data));
  }

  FindFreelancer(name) {
    this.freelancers.next(name);
  }
}

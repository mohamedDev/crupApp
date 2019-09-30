import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  public $freelancers: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  getAllFreelancer(): Observable<any> {
    return this.http
      .get(environment.APIEndpoint + "users")
      .pipe(map(data => data));
  }

  addFreelancer(formdata): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-type", "application/json; charset=UTF-8");

    const options = { headers: headers };

    return this.http.post<any>(
      environment.APIEndpoint + "users",
      formdata,
      options
    );
  }

  editFreelancer(formdata): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-type", "application/json; charset=UTF-8");

    const options = { headers: headers };

    console.log(formdata["id"]);
    return this.http.put<any>(
      environment.APIEndpoint + "users/" + formdata["id"],
      formdata,
      options
    );
  }

  deleteFrelancer(id): Observable<any> {
    console.log(id);
    return this.http.delete(environment.APIEndpoint + "users/" + id);
  }

  getFreelancrById(id): Observable<any> {
    return this.http.get(environment.APIEndpoint + "users/" + id);
  }
}

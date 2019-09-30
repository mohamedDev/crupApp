import { freelancer } from "./models/freelancer";
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

  /*
   * get all freelancer freelancer
   */
  getAllFreelancer(): Observable<freelancer[]> {
    return this.http
      .get<freelancer[]>(environment.APIEndpoint + "users")
      .pipe(map(data => data));
  }

  /*
   * add freelancer
   */
  addFreelancer(formdata): Observable<freelancer> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-type", "application/json; charset=UTF-8");
    const options = { headers: headers };
    return this.http.post<freelancer>(
      environment.APIEndpoint + "users",
      formdata,
      options
    );
  }

  /*
   * edit freelancer
   */
  editFreelancer(formdata): Observable<freelancer> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-type", "application/json; charset=UTF-8");
    const options = { headers: headers };
    console.log(formdata["id"]);
    return this.http.put<freelancer>(
      environment.APIEndpoint + "users/" + formdata["id"],
      formdata,
      options
    );
  }

  /*
   * delete freelancer
   */
  deleteFrelancer(id): Observable<any> {
    return this.http.delete(environment.APIEndpoint + "users/" + id);
  }

  /*
   * get freelancer by id
   */
  getFreelancrById(id): Observable<freelancer> {
    return this.http.get<freelancer>(environment.APIEndpoint + "users/" + id);
  }
}

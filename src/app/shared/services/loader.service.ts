import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

export class LoaderService {
  status: Subject<any> = new Subject();

  constructor() {}

  startLoading() {
    this.status.next(true);
  }

  stopLoading() {
    this.status.next(false);
  }
}

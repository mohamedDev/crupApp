import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { LoaderService } from "../services/loader.service";

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  constructor(private loader: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.startLoading();
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          this.loader.stopLoading();
        }
        return event;
      })
    );
  }
}

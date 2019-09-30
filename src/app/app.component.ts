import { Component, OnInit } from "@angular/core";

import { LoaderService } from "./shared/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  loader: boolean;
  showhidenav: boolean;

  constructor(private loaderservices: LoaderService) {}

  ngOnInit() {
    this.loaderservices.status.subscribe(value => {
      this.loader = value;
    });
  }

  toggleNav(event) {
    event.preventDefault();
    this.showhidenav = !this.showhidenav;
  }
}

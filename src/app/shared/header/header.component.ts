import { Router } from "@angular/router";
import { CrudService } from "./../../freelancer/crud.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private manageFreelancer: CrudService, private router: Router) {}

  ngOnInit() {}

  findFreelancer(keys) {
    this.router.navigate(["/freelancer"]);
    this.manageFreelancer.$freelancers.next(keys);
  }
}

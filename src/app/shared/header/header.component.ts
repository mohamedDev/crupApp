import { CrudService } from "./../../freelancer/crud.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private manageFreelancer: CrudService) {}

  ngOnInit() {}

  findFreelancer(keys) {
    this.manageFreelancer.freelancers.next(keys);
  }
}

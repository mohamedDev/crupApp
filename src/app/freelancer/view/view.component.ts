import { CrudService } from "./../crud.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  freelancer = {};

  constructor(
    private route: ActivatedRoute,
    private managefreelancer: CrudService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = this.route.snapshot.params.id;
      this.managefreelancer.getFreelancrById(id).subscribe(data => {
        this.freelancer = data;
      });
    });
  }
}

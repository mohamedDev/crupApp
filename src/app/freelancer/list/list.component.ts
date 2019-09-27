import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { CrudService } from "./../crud.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  private freelancers: Array<any> = [];
  private filtredFreelancers: Array<any> = [];

  constructor(private manageFreelancer: CrudService) {}

  ngOnInit() {
    this.manageFreelancer.getAllFreelancer().subscribe(data => {
      this.freelancers = data;
      this.filtredFreelancers = [...this.freelancers];
    });

    /*
     * subscribe to shared shubject and find user from table freelancer
     */
    this.manageFreelancer.freelancers.subscribe(data => {
      this.freelancers = [];
      this.filtredFreelancers.forEach(item => {
        let name: string = item.name.toLowerCase();
        let keys: string = data.toLowerCase();
        if (name.indexOf(keys) !== -1) {
          this.freelancers.push(item);
        }
      });
    });
  }
}

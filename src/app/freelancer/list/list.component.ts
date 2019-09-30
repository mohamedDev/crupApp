import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { CrudService } from "./../crud.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  freelancers: Array<any> = [];
  filtredFreelancers: Array<any> = [];
  direction = 0;
  class = 0;

  constructor(private manageFreelancer: CrudService) {}

  ngOnInit() {
    this.manageFreelancer.getAllFreelancer().subscribe(data => {
      this.freelancers = data;
      this.filtredFreelancers = [...this.freelancers];
    });

    /*
     * subscribe to shared shubject and find user from table freelancer
     */
    this.manageFreelancer.$freelancers.subscribe(data => {
      this.freelancers = [];
      this.filtredFreelancers.forEach(item => {
        let name: string = item.name.toLowerCase();
        let keys: string = data.toLowerCase();
        if (name.indexOf(keys) !== -1) {
          this.freelancers.push(item);
        }
      });
      this.class = 0;
      this.direction = 0;
    });
  }

  /*
   * delete freelancer
   */
  deleteFreelancer(id) {
    this.manageFreelancer.deleteFrelancer(id).subscribe(data => {
      this.freelancers.forEach(item => {
        if (item.id === id) {
          const position = this.freelancers.indexOf(item);
          this.freelancers.splice(position, 1);
        }
      });
      this.filtredFreelancers.forEach(item => {
        if (item.id === id) {
          const position = this.filtredFreelancers.indexOf(item);
          this.filtredFreelancers.splice(position, 1);
        }
      });
    });
  }

  /*
   * sort by HourlyRate
   */
  sortByHourlyRate() {
    const tmp = [...this.freelancers];
    if (this.direction % 3 === 0) {
      this.freelancers.sort((a, b) => {
        return a.hourlyrate - b.hourlyrate;
      });
      this.class = 2;
    } else if (this.direction % 3 === 1) {
      this.freelancers.sort((a, b) => {
        return b.hourlyrate - a.hourlyrate;
      });
      this.class = 1;
    } else {
      this.freelancers = tmp;
      this.class = 0;
    }
    this.direction++;
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { FreelancerRoutingModule } from "./freelancer-routing.module";
import { FreelancerComponent } from "./freelancer/freelancer.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ViewComponent } from "./view/view.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    FreelancerComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent
  ],
  imports: [CommonModule, FreelancerRoutingModule, ReactiveFormsModule]
})
export class FreelancerModule {}

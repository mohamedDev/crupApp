import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FreelancerComponent } from "./freelancer/freelancer.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "freelancer",
    component: FreelancerComponent,
    children: [
      {
        path: "",
        component: ListComponent
      },
      {
        path: "add",
        component: AddComponent
      },
      {
        path: "edit/:id",
        component: EditComponent
      },
      {
        path: "view/:id",
        component: ViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule {}

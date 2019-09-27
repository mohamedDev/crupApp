import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FreelancerComponent } from "./freelancer/freelancer/freelancer.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "freelancer",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

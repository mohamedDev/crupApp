import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { CrudService } from "./../crud.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private manageFreelancer: CrudService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      jobs: ["", Validators.required],
      phone: ["", Validators.required],
      hourlyrate: ["", Validators.required],
      website: [""],
      about: [""],
      country: ["", Validators.required],
      city: ["", Validators.required],
      zipcode: ["", Validators.required],
      street: ["", Validators.required]
    });
  }

  // getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.manageFreelancer
      .addFreelancer(JSON.stringify(this.registerForm.value, null, 4))
      .subscribe(data => {
        this.router.navigate(["/freelancer"]);
      });
  }

  resetFrom() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

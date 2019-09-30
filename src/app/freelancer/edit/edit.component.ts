import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { CrudService } from "./../crud.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private managefreelancer: CrudService,
    private formBuilder: FormBuilder,
    private manageFreelancer: CrudService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: ["", Validators.required],
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

    this.route.paramMap.subscribe(params => {
      const id = this.route.snapshot.params.id;
      this.managefreelancer.getFreelancrById(id).subscribe(data => {
        this.editForm.setValue(data);
      });
    });
  }

  // getter for easy access to form fields
  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.manageFreelancer
      .editFreelancer(this.editForm.value)
      .subscribe(data => {
        setTimeout(() => {
          this.router.navigate(["/freelancer"]);
        }, 1000);
      });
  }

  resetFrom() {
    this.submitted = false;
    this.editForm.reset();
  }
}

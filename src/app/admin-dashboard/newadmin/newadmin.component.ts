import { AdminService } from './../../services/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert-service.service';

@Component({
  selector: 'app-newadmin',
  templateUrl: './newadmin.component.html',
  styleUrls: ['./newadmin.component.css']
})
export class NewadminComponent implements OnInit {
  createadminForm: any ;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private adminService: AdminService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.createadminForm = new FormGroup({
      "firstname": new FormControl(null, [Validators.required]),
      "lastname": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required]),
      "dob": new FormControl(null, [Validators.required]),
      "gender": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
  });
  }
  get f() { return this.createadminForm.controls; }

  onSubmit(form: FormGroup) {
    this.adminService.createAdmin(form.value).subscribe(data=>{
      console.log(data);
      this.createadminForm.reset()

    })
    console.log(form.value);
      this.submitted = true;

      // stop here if form is invalid
      if (this.createadminForm.invalid) {
          return;
      }
   
      this.loading = true;
      // this.userService.register(this.registerForm.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.alertService.success('Registration successful', true);
      //             this.router.navigate(['/login']);
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }

}

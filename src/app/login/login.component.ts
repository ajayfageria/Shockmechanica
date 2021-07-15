import { AdminService } from './../services/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../services/alert/alert-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  loading = false;
  submitted = false;
  returnUrl: string |any;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,private alertService: AlertService,
    private router: Router) { }
  userLogin(){
  
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit(form: FormGroup) {
    this.alertService.success("LoggedIn Successfully");
    this.alertService.error("LoggedIn -error");
    console.log(form.value);
    this.adminService.adminLogin(form.value).subscribe(data=>{
      this.alertService.success("LoggedIn Successfully");
      console.log(data);
    })
    this.router.navigateByUrl('admin-dashboard/orders')
    this.submitted = true;
   

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
//     this.authenticationService.login(this.f.username.value, this.f.password.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//                 this.router.navigate([this.returnUrl]);
//             },
//             error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             });
// }
  }
}

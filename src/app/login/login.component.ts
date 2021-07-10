import { AdminService } from './../services/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private adminService: AdminService,
    private router: Router) { }
  userLogin(){
  this.router.navigateByUrl('admin-dashboard/orders')
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.adminService.adminLogin(form.value).subscribe(data=>{
      console.log(data);
    })
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

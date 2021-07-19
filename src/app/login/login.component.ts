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
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null, [Validators.required])
  });
  }
  get f() { return this.loginForm.controls; }
  login(form: FormGroup) {
    this.submitted = true;
    if(form.invalid){

      this.alertService.error("LoggedIn -error");
      return
    }else{

      console.log(form.value);
      this.adminService.adminLogin(form.value).subscribe(data=>{
        this.alertService.success("LoggedIn Successfully");
        sessionStorage.setItem("token",JSON.stringify(data.token));
        localStorage.setItem("customer data", JSON.stringify(data));
      this.router.navigateByUrl('admin-dashboard/orders')
        console.log(data);
      },err=>{
  
      })
   
     
    }

    this.loading = true;

  }
}

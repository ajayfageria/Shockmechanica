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
  setData: boolean=false;
  adminData: any;
  constructor(private formBuilder: FormBuilder,private adminService: AdminService, private alertService: AlertService) { }

  ngOnInit(): void {


    this.createadminForm = new FormGroup({
      "first_name": new FormControl(null, [Validators.required]),
      "last_name": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required]),
      "dob": new FormControl(null, [Validators.required]),
      "gender": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
  });

  let admindata=sessionStorage.getItem("admin")

  if(admindata!=null || admindata !=undefined){
    
      this.setData=true;
      this.adminData=JSON.parse(admindata);
      this.createadminForm.setValue({
    "first_name": this.adminData.first_name,
    "last_name": this.adminData.last_name,
    "email": this.adminData.email,
    "dob": this.adminData.dob,
    "gender": this.adminData.gender,
    "password": this.adminData.password
      });
    }
  
  }
  get f() { return this.createadminForm.controls; }

  onSubmit(form: FormGroup) {
    if(this.setData==true){

      this.adminService.updateAdminData(form.value,this.adminData._id).subscribe((res)=>{

      },(err)=>{

      })

    }else{

    this.adminService.createAdmin(form.value).subscribe(data=>{
      console.log(data);
      this.createadminForm.reset();

    })
    console.log(form.value);
      this.submitted = true;

      // stop here if form is invalid
      if (this.createadminForm.invalid) {
          return;
      }
   
      this.loading = true;
    }
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

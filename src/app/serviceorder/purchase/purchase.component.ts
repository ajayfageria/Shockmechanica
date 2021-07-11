import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  createadminForm: any ;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private adminService: AdminService) { }

  ngOnInit(): void {
  this.createadminForm = new FormGroup({
    "firstname": new FormControl(null, [Validators.required]),
    "lastname": new FormControl(null, [Validators.required]),
    "username": new FormControl(null, [Validators.required]),
    "password": new FormControl(null, [Validators.required])
});
}

get f() { return this.createadminForm.controls; }

onSubmit(form: FormGroup) {
  this.adminService.createAdmin(form.value).subscribe(data=>{
    console.log(data);
  })
  console.log(form.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.createadminForm.invalid) {
        return;
    }
 
    this.loading = true;
    
}


}

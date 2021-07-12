import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin-service.service';
import { CustomerServiceService } from '../../services/customer/customer-service.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchaseForm: any ;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private adminService: AdminService,private customerService:CustomerServiceService) { }

  ngOnInit(): void {
  this.purchaseForm = new FormGroup({
    "part_type": new FormControl(null, [Validators.required]),
    "number_of_pieces": new FormControl(null, [Validators.required]),
    "team_name": new FormControl(null, [Validators.required]),
    "email": new FormControl(null, [Validators.required]),
    "mobile_number": new FormControl(null, [Validators.required]),
    "other_requirements": new FormControl(null, [Validators.required]),
});
}

get f() { return this.purchaseForm.controls; }

onSubmit(form: FormGroup) {

  
    // stop here if form is invalid
    if (this.purchaseForm.invalid) {
      return;
  }else{

  this.customerService.postCustomerData(form.value).subscribe(data=>{
    console.log(data);
  },err=>{

  })
  }
  console.log(form.value);
    this.submitted = true;

 
    this.loading = true;
    
}


}

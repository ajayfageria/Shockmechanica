import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin-service.service';
import { AlertService } from 'src/app/services/alert/alert-service.service';
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
  constructor(
    private customerService:CustomerServiceService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  this.purchaseForm = new FormGroup({

    "purchase_form": new FormControl(true),
    "part_type": new FormControl(null, [Validators.required]),
    "name": new FormControl(null, [Validators.required]),
    "number_of_peices": new FormControl(null, [Validators.required]),
    "team_name": new FormControl(null, [Validators.required]),
    "email": new FormControl(null, [Validators.required,Validators.email]),
    "mobile_number": new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    "other_requirement": new FormControl(null, [Validators.required,Validators.maxLength(100)]),
});

}

get f() { return this.purchaseForm.controls; }

onSubmit(form: FormGroup) {

  this.submitted = true;
  
    // stop here if form is invalid
    if (this.purchaseForm.invalid) {
      return;
  }else{

  this.customerService.postCustomerData(form.value).subscribe(data=>{
    this.alertService.success("Order has been placed successfully!")
    this.purchaseForm.reset();

    this.submitted=false;
  },err=>{
    this.alertService.error("Error! please try again")
  })
  }
  console.log(form.value);
    this.loading = true;
    
}


}

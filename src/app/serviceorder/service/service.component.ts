import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceForm: any;
  loading = false;
  submitted = false;
  returnUrl: string |any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cusomerService: CustomerServiceService,
    // private alertService: AlertService
) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
}

  ngOnInit(): void {
    this.serviceForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile_number: ['', Validators.required],
      shocker_brand: ['', Validators.required],
      number_of_pairs: ['', Validators.required],
      type_of_service: ['', Validators.required],
      problems_facing: ['', Validators.required]
    });
  }
  get f() { return this.serviceForm.controls; }

  onSubmit(form:FormGroup) {
      this.submitted = true;

      // stop here if form is invalid
      if (this.serviceForm.invalid) {
          return;
      }else{

        this.cusomerService.postCustomerData(form.value).subscribe((res)=>{

        },(err)=>{

        })
      }

      this.loading = true;
      

}

}

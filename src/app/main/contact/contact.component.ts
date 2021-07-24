import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isContactFormLoaded: boolean = false;
  contactusForm: any;
  loading = false;
  submitted:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.contactusForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        queries: new FormControl(null, Validators.required)
      });
  }
  get f() { return this.contactusForm.controls; }

  openContactForm(){
 this.isContactFormLoaded = true;
  }
  onSubmit(form:FormGroup) {
    this.submitted = true;
    if (this.contactusForm.invalid) {
      return;
  }else{
    console.log(form.value);
    
    this.isContactFormLoaded = false;
    this.contactusForm.reset();
    this.submitted = true;
  }
  }

}

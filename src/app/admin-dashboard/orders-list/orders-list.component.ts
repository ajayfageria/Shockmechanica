import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../../services/customer/customer-service.service';
import { AdminService } from '../../services/admin/admin-service.service';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert-service.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  customerList: any[] | undefined;
  searchText: string = '';
  data$ = new Subject<any>();

  constructor(private customerService:CustomerServiceService, private alertService: AlertService) { }

  ngOnInit(): void {

this.getCustomerData();
  }

  getCustomerData(){

    this.customerService.getCustmerData().subscribe((customerdata)=>{
      this.customerList = customerdata;
      this.data$.next(customerdata);
    },
    (err)=>{

    })
  }

  deleteCustomer(customer: any){
    this.customerService.deleteCustomerData(customer._id).subscribe((res)=>{
      this.getCustomerData();
      this.alertService.success("Record has been deleted successfully!")
    },(err)=>{
      this.alertService.error("Error! Please try again")
    })
  }

}

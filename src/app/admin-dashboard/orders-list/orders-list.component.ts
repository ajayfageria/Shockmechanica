import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../../services/customer/customer-service.service';
import { AdminService } from '../../services/admin/admin-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  customerList: any[] | undefined;
  searchText: string = '';
  data$ = new Subject<any>();

  constructor(private customerService:CustomerServiceService) { }

  ngOnInit(): void {

    this.customerService.getCustmerData().subscribe((customerdata)=>{
      this.customerList = customerdata;
      this.data$.next(customerdata);
    },
    (err)=>{

    })

  }
  filter(search: any) {
    this.data$.next(this.customerList?.filter(d=>d.includes(search)));
    console.log(this.data$);
  }


  deleteCustomer(customer: any){
    this.customerService.deleteCustomerData(customer._id).subscribe((res)=>{

    },(err)=>{

    })
  }

}

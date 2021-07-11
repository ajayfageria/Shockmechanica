import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../../services/customer/customer-service.service';
import { AdminService } from '../../services/admin/admin-service.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  customerArray: any;

  constructor(private customerService:CustomerServiceService,
    private adminService:AdminService) { }

  ngOnInit(): void {

    this.adminService.getCustmerData().subscribe((res)=>{
      this.customerArray=res;
    },
    (err)=>{

    })

  }


  // deleteCustomer(customer){
  //   this.adminService.deleteCustomerData(customer._id).subscribe((res)=>{

  //   },(err)=>{

  //   })
  // }

}

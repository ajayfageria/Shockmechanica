import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../services/super-admin/super-admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 public isSuperAdminLoggedIn: boolean = true;
  // user: Object | undefined;
  userData: any;
  user: any;
  adminArray: any;
  constructor(private SuperAdminService:SuperAdminService) { }

  ngOnInit(): void {
  this.user=sessionStorage.getItem("user");
  
  this.userData=JSON.parse(this.user);


  this.SuperAdminService.getAdmin().subscribe(res=>{
    this.adminArray=res;
  },err=>{

  })
  }


  // deleteAdmin(admin){
  //   this.SuperAdminService.deleteAdmin(admin?._id).subscribe(res=>{

  //   },err=>{

  //   })
  // }

  // updateAdmin(admin){
  //   this.SuperAdminService.deleteAdmin(admin?._id).subscribe(res=>{

  //   },err=>{

  //   })
  // }


}

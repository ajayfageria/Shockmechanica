import { SuperAdminService } from './../../services/super-admin/super-admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  adminList: any[] | undefined;
  constructor(private superAdminService: SuperAdminService) { }

  ngOnInit(): void {

  this.superAdminService.getAdmin().subscribe(adminData=>{
    this.adminList=adminData;
  },err=>{

  })
  }

}

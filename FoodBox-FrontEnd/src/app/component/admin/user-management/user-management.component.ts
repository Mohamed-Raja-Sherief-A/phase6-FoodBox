import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interface/order/order';
import { User } from 'src/app/interface/user/user';
import { UserserviceService } from 'src/app/service/user/userservice.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  user:String="";
  users:User[]=[];
  orders:Order[]=[];
  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      users=>this.users=users
    );
  }
  onChange(name:string){
    console.log('name changed');
    this.service.getOrders(name).subscribe(
      orders=>this.orders=orders
    );
  }

}

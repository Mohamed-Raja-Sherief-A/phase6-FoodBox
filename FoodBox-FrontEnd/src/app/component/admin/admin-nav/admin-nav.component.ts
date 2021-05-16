import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private session:SessionService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.session.addSession({username:'',password:''});
    this.router.navigate(['/Landing']);
  }
}

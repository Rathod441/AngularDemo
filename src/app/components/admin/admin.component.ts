import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  CurrentYear : number = new Date().getFullYear();
  router = inject(Router);
  loggedData:string = '';
  loginUserRoleName:string = '';
  
  constructor(){
    const loggedData = localStorage.getItem('loginUserName');
    //const loginUserRoleName = localStorage.getItem('loginUserRoleName');
    if(loggedData!=null){
      this.loggedData = loggedData;
      //this.loginUserRoleName=loginUserRoleName;
      this.loginUserRoleName = localStorage.getItem('loginUserRoleName') ?? '';
    }
  }
  ngOnInit(): void {
    
  }

  LogOut(){
    localStorage.removeItem('loginUserId');
    localStorage.removeItem('loginUserName');
    localStorage.removeItem('loginUserRole');
    localStorage.removeItem('loginUserRoleName');
    this.router.navigateByUrl('login');
  }
}

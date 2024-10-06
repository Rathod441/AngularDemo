import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Constant } from '../../constant/Constant';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  password:string='';
  
  router =  inject(Router);
  http = inject(HttpClient)

  ngOnInit(): void {  
    this.password = 'password';  
  }
  CurrentYear: number = new Date().getFullYear();
  show = false;
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  userObj:any={
    id:0,
    EmailId:'',
    Password:'',
    status:'login'
  }
  validationMessage:any= Constant.Validation_Message;
  Result:any=[]
  onLogin(){
     this.http.post(Constant.API_URL + Constant.Login_Methods.Login, this.userObj).subscribe((res:any)=>{
      debugger;
      if(res.IsSuccess) {
        this.Result = JSON.parse(res.Data);
        localStorage.setItem('loginUserName', this.Result[0].EmployeeName)
        localStorage.setItem('loginUserId', this.Result[0].UserId)
        localStorage.setItem('loginUserRole', this.Result[0].RoleId)
        localStorage.setItem('loginUserRoleName', this.Result[0].RoleName)
        this.router.navigateByUrl('/admin/dashboard')
      } else {
        alert(res.ClientMessage)
        //this.router.navigateByUrl('add-emp')
      }
    })
  }
}

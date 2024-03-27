// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Client } from 'src/app/model/Client';
// import { Login } from 'src/app/model/Login';
// import { ClientService } from 'src/app/services/client.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   newLogin:Login=new Login();
//   client:Client=new Client();
//   message: string = "";
//   errorMessage: string = "";
//   constructor(private router:Router,private clientService: ClientService) { }

//   ngOnInit(): void {
//   }

//   registerNewUser(){
//     console.log("Register User Successful!");
//     this.router.navigateByUrl('register');
//   }
  
//   addLogin(){
//     console.log(this.newLogin);
//     this.clientService.addNewLogin(this.newLogin).subscribe(
//       {
//         next: (data) => {
//           console.log(data);
//           this.client=data;
//           console.log(this.client);
//           this.message = "Client loggedIn  Sucessfully!...";
//               console.log("Client loggedIn  Sucessfully");
//               alert("You have loggedIn successfully...")
//               this.router.navigateByUrl('client/'+this.client.clientId);
//           this.errorMessage = "";
//         },
//         error: (err) => {
//           console.log(err);
//           if (err.status == "0")
//             this.errorMessage = " Network error, please try again later."
//           else
//             this.errorMessage = err.error;
//           this.message = "";
//         }
//       }
//     )
//     }
  
// }
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from 'src/app/model/Login';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// selector: 'app-meetingroom',
//   // standalone: true,
//   // imports: [FormsModule, CommonModule],
//   templateUrl: './meetingroom.component.html',
//   styleUrls: ['./meetingroom.component.css']
@Component({
  selector: 'app-login',
//  standalone: true,
  //imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  isAdminLogin : boolean = false;
  errorMessage:string="";

 login : Login = new Login();

// login : Login = new Login();

  constructor(private router: Router, private loginService:LoginService) {
   
  }
  
  onUserLogin() {
    this.loginService.userLogin(this.login).subscribe(
      {
        next: (data)=> {
          this.login=data;
          console.log("Login:",data);
          sessionStorage.setItem("userId",data.id);
          // console.log(typeof this.userIdService);
          sessionStorage.setItem("role","user");
          // window.setTimeout(() => {
          //   alert('Login Successful!');
          // }, 10); 
          window.location.reload();
          this.router.navigateByUrl("home");
        },
        error: (err) => {
          console.log(err);
          if (err.status == "0")
          this.errorMessage = " Network error, please try again later."
          else
          alert(err.error);
        },
        complete : () => {
          console.log("Server completed sending data")
        }
      }
    )
  }

  openAdminLogin() {
    this.isAdminLogin = true;
  }
  closeAdminLogin() {
    this.isAdminLogin = false;
  }

  onAdminLogin() {
    this.loginService.adminLogin(this.login).subscribe(
      {
        next: (data)=> {
          this.login=data;
          console.log("Login:",data);
          sessionStorage.setItem("adminId",data.id);
         // console.log(typeof this.userIdService);
          sessionStorage.setItem("role","admin");
          //window.location.reload();
          this.router.navigateByUrl("home");
           
          // this.router.navigateByUrl("addmeetingroom");
          window.setTimeout(() => {
            alert('Login Successful!');
          }, 10000);
        },
        
        error: (err) => {
          console.log(err);
          if (err.status == "0")
          this.errorMessage = " Network error, please try again later."
       else
          alert(err.error);
        },
        complete : () => {
          console.log("Server completed sending data")
        }
      }
    )
  }
}




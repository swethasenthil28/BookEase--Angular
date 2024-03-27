
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/Account';
import { AccountRegistration } from 'src/app/model/AccountRegistration';
import { RegisterAccount } from 'src/app/model/RegisterAccount';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newRegister: AccountRegistration = new AccountRegistration();
  message: string = "";
  errorMessage: string = "";
  balance=0;
  accountId=0;


  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
  }

  registerNewUser() {
    console.log("Register User Successful!");
    alert("You have registered successfully...")
    this.router.navigateByUrl('login');
  }

  NavigateToLogin() {
    this.router.navigateByUrl('login');
  }

  addRegistration() {
    console.log(this.newRegister);
  
    // this.newRegister.account=this.account;
    this.clientService.addNewRegistration(this.newRegister).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Client Registered Sucessfully!...";
              console.log("Register User Successful!");
              alert("You have registered successfully...")
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          if (err.status == "0")
            this.errorMessage = " Network error, please try again later."
          else
            this.errorMessage = err.error;
          this.message = "";
        }
      }
    );
  }
}

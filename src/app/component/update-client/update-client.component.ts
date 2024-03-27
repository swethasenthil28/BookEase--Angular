import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountRegistration } from 'src/app/model/AccountRegistration';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  newRegister: AccountRegistration = new AccountRegistration();
  message:string="";
  errorMessage:string="";

  constructor(private router: Router, private clientService: ClientService, private activeRoute:ActivatedRoute) {
   }

  ngOnInit(): void {
  }

  updateTheClient(){
    console.log(this.newRegister);
    this.clientService.updateClient(this.newRegister).subscribe(
      {
        next: (data) => {
          console.log(data);
          alert("Your account has been updated successfully...")
          this.router.navigateByUrl('client/'+this.newRegister.clientId);
         this.message="Account Updated.";

        },
        error: (err) => {
          console.log(err);
          // if(err.name == "HttpErrorResponse")
          // this.errorMessage =" Network error, please try again later."
          // else
          this.errorMessage = err.error;
        }
      }
    )
  }

}

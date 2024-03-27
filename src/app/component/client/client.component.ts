import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/Client';
import { RegisterAccount } from 'src/app/model/RegisterAccount';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  message: string = "";
  errorMessage: string = "";

  clientId?:any;
  registeraccount?:RegisterAccount;

  constructor(private router: Router,private activeRoute:ActivatedRoute, private clientService:ClientService){
  this.clientId =this.activeRoute.snapshot.paramMap.get('id');
  console.log("Displaying Client details of ID: "+this.clientId);
  this.getClientbyId(this.clientId);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  getClientbyId(clientId?:number): void {
    this.clientService.getClientbyId(this.clientId).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.registeraccount = data;
          console.log(this.registeraccount);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log("Completed data loading");
        }
      }
    );
  }


  deleteTheClientById() {
    // clientId=this.clientId;
    console.log("delete id:" + this.clientId);

    if (confirm("Do you want to Delete Account id:" + this.clientId))
      this.clientService.deleteClientById( this.clientId).subscribe(
        {
          next: (resp) => {
            console.log(resp);
            this.message = "Deleted Account with id:" +  this.clientId;
            alert("The Client with ID:"+this.clientId+"is deleted successfully!...");
            this.router.navigateByUrl('home');
          },
          error: (err:any) => {
            console.log(err);
            this.message = "";
            this.errorMessage = "Could not Delete Account.";
          },
          complete: () => {
            console.log("Completed data loading");
          }
        }
      );
  }

  updateTheClient() {
    console.log("to update clientId:"+this.clientId);
    this.router.navigateByUrl('updateclient');
}
}
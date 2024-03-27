import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MeetingRoom } from 'src/app/model/MeetingRoom';

@Component({
  selector: 'app-meetingroom',
  // standalone: true,
  // imports: [FormsModule, CommonModule],
  templateUrl: './meetingroom.component.html',
  styleUrls: ['./meetingroom.component.css']
})
export class MeetingroomComponent implements OnInit {

  // newMeetingRoom: MeetingRoom = {
  //  id:0,
  //   name: '',
  //   capacity: '',
  //   floorNumber: '',
  //   type: '',
  //   date: '',
  //   costOfRoom: '',
  //   isAvailable: false

  // };
  newMeetingRoom:MeetingRoom=new MeetingRoom();
  // displaymeetingrooms:MeetingRoom[]=[];
  message: string = "";
  errorMessage: string = "";
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    
  }

  // createNewMeetingRoom(){
  //   console.log("Register User Successful!");
  //   alert("You have registered successfully...")
  //   // this.router.navigateByUrl('di');
  // }

  addMeetingRoom(){
    console.log("New Room",this.newMeetingRoom);
    this.adminService.addNewMeetingRoom(this.newMeetingRoom)
    .subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message = "New MeetingRoom added Sucessfully!..."; 
              alert("You have added successfully...")
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
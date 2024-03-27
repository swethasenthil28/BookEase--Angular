import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from 'src/app/model/MeetingRoom';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-meetingroom',
  templateUrl: './display-meetingroom.component.html',
  styleUrls: ['./display-meetingroom.component.css']
})
export class DisplayMeetingroomComponent implements OnInit {
[x: string]: any;
  ngOnInit(): void {

  }

  displaymeetingrooms:MeetingRoom[]=[];
  message: string = "";
  errorMessage: string = "";
  searchTerm: string = '';

  constructor(private adminService:AdminService, private router: Router) { 
    this.adminService.getAllMeetingRooms().subscribe(
      {
        next:(data: MeetingRoom[])=>{
          console.log(data);
          this.displaymeetingrooms=data;
        },
        error:(err: any)=>{
          console.log(err);
          this.errorMessage="No meeting rooms found!!";
          this.message="";
        },
        complete:()=>{
          console.log("Server completed sending data");
        }
      }
    )
  }
  deleteMeetingRoomById(id?:number) {
    // console.log("Delete meetingroom: "+id);

    if(confirm("Do you want to delete the hall with id: "+id ))
    this.adminService.deleteMeetingRoomById(id).subscribe(
  {
    next:(resp)=>{
      console.log(resp);
      this.displaymeetingrooms=this.displaymeetingrooms.filter(meetingroom=>meetingroom.id!=id);
      this.errorMessage="";
    },
    error:(err)=>{
      console.log(err);
      this.message="";
      this.errorMessage="Couldnot delete Hall";
    } 
  }
  );
}

  searchMeetingRoomsByName() {
    if (this.searchTerm.trim() !== '') {
      this.adminService.getMeetingRoomByName(this.searchTerm).subscribe({
        next: (data: MeetingRoom[] | MeetingRoom) => {
          if (Array.isArray(data)) {
            this.displaymeetingrooms = data;
          } else {
            this.displaymeetingrooms = [data]; 
          }
          this.errorMessage = '';
          this.message = '';
        },
        error: (err: any) => {
          console.log(err);
          this.errorMessage = 'Hall not found';
          this.message = '';
        }
      });
    } else{
      this.adminService.getAllMeetingRooms().subscribe({
        next: (data: MeetingRoom[]) => {
          this.displaymeetingrooms = data;
          this.errorMessage = '';
          this.message = '';
        },
        error: (err: any) => {
          console.log(err);
          this.errorMessage = 'No Halls Found';
          this.message = '';
        }
      });
    }  
} 

  // updateMeetingRoom(name?:string){
  //   this.adminService.updateMeetingRoom(this.displaymeetingrooms).subscribe(
  //     {  next:(resp)=>{
  //       console.log(resp);
  //       },error:(err)=>{
  //         console.log(err);
  //         this.errorMessage="Couldnot Update!!";
  //       }
 
  //     }
  //   );
  // }
}
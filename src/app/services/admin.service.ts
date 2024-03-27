import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeetingRoom } from '../model/MeetingRoom';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  
  constructor(private httpClient:HttpClient) { }

  addNewMeetingRoom(newMeetingRoom:MeetingRoom):Observable<any>{
    return this.httpClient.post("http://localhost:8080/addNewMeetingRoom",newMeetingRoom);
  }
  getAllMeetingRooms(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/viewallmeetingrooms");
  }
  deleteMeetingRoomById(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/deleteMeetingRoomById/"+id);
  }
  getMeetingRoomByName(searchTerm?: string):Observable<any> {
    return this.httpClient.get("http://localhost:8080/meetingroom/name/"+searchTerm);
  }
  updateMeetingRoom(item?:any):Observable<any>{
    return this.httpClient.patch("http://localhost:8080/meetingrooms/update/",item);
  }
}

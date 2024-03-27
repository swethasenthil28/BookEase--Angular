import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet,FormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type=sessionStorage.getItem("role");
  isUserLogedIn(){
    if(this.type!=undefined && this.type=="user") return true;
    return false;
  }
  isAdminLogedIn(){
    if(this.type!=undefined && this.type=="admin") return true;
    return false;
  }
 

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../customerapp/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }

  customerLoin(){
    const dialogRef = this.matDialog.open(LoginComponent, {
      // width: '600px',
       disableClose: true,
       data:{
        'message':"Hello User !"
        }
     });
  }

}

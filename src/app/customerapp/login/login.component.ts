import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserAuthenticationService} from '../../common-resources/user-authentication.service';
import {ToastrService} from 'ngx-toastr'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide=true;
  loginForm=new FormGroup({
    registerEmail:new FormControl('eve.holt@reqres.in', [Validators.required, Validators.minLength(5), Validators.email]),
    password: new FormControl('cityslicka', [Validators.required, Validators.minLength(6)])
  })

  constructor(
    public matDialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService:UserAuthenticationService,
    private _toastr: ToastrService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    
}
close(){
  this.matDialog.closeAll();
}
handleLogin(){
  console.log(this.loginForm.value);
  let loginData ={
    email: this.loginForm.controls.registerEmail.value,
    password: this.loginForm.controls.password.value
  }
this.userService.__cutomeruserLogin(loginData).subscribe(
  (response:any)=>{
    console.log(response);
    this._toastr.success("Welcome Customer App", "Succesfull !");
    localStorage.setItem("token", response.token);
    this.matDialog.closeAll();
    this._router.navigate(['../customer'],{ relativeTo: this._activatedRoute });
    
  },
  (error:any)=>{
    console.log(error);
    this._toastr.error(error.error.error, "Error !");
  },
  ()=>{

  }
)


}

}

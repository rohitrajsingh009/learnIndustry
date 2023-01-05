import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/provider/server.service';
import { emailValidator } from 'src/app/shared/email-validator.directive';
declare var $:any

interface IUser {
  name:String,
  email:String,
  phone:Number,
  qualification:String,
  course:String,
  mode:String,
  address:String,
  dateOfJoining:String,
  password:String,
  tc:Boolean
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isGoogleForm:boolean = false;
  reactiveForm!: FormGroup;
  user: IUser;
  constructor(public server:ServerService,public router:Router) { window.scrollTo(0,0);this.user = {} as IUser; }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      phone: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      qualification: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      course: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      mode: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      address: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      dateOfJoining: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }
  openModal(){
    $('#pwdModal').modal({backdrop:'static',keyboad:false}).show();
   // $('#pwdModal').modal('hide');
  }
  register(){
    let url='/register'
  let  data= {
    name:this.reactiveForm.value.name,
    email:this.reactiveForm.value.email,
     phone:this.reactiveForm.value.phone,
     qualification:this.reactiveForm.value.qualification,
     course:this.reactiveForm.value.course,
     "mode":this.reactiveForm.value.mode,
     "address":this.reactiveForm.value.address,
    "dateOfJoining":this.reactiveForm.value.dateOfJoining,
    "password":this.reactiveForm.value.password,
    "password_confirmation":this.reactiveForm.value.password,
    "tc":true
}
    this.server.postData(url,data).subscribe((res:any)=>{
      alert('registered successfully')
   this.router.navigateByUrl('/sign-in')
    })
  }
  sendMail(v:any){
    let url='/send-password-reset-email'
   var  data={
      email:v
    }
    this.server.postData(url,data).subscribe((res:any)=>{
      alert('mail send successfully')
      $('#pwdModal').modal('hide');
    })
  }
}

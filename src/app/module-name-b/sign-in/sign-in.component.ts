import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/provider/server.service';
import { emailValidator } from 'src/app/shared/email-validator.directive';
declare var $:any;
interface IUser {
  email: string;
  password: string;
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  reactiveForm!: FormGroup;
  user: IUser;

  constructor(public server:ServerService,public router:Router) { 
    window.scrollTo(0,0);
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }
  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }
 callpostAPI(e:any,p:any){
  let data = {
    email:e?e:'rohitraj.smsit@gmail.com',
    password:p?p:'Rohit@2027'
  }
  console.log(data)
  if(data.email ==='rohitraj.smsit@gmail.com'){
    localStorage.setItem('userType','admin')
  } 
 
  this.user = this.reactiveForm.value;
console.log('user',this.user)
  let url='/login'
  
  this.server.postData(url,data).subscribe((res:any)=>{
    if(res.status =='failed'){
      alert(res.message)
    }else{
     localStorage.setItem('token',res.token)
      // localStorage.setItem('userType','admin')
    this.router.navigateByUrl('/routingNameA/profile')
    }
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
    window.location.reload();
   // this.router.navigate([''])
  })
}
}

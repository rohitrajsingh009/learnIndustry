import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from 'src/app/provider/server.service';
import { emailValidator } from 'src/app/shared/email-validator.directive';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  reactiveForm!: FormGroup;
  constructor(private server:ServerService) {  window.scrollTo(0,0)
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }
  send_query(){
    let url='/connect'
    let data = {
      name:this.reactiveForm.value.name,
      email:this.reactiveForm.value.email,
      phone:this.reactiveForm.value.phone,
      description:this.reactiveForm.value.description
  }
    this.server.postData(url,data).subscribe((res:any)=>{
   alert('query send successfully')
    })
  }
}

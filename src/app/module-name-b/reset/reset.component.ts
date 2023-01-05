import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private server:ServerService) { }

  ngOnInit(): void {
  }
  save(password:string,confirmPassword:string){
    if(password !=confirmPassword){
      return;
    }
   let id= window.location.href.split('/')[4];
   let token =  window.location.href.split('/')[5];
    let data = {
      password:password,
      password_confirmation:confirmPassword
  }
  let url=`/reset-password/${id}/${token}`
  //let url= '/change-password'
  
  this.server.postData(url,data).subscribe((res:any)=>{

  })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private server:ServerService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(pass:string,cpass:string){
    let url='/change-password',
    data={
      password:pass,
      password_confirmation:cpass
    }
    this.server.postData(url,data).subscribe((res:any)=>{
      console.log(res)
      alert(res.message)
    })
    this.router.navigateByUrl('sign-in')
  }
  
}

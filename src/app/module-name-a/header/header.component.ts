import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServerService } from 'src/app/provider/server.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currUrl:string ='';
  show: boolean =true;
  selected: string ='home';
  constructor(public router:Router,public service:ServerService) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
  //  localStorage.clear();
    $('#logout').modal('hide');
    this.router.navigate([''])
    console.log('logout')
  }
  logoutModalOpen(){
    $('#logout').modal({ backdrop: 'static', keyboard: false }).show();
  }
    
goTo(v:any){
  if(v==''){
    this.selected= 'home'
    this.service.navigateTo(v)
  }else{
    this.selected= v
    this.service.navigateTo(v)
  }
  
}
}


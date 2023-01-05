import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currUrl:string ='';
  show: boolean =true;
  selected: string ='home';
  constructor(public service:ServerService) {
   this.currUrl = JSON.stringify(window.location.href.split('/')[3])
    console.log(this.currUrl)
    if(this.currUrl.includes('services')){
      this.show= false
    }
   }

  ngOnInit(): void {
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
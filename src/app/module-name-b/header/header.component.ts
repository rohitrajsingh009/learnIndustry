import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/provider/server.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header2',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currUrl:string ='';
  show: boolean =true;
  selected: string ='home';
  constructor(public service:ServerService,public translate: TranslateService) {
   this.currUrl = JSON.stringify(window.location.href.split('/')[3])
    console.log(this.currUrl)
    if(this.currUrl.includes('services')){
      this.show= false
    }

    translate.addLangs(['en','fr','ta','zh', 'hi']);
    translate.setDefaultLang('en');
    var browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
   }

  ngOnInit(): void {
  }
  setLanguage(v:any){
    console.log(v)
  this.translate.use(v)
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
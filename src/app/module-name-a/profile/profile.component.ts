import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
data:any={
  name:String,
  email:String,
  _id:String
}
  constructor(private server:ServerService) { }

  ngOnInit(): void {
    this.getData();
  }
 getData(){
  let url = '/loggedUser'
 this.server.getData(url).subscribe((res:any)=>{
  console.log(res)
  this.data =res.user
 })
 }
}

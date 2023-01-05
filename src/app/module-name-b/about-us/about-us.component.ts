import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
download(){
var link = document.createElement('a');
link.href = "https://drive.google.com/file/d/14u4Db9tybixOGN9UnTFLYWobbRobSn67/view?usp=sharing";
link.download = 'file.pdf';
link.dispatchEvent(new MouseEvent('click'));
}
}

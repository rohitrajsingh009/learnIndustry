import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(public server:ServerService) { }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public router:Router,public http:HttpClient) { }

  navigateTo(url: any) {
    this.router.navigateByUrl(url)
  }
  postData(url:any,data:any){
    let urls= environment.baseUrl+url;
    return this.http.post(urls,data)
  }
  getData(url:any){
    let urls = environment.baseUrl+url;
    return this.http.get(urls);
  }
  patchAPI(url:any,data:any){
    let urls = environment.baseUrl+url;
    return this.http.patch(url,data);
  }
  deleteAPI(url:any){
    let urls= environment.baseUrl+url
    return this.http.delete(urls)
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  response = "No data loaded, yet..";
  constructor(private http: HttpClient) 
  { 
    debugger
   // this.http.get('http://172.16.14.16:8080/demo',{responseType: 'text'}).subscribe((response: any) => {
      this.http.get('http://localhost:41692/demo',{responseType: 'text'}).subscribe((response: any) => {
      console.log(response);
	  this.response = response;		
	});
  }  
}
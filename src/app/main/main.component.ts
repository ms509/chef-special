import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title = 'Angular 4 Project!';
     //array of months.
     months = ["January", "February", "March", "April",
              "May", "June", "July", "August", "September",
              "October", "November", "December"];
     isavailable = false;
     myClickFunction(event) {
        this.isavailable = false;
     }
     changemonths(event) {
        alert("Changed month from the Dropdown");
        this.http.get('http://localhost:8080/users').subscribe(data => {
      console.log(data);
    });
        // console.log(this.http.get(`${environment.api_url}${environment.path}`, new HttpParams())
        //   .pipe(catchError(this.formatErrors)));
        console.log(event);
     }
     ngOnInit() {
     }

}

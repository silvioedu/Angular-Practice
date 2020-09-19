import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  service_property = "Service Created"
  show_today_date() {
    let n_date = new Date();
    return n_date
  }

  private final_data = [];
  private api_url = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.api_url);
  }
  
}

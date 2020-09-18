import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  show_today_date() {
    let n_date = new Date();
    return n_date
  }
}

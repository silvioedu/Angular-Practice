import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first'

  months:string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  is_available:boolean = false

  today_date:Date = new Date()

  json_val = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}

  my_click_function(event) {
    this.is_available = !this.is_available
  }
  change_months(event) {
    alert("Changed month from the dropdown")
  }

}

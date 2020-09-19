import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Conteúdo criado dentro do new-cmp";
  today_date;
  newcomponent_property;

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.today_date = this.myservice.show_today_date();
    this.newcomponent_property = this.myservice.service_property;
  }

}

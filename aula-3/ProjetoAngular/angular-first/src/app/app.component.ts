import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  today_date:Date;

  component_property;

  json_val = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}

  public person_data = [];

  my_click_function(event) {
    this.is_available = !this.is_available
  }
  change_months(event) {
    alert("Changed month from the dropdown")
  }

  emailid;
  formdata


  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
    //this.myservice.getData().subscribe((data) => {
    //  this.person_data = Array.from(Object.keys(data), k=>data[k]);
    //  console.log(this.person_data)
    //});
    //this.today_date = this.myservice.show_today_date();
    //console.log(this.myservice.service_property);
    //this.myservice.service_property = "Component created";
    //this.component_property = this.myservice.service_property;
    this.formdata = new FormGroup ({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol){
    if (formcontrol.value.length < 5) {
      return {"passwd" : true}
    }
  }
  onClickSubmit(data) {
    //alert("Entered Email id: " + data.emailid)
    this.emailid = data.emailid;
  }
}

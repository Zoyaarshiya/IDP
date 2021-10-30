import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private x:Router) { }

  ngOnInit(): void {
  }
  color:any;
  warn:any;
  margin:any;
register(name:any,pass:any,mob:any)
{
  if(name==""&&pass==""&&mob=="")
  {
    this.color="red";
    this.warn="Fields should not be empty";
    this.margin="140px";
  }
  else
  {
    this.x.navigateByUrl("")
  }
  
  localStorage.setItem("Username",name)
  localStorage.setItem("Password",pass)
  localStorage.setItem("Mobile",mob)
 
}

}

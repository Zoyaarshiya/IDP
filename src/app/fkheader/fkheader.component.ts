import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fkheader',
  templateUrl: './fkheader.component.html',
  styleUrls: ['./fkheader.component.css']
})
export class FkheaderComponent implements OnInit {
 user1:any;
  constructor(private router: Router){}
  
  ngOnInit(): void {
  }
  notifications()
  {
    this.router.navigateByUrl('more/notifications')
  }
  sellon()
  {
    this.router.navigateByUrl('more/sellon')
  }
  customer()
  {
    this.router.navigateByUrl('more/customer')
  }
  login(name:any,pass:any)
  {
    var a=localStorage.getItem("Username")
    var b=localStorage.getItem("Password")
    var c=localStorage.getItem("Mobile")
    if(a==name&&b==pass)
    {
     this.router.navigateByUrl("banking")
    }
    else
    {
      alert("Invalid user")
    }
    // console.log("Hi" +" "+name+" "+"your password is"+" "+pass);
  }
}

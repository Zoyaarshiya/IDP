import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  si:any;
  myroi:any; 
select(myval:any) 
{   
  this.myroi=myval.target.value;
}
calculate(p:any,t:any,roi:any)
{
  this.si=p*t*roi/100;
  console.log(this.si)
  
}
}

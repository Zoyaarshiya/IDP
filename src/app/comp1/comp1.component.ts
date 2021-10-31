import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private xxx:ServiceService) { }

  ngOnInit(): void {
  }
  mydata='';
  // abc(myname:any)
  // {
  //   console.log(myname)
  //   this.xxx.ser(myname)
  // }
  // abc()
  // {
  //   this.xxx.ser()
  // }

  abc(name:any)
  {
    //console.log(name)
    this.xxx.ser(name)
    this.xxx.login();
  }

}

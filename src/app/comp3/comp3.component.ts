import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private zzz:ServiceService) { }

  ngOnInit(): void {
  }
  name='';
  abc()
  {
    this.name=this.zzz.myname;
    console.log(this.name)
    this.zzz.login();
  }
}
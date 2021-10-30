import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private yyy:ServiceService) { }

  ngOnInit(): void {
  }
  // servename=''
  // abc()
  // {
  //   this.servename=this.yyy.name;
  // }
  abc()
  {
    this.yyy.ser();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
// name=''
//   constructor() { }
//   ser(myname:any)
//   {
//     this.name=myname
//   }
constructor(){}
myname='';
ser(name:any)
{
  console.log("Hi i am from service")
  console.log(name);
 this.myname=name;

 
}
login()
{
  alert("logged in")
}
}

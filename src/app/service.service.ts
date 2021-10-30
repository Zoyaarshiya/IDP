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
ser()
{
  console.log("Hi i am from service")
}
}

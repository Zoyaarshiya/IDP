import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppliancesComponent } from './appliances/appliances.component';
import { BankingComponent } from './banking/banking.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ErrorComponent } from './error/error.component';

import { FashionComponent } from './fashion/fashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CustomerComponent } from './more/customer/customer.component';
import { NotificationsComponent } from './more/notifications/notifications.component';
import { SellonComponent } from './more/sellon/sellon.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToysComponent } from './toys/toys.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {
      path:'',
      component: HomeComponent
      
  },
 {
    path:'more',
    children:[{
      path:'notifications',
      component:NotificationsComponent
    },
  {
    path:'sellon',
    component:SellonComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  }
  ]

  },
  {
    path:'mobiles',
    component:MobilesComponent
  },
  {
    path:'fashion',
    component:FashionComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'travel',
    component:TravelComponent
  },
  {
    path:'appliances',
    component:AppliancesComponent
  },
  {
    path:'furniture',
    component:FurnitureComponent
  },
  {
    path:'toys',
    component:ToysComponent
  },
  {
    path:'grocery',
    component:GroceryComponent
  },
  {
    path:'registration',
  component:RegistrationComponent
  },
  {
    path:'banking',
    component:BankingComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

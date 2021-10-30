import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FkheaderComponent } from './fkheader/fkheader.component';
import { ImgcomComponent } from './imgcom/imgcom.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { TravelComponent } from './travel/travel.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ToysComponent } from './toys/toys.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MoreComponent } from './more/more.component';
import { NotificationsComponent } from './more/notifications/notifications.component';

import { ErrorComponent } from './error/error.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { SellonComponent } from './more/sellon/sellon.component';
import { CustomerComponent } from './more/customer/customer.component';
import { RegistrationComponent } from './registration/registration.component';
import { BankingComponent } from './banking/banking.component';


@NgModule({
  declarations: [
    AppComponent,
    
    FkheaderComponent,
         ImgcomComponent,
         MobilesComponent,
         FashionComponent,
         ElectronicsComponent,
         TravelComponent,
         AppliancesComponent,
         FurnitureComponent,
         ToysComponent,
         GroceryComponent,
         HomeComponent,
         FooterComponent,
         MoreComponent,
         NotificationsComponent,
         
         ErrorComponent,
                   Comp1Component,
                   Comp2Component,
                   Comp3Component,
                   SellonComponent,
                   CustomerComponent,
                   RegistrationComponent,
                   BankingComponent,
         
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

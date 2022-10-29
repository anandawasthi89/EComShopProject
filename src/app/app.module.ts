import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { BrowseShoppingComponent } from './Components/browse-shopping/browse-shopping.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ECOMHomeNavComponent } from './Components/ecom-home-nav/ecom-home-nav.component';
import { InfoCardComponent } from './Components/info-card/info-card.component';
import { ProfileNavMenuComponent } from './Components/profile-nav-menu/profile-nav-menu.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderHistoryComponentComponent } from './Components/order-history-component/order-history-component.component';
import { RegisterNewUserComponent } from './Components/register-new-user/register-new-user.component';
import { CarouselTemplateComponent } from './Components/carousel-template/carousel-template.component';
import { BuyingDetailsComponent } from './Components/buying-details/buying-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ECOMHomeNavComponent,
    InfoCardComponent,
    ProfileNavMenuComponent,
    HomeComponent,
    BrowseShoppingComponent,
    LoginComponent,
    OrderSuccessComponent,
    ProfileComponent,
    OrderHistoryComponentComponent,
    RegisterNewUserComponent,
    CarouselTemplateComponent,
    BuyingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

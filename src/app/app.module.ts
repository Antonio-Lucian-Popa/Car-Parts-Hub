import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { PromoSectionComponent } from './feature/promo-section/promo-section.component';
import { HomeComponent } from './core/home/home.component';
import { CollectionSectionComponent } from './feature/collection-section/collection-section.component';
import { ProductFeaturesSectionComponent } from './feature/product-features-section/product-features-section.component';
import { FooterComponent } from './core/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PromoSectionComponent,
    HomeComponent,
    CollectionSectionComponent,
    ProductFeaturesSectionComponent,
    FooterComponent,
    SignUpComponent,
    AlertComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

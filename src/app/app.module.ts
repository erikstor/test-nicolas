import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedLogoComponent } from './components/shared-logo/shared-logo.component';
import { FormComponent } from './components/form/form.component';
import { FunctionalitiesBannerComponent } from './components/functionalities-banner/functionalities-banner.component';
import { KorandoLogoComponent } from './components/korando-logo/korando-logo.component';
import { CharacteristicComponent } from './components/characteristic/characteristic.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedLogoComponent,
    FormComponent,
    FunctionalitiesBannerComponent,
    KorandoLogoComponent,
    CharacteristicComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

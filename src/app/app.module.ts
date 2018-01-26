import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './shared/menu/header-menu/header-menu.component';
import { PlacesComponent } from './places/places.component';
import { FooterMenuComponent } from './shared/menu/footer-menu/footer-menu.component';
import { PlaceDetailsComponent } from './places/place-details/place-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    PlacesComponent,
    FooterMenuComponent,
    PlaceDetailsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

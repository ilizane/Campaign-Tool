import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouterModule } from '@uirouter/angular';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { ListPlacesComponent } from './places/list-places/list-places.component';
import { FooterMenuComponent } from './shared/footer-menu/footer-menu.component';
import { DetailsPlaceComponent } from './places/details-place/details-place.component';
import { PagesAboutComponent } from './pages/pages-about/pages-about.component';
import { PagesHelloComponent } from './pages/pages-hello/pages-hello.component';
import { PlacesService } from './places/shared/places.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/shared/message.service';


const pagesHelloState = { name: 'hello', url: '/hello',  component: PagesHelloComponent };
const pagesAboutState = { name: 'about', url: '/about',  component: PagesAboutComponent };
// const placesCreatePlaceState = { name: 'places-create', url: '/places/create',  component: CreatePlacesComponent };
// const placesDetailsPlaceState = { name: 'places-detail', url: '/places/details/:id',  component: detailPlacesComponent };
// const placesEditPlaceState = { name: 'places-edit', url: '/places/edit/:id',  component: EditPlacesComponent };
const placesListPlaceState = { name: 'places-list', url: '/places/list',  component: ListPlacesComponent };

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    ListPlacesComponent,
    FooterMenuComponent,
    DetailsPlaceComponent,
    PagesAboutComponent,
    PagesHelloComponent,
    MessagesComponent
  ],
  imports: [
    NgbModule.forRoot(),
     BrowserModule,
     FormsModule,
     HttpClientModule,
     UIRouterModule.forRoot({ states:
      [
        pagesHelloState,
        pagesAboutState,
        // placesCreatePlaceState,
        // placesDetailsPlaceState,
        // placesEditPlaceState,
        placesListPlaceState
       ],
      useHash: true }),
  ],
  providers: [PlacesService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

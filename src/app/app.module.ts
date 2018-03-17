import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

 import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

 import { HeaderMenuComponent } from "./core/header-menu/header-menu.component";
 import { PagesHelloComponent } from "./pages/pages-hello/pages-hello.component";
 import { MessagesComponent } from "./messages/messages.component";
 import { MessageService } from "./messages/shared/message.service";
 import { CampaignsModule } from "./feature/campaigns/campaigns.module";
 import { ModalModule } from "ngx-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
     HeaderMenuComponent,
     PagesHelloComponent,
     MessagesComponent,
  ],
  imports: [
    CampaignsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
   providers: [MessageService],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

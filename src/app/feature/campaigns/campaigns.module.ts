import { NgModule } from '@angular/core';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { CampaignService } from './services/campaign.service';
import { BrowserModule } from '@angular/platform-browser';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

@NgModule({
  imports: [BrowserModule, CampaignsRoutingModule],
  providers: [CampaignService],
  declarations: [CampaignListComponent, CampaignEditComponent, CampaignDetailComponent]
})
export class CampaignsModule {}

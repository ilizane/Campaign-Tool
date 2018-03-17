import { Component, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  title = 'Campaigns';
  campaigns: Campaign[];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() { this.getCampaigns();
  }

  getCampaigns(): void {
    this.campaignService.getCampaigns().subscribe(campaigns => {
      this.campaigns = campaigns;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.campaignService
      .addCampaign({ name } as Campaign)
      .subscribe(campaign => {
        this.campaigns.push(campaign);
      });
  }

  delete(campaign: Campaign): void {
    this.campaigns = this.campaigns.filter(h => h !== campaign);
    this.campaignService.deleteCampaign(campaign).subscribe();
  }

}

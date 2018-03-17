import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {
  @Input() campaigndetail: Campaign;
  campaign: Campaign;
  constructor(private campaignService: CampaignService) {}

  ngOnInit() {
    this.campaignService.getCampaign(2).subscribe(d => {this.campaign = d; });
    console.log(this.campaign);
  }
}

import { NgModule } from '@angular/core';
import {
  Ng2StateDeclaration,
  UIRouterModule,
  Transition
} from '@uirouter/angular';
import { CampaignService } from './services/campaign.service';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { Campaign } from './models/campaign';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

const campaignStates: Ng2StateDeclaration[] = [
  {
    name: 'campaigns',
    url: '/campaigns',
    component: CampaignListComponent,
    resolve: [
      {
        token: 'campaigns',
        deps: [CampaignService],
        resolveFn: resolveCampaignList
      }
    ]
  },
  {
    name: 'campaigns-edit',
    url: '/campaigns/edit/:id',
    component: CampaignEditComponent,
    resolve: [
      {
        token: 'campaign-edit',
        deps: [CampaignService, Transition],
        resolveFn: resolveCampaign
      }
    ]
  },
  {
    name: 'campaigns-detail',
    url: '/campaigns/detail/:id',
    component: CampaignDetailComponent,
    resolve: [
      {
        token: 'campaigndetail',
        deps: [CampaignService, Transition],
        resolveFn: resolveCampaignDetail
      }
    ]
  }
];

@NgModule({
  imports: [UIRouterModule.forChild({ states: campaignStates })],
  exports: [UIRouterModule]
})
export class CampaignsRoutingModule {}

export function resolveCampaignList(campaignService: CampaignService) {
  const campaigns: Observable<Campaign[]> = campaignService.getCampaigns();
  return campaigns;
}

export function resolveCampaign(
  campaignService: CampaignService,
  $transition$: Transition) {
  let campaign: Campaign;
  campaignService.getCampaign($transition$.params().id).subscribe(ca => {
    campaign = ca;
  });

  console.log("id:");
  console.log($transition$.params().id);
  return campaign;
}

export function resolveCampaignDetail(
  campaignService: CampaignService,
  $transition$: Transition) {

  let campaigndetail: Campaign;

  campaignService.getCampaign($transition$.params().id).subscribe(ca => {
    campaigndetail = ca;
  });
  return campaigndetail;
}

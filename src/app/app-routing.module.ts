import { NgModule } from '@angular/core';
import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';
import { PagesHelloComponent } from './pages/pages-hello/pages-hello.component';

const states: Ng2StateDeclaration[] = [
  {
    name: 'frontpage',
    component: PagesHelloComponent,
    url: '/'
  }
];

@NgModule({
  imports: [UIRouterModule.forRoot({ states: states, otherwise: '/' })],
  exports: [UIRouterModule]
})
export class AppRoutingModule {}

import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MasterComponent } from '../master.component/master.component';
import { PuppetComponent1 } from '../puppet1/puppet-1.component';
import { PuppetComponent2 } from '../puppet2/puppet-2.component';
import { PuppetComponent3 } from '../puppet3/puppet-3.component';
import { PuppetComponent4 } from '../puppet4/puppet-4.component';


export const appRoutes: Routes = [
  { path: '',   redirectTo: '/route1', pathMatch: 'full' },
  { path: 'route1',  component: MasterComponent, data: {puppets : [PuppetComponent1]}}, 
  { path: 'route2',  component: MasterComponent,  data: {puppets : [PuppetComponent2]}},
  { path: 'route3',  component: MasterComponent,  data: {puppets : [PuppetComponent3, PuppetComponent4]}}
];

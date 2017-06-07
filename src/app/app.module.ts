import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { appRoutes } from './app-routes.config';
import { PuppetComponent1 } from '../puppet1/puppet-1.component';
import { PuppetComponent2 } from '../puppet2/puppet-2.component';
import { PuppetComponent3 } from '../puppet3/puppet-3.component';
import { PuppetComponent4 } from '../puppet4/puppet-4.component';
import { MasterComponent } from '../master.component/master.component';



import { NgModule, Component, ViewChild, ViewContainerRef, ComponentFactoryResolver}  from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, PuppetComponent1, PuppetComponent2, PuppetComponent3, PuppetComponent4, MasterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

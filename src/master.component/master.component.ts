import { NgModule, Component, ViewChild, ViewContainerRef, ComponentFactoryResolver}  from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { appRoutes } from '../app/app-routes.config';
import { PuppetComponent1 } from '../puppet1/puppet-1.component';
import { PuppetComponent2 } from '../puppet2/puppet-2.component';
import { PuppetComponent3 } from '../puppet3/puppet-3.component';
import { PuppetComponent4 } from '../puppet4/puppet-4.component';

@Component({
  selector: 'master-app',
  templateUrl: './master.component.html'
})

export class MasterComponent { 
   @ViewChild('puppetContainer', { read: ViewContainerRef }) puppetContainer: ViewContainerRef;
   
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private viewContainer: ViewContainerRef) {
         
    }
    
    ngOnInit(){
       this.route.data
           .subscribe(data => {
              if(!!data && !!data.puppets && data.puppets.length > 0){
                data.puppets.map(puppet => {
                  let componentFactory = this._componentFactoryResolver.resolveComponentFactory(puppet);
                  this.puppetContainer.createComponent(componentFactory);
                });
              }
           });
    }
  
}
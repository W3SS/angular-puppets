import { NgModule, Component, ViewChild, ViewContainerRef, ComponentFactoryResolver}  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { appRoutes } from '../app/app-routes.config';

@Component({
  selector: 'puppet-1',
  templateUrl: './puppet-1.html'
})
export class PuppetComponent1 { }
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Error404Component } from './components/error404/error404.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes=[
    {path: '', component:HomeComponent},
    {path: 'About', component:AboutComponent},
    {path: 'Projects', component:ProjectsComponent},
    {path: 'Projects/:name', component:ProjectComponent},
    {path: 'Contact', component:ContactComponent},
    {path: '**', component:Error404Component},
];

export const appRoutingProviders :any []=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);
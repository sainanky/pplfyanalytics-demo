import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignComponent } from './components/sign/sign.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'homepage',
    pathMatch: 'full' 
  },
  { path: 'pages', loadChildren: './components/pages/pages.module#PagesModule' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'signup', component: SignComponent },
  { path: 'signin', component: SignupComponent },
  // { path: '**', component: ErrorComponent }    
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'homepage',
    pathMatch: 'full' 
  },
  { path: 'pages', loadChildren: './components/pages/pages.module#PagesModule', canActivate: [AuthGuard] },
  { path: 'homepage', component: HomepageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: ErrorComponent }    
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

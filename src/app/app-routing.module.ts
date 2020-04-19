import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { Page404Component } from './shared/components/page404/page404.component';
import { PageNotAllowedComponent } from './shared/components/page-not-allowed/page-not-allowed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./sport-event/sport-event.module').then(
        (m) => m.SportEventModule
      ),
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'pageNotFound',
    component: Page404Component,
  },
  {
    path: 'pageNotAllowed',
    component: PageNotAllowedComponent,
  },
  {
    path: '**',
    redirectTo: 'pageNotFound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

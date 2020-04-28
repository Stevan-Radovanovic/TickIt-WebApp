import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { Page404Component } from './shared/components/page404/page404.component';
import { HomeComponent } from './home/home.component';
import { AlreadyLogedGuard } from './shared/guards/already-loged.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { OrderEmailComponent } from './order-email/order-email.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'is1' },
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./sport-event/sport-event.module').then(
        (m) => m.SportEventModule
      ),
    data: { animation: 'is2' },
    canActivateChild: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrderEmailComponent,
    data: { animation: 'is3' },
    canActivateChild: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
    data: { animation: 'is4' },
    canActivate: [AlreadyLogedGuard],
  },
  {
    path: 'login',
    component: LogInComponent,
    data: { animation: 'is5' },
    canActivate: [AlreadyLogedGuard],
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
    path: '**',
    redirectTo: 'pageNotFound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

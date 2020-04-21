import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventWrapComponent } from './event-wrap/event-wrap.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [
  {
    path: '',
    component: EventWrapComponent,
  },
  {
    path: 'success',
    component: OrderSuccessComponent,
  },
  {
    path: ':id',
    component: OrderPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportEventRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventWrapComponent } from './event-wrap/event-wrap.component';

const routes: Routes = [
  {
    path: '',
    component: EventWrapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportEventRoutingModule {}

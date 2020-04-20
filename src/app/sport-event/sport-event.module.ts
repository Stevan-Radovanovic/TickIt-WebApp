import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventWrapComponent } from './event-wrap/event-wrap.component';
import { SportEventRoutingModule } from './sport-event-routing.module';
import { EventSingleComponent } from './event-wrap/event-single/event-single.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventWrapComponent, EventSingleComponent, OrderPageComponent],
  imports: [CommonModule, SportEventRoutingModule, SharedModule],
})
export class SportEventModule {}

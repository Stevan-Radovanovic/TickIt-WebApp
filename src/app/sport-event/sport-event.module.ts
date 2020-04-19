import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventWrapComponent } from './event-wrap/event-wrap.component';
import { SportEventRoutingModule } from './sport-event-routing.module';
import { EventSingleComponent } from './event-wrap/event-single/event-single.component';

@NgModule({
  declarations: [EventWrapComponent, EventSingleComponent],
  imports: [CommonModule, SportEventRoutingModule],
})
export class SportEventModule {}

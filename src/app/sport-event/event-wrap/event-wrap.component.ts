import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/shared/services/dummy.service';
import { SportEvent } from 'src/app/shared/models/sportevent.model';

@Component({
  selector: 'app-event-wrap',
  templateUrl: './event-wrap.component.html',
  styleUrls: ['./event-wrap.component.css'],
})
export class EventWrapComponent implements OnInit {
  events: SportEvent[] = [];

  constructor(private dummy: DummyService) {}

  ngOnInit(): void {
    this.events = this.dummy.events;
  }
}

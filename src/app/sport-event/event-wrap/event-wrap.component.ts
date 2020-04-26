import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/shared/services/dummy.service';
import { SportEvent } from 'src/app/shared/models/sportevent.model';
import { SportEventService } from 'src/app/shared/services/sport-event.service';

@Component({
  selector: 'app-event-wrap',
  templateUrl: './event-wrap.component.html',
  styleUrls: ['./event-wrap.component.css'],
})
export class EventWrapComponent implements OnInit {
  events: SportEvent[] = [];
  isLoading = false;

  constructor(private sport: SportEventService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.sport.getSportEvents().subscribe((response) => {
      console.log(response);
      this.events = response.documents;
      this.sport.sportEvents = response.documents;
      this.isLoading = false;
    });
  }
}

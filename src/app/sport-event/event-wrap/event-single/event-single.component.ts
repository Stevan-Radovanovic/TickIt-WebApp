import { Component, OnInit, Input } from '@angular/core';
import { SportEvent } from 'src/app/shared/models/sportevent.model';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.css'],
})
export class EventSingleComponent implements OnInit {
  @Input() selectedEvent: SportEvent;

  constructor() {}

  ngOnInit(): void {}
}

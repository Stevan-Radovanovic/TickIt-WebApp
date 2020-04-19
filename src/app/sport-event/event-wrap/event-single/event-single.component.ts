import { Component, OnInit, Input } from '@angular/core';
import { SportEvent } from 'src/app/shared/models/sportevent.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.css'],
})
export class EventSingleComponent implements OnInit {
  @Input() selectedEvent: SportEvent;

  selected = false;

  constructor(private router: Router) {}

  onChangeModal() {
    this.selected = !this.selected;
  }

  onBuyTickets() {
    this.router.navigate(['../' + this.selectedEvent.id.toString()]);
  }

  ngOnInit(): void {}
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SportEvent } from '../../shared/models/sportevent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from 'src/app/shared/models/zone.model';
import { SportEventService } from 'src/app/shared/services/sport-event.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sport: SportEventService,
    private router: Router
  ) {}

  stringTicket = '[ ';
  isLoading = false;
  cummulativeValue = 0;
  selectedEvent: SportEvent = null;
  zones: Zone[] = [];
  selectedOption: string;
  cartEmpty = true;
  cart: { name: string; amount: number }[] = [];

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.selectedEvent = this.sport.getSportEventById(
      this.route.snapshot.params['id']
    );
    if (this.selectedEvent === null || this.selectedEvent === undefined) {
      this.router.navigateByUrl('/pageNotFound');
    }
    this.zones = this.selectedEvent.zones;
  }

  onAdd() {
    const stringArray = this.selectedOption.split(' ');
    const amount = +stringArray.pop();
    console.log(amount);
    console.log(stringArray);
    this.cart.push({ name: 'Ticket for ' + stringArray[0], amount: +amount });
    this.stringTicket = this.stringTicket + stringArray[0] + ' ';
    this.cummulativeValue = this.cummulativeValue + amount;
    this.cartEmpty = false;
  }

  onDelete(ticket) {
    console.log('%c cart', 'color: pink; background-color: black');
    const deleted = this.cart.filter((value) => value.name === ticket);
    console.log(deleted);
    this.cart = this.cart.filter((value) => value.name !== ticket);
    this.cummulativeValue -= deleted[0].amount;
    if (this.cart.length === 0) {
      this.cartEmpty = true;
    }
  }
}

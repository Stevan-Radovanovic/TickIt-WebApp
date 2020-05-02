import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { SportEvent } from '../../models/sportevent.model';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import emailjs from 'emailjs-com';

declare var paypal;

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.css'],
})
export class PayPalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  @Input() selected: SportEvent = null;
  @Input() stringTicket: string;
  @Input() amount = 0;
  paidFor = false;
  isLoading = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private ord: OrderService
  ) {
    console.log(this.selected);
  }

  ngOnInit(): void {
    this.isLoading = false;
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.selected.name,
                amount: {
                  currency_code: 'EUR',
                  value: this.amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          this.isLoading = true;
          const order = await actions.order.capture();
          console.log(order);
          const newOrder: Order = {
            email: localStorage.getItem('email'),
            eventName: this.selected.name,
            amount: this.amount + ' EUR',
            ticket: this.stringTicket + ']',
            date: this.selected.date,
          };
          this.ord.createOrder(newOrder);
          console.log(newOrder);
          this.paidFor = true;
          emailjs
            .send(
              'gmail',
              'orderconfirmed',
              {
                eventName: newOrder.eventName,
                email: newOrder.email,
                date: newOrder.date,
              },
              'user_r3sH2XSB3C1hDEclKmPiJ'
            )
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          this.router.navigateByUrl('/events/success');
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
}

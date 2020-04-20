import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { SportEvent } from '../../models/sportevent.model';

declare var paypal;

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.css'],
})
export class PayPalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  @Input() selected: SportEvent = null;

  paidFor = false;

  constructor() {
    console.log(this.selected);
  }

  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.selected.name,
                amount: {
                  currency_code: 'EUR',
                  value: 30,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
}

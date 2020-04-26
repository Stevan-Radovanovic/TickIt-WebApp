import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
} from '@angular/core';
import { SportEvent } from '../../models/sportevent.model';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

declare var paypal;

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.css'],
})
export class PayPalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  @Input() selected: SportEvent = null;
  @Input() amount = 0;
  paidFor = false;

  constructor(private router: Router) {
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
                  value: this.amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          this.paidFor = true;
          this.router.navigateByUrl('/events/success');
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
}

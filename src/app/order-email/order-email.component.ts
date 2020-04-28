import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-order-email',
  templateUrl: './order-email.component.html',
  styleUrls: ['./order-email.component.css'],
})
export class OrderEmailComponent implements OnInit {
  orders: Order[] = [];
  isLoading = false;

  constructor(private ord: OrderService) {}

  ngOnInit(): void {
    this.isLoading = true;
    console.log(localStorage.getItem('email'));
    this.ord
      .getOrdersByEmail(localStorage.getItem('email'))
      .subscribe((response) => {
        console.log(response);
        this.orders = response.orders;
        this.isLoading = false;
      });
  }
}

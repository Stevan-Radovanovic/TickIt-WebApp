import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(order: Order) {
    this.http
      .post('http://localhost:3000/orders', order)
      .subscribe((response) => {
        console.log(response);
      });
  }
}

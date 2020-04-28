import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-order-email',
  templateUrl: './order-email.component.html',
  styleUrls: ['./order-email.component.css'],
})
export class OrderEmailComponent implements OnInit {
  orders: Order[] = [];
  isLoading = false;

  constructor(private ord: OrderService, private auth: AuthService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.ord.getOrdersByEmail(this.auth.email).subscribe((response) => {
      this.orders = response.orders;
      this.isLoading = false;
    });
  }
}

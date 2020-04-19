import { Component, OnInit } from '@angular/core';
import { SportEvent } from '../../shared/models/sportevent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyService } from 'src/app/shared/services/dummy.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dummy: DummyService,
    private router: Router
  ) {}

  selectedEvent: SportEvent = null;

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.selectedEvent = this.dummy.getById(+this.route.snapshot.params['id']);
    if (this.selectedEvent === null || this.selectedEvent === undefined) {
      this.router.navigateByUrl('/pageNotFound');
    }
  }
}

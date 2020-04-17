import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-allowed',
  templateUrl: './page-not-allowed.component.html',
  styleUrls: ['./page-not-allowed.component.css'],
})
export class PageNotAllowedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['../login']);
    }, 5000);
  }
}

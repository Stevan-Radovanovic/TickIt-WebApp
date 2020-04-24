import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  toggleActive = false;
  authenticated = false;

  ngOnInit(): void {
    this.auth.tokenSubject.subscribe(
      (response) => (this.authenticated = response)
    );
  }

  onBurgerClick() {
    this.toggleActive = !this.toggleActive;
  }

  onLogout() {
    this.auth.logOut();
  }
}

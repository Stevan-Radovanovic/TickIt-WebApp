import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './shared/animations/slider.animation';
import { AuthService } from './shared/services/auth.service';
import { DummyService } from './shared/services/dummy.service';

@Component({
  selector: 'app-root',
  animations: [slider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService, public dummy: DummyService) {}

  ngOnInit(): void {
    this.auth.autoLogIn();
  }
  title = 'diplomski';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}

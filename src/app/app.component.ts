import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './shared/animations/slider.animation';

@Component({
  selector: 'app-root',
  animations: [slider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'diplomski';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}

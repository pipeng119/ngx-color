import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  hex = '#37D67A';

  changeComplete({colors, $event}) {
    this.hex = colors.hex;
  }
}

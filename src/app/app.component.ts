import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNotification = false;
  handleButtonClick(value: boolean) {
    this.showNotification = !value
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() subHeading = '';
  @Input() status = false;
  @Output() onButtonClick = new EventEmitter<boolean>();

  handleClick() {
    this.onButtonClick.emit(this.status)
  }

}

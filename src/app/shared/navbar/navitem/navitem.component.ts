import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.css']
})
export class NavitemComponent implements OnInit {
  @Input() text = '';
  @Input() isHome = false;

  get navClasses() {
    return this.isHome ? 'w3-bar-item w3-button w3-padding-large w3-white' : 'w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

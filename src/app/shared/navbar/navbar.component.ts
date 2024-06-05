import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [
    { text: 'Home', isHome: true },
    { text: 'Contact Me', isHome: false },
    { text: 'About Us', isHome: false },
    { text: 'Blogs', isHome: false },
    { text: 'Login', isHome: false }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}



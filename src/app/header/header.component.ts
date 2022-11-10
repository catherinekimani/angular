import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slogan: string = 'Your one stop shop for everything';
  source: string = '/assets/coding-girl.png'
  getSlogan() {
    return "This is a new slogan"
  }
}

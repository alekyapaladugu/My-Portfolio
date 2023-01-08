import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  windowHeight: any;
  constructor() {}

  ngOnInit(): void {
    this.windowHeight = window.innerHeight + 'px';
  }

  scrollToAboutSection(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

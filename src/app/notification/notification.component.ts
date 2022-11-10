import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class='alert alert-success' [ngClass]="{fadeOut: displayNotification}">
    This webiste uses cookies for better experience
    <div class="close"> 
    <button class="btn" (click)="closeNotification()">X</button>
</div>
    </div>`,
  styles: ["div{margin:10px 20px; text-align:center;padding:10px 20px;}",
    "p{color:white;}",
    ".close{float:right;margin-top:-15px}",".fadeOut:{visibility:hidden;opacity:0;transition:visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification: boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }
}

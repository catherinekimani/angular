import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-observables';

  myObservable = new Observable((observer) => {
    console.log('observable starts')
    setTimeout(() => { observer.next('1') }, 1000)
    setTimeout(()=>{observer.next('2')},2000)
    setTimeout(() => { observer.next('3') }, 3000)
    // setTimeout(()=>{observer.error(new Error('something went wrong'))},3000)
    setTimeout(() => { observer.next('4') }, 4000)
    setTimeout(() => { observer.next('5') }, 5000)
    setTimeout(()=>{observer.complete()},4000)
    // observer.next('1')
    // observer.next('2')
    // observer.next('3')
    // observer.next('4')    
  });
    // createing an observable using create() method
    // we need to first access the observable
  createObservable = Observable.create((observer:any) => {
    observer.next('a')
    observer.next('b')
    observer.next('c')
    setTimeout(()=>{observer.error(new Error('something went wrong'))},4000)
    observer.next('d')
  });

  ngOnInit() {
    this.createObservable.subscribe((createmeth:any) => {
      console.log(createmeth)
    });
    this.myObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      // alert(error.message)
    }, () => {
      // alert('observable has completed emitting all values')
    });
  }
}

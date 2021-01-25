import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import {  SingleSpaProps } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'settings';

  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  msgFromMicro = "";
  titleToPass = "";
  constructor() {

  }
  ngOnInit(): void {


  }
  lookForEvents() {
  }
  sendMsg() {

  }
  ngOnDestroy(): void {

  }
}

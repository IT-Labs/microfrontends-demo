import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { singleSpaPropsSubject, SingleSpaProps } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin';
  
  singleSpaProps: SingleSpaProps;
  subscription: Subscription; 

  msgFromMicro = "";
  titleToPass = "";
  constructor(private ChangeDetectorRef: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    if (!environment.micro) {
      this.subscription = singleSpaPropsSubject.subscribe(
        props => {
          this.singleSpaProps = props;
          console.log(props); 
        }
      );
    }
    this.singleSpaProps['eventBus'].onEncryptedClaims((data) => {
       console.log(`encrypted claims ${data}`)
      this.ChangeDetectorRef.detectChanges();
    });
  } 

  lookForEvents() {
    if (!environment.micro) {
      this.singleSpaProps['eventBus'].onCustomMessage('onCustomMessage', (data) => {
        this.msgFromMicro = data;
        this.ChangeDetectorRef.detectChanges();
      });
    }

  }
  sendMsg() {
    // alert(this.titleToPass);
    if (!environment.micro) {
      this.singleSpaProps['eventBus'].emitCustomMessage({ data: this.titleToPass });
    }
  }
  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

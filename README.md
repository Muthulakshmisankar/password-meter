# password-meter
angular password strength meter
Overview
--------
A simple way to check that password strength of a certain passphrase based on HTML5.

Installation
------------
step1: npm i ng-password-strength-meter-ml --save
_____________________________________________________
Step2: Import password-meter-ml into your app module

import { NgPasswordMeterMlModule } from 'projects/ng-password-meter-ml/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgPasswordMeterMlModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
_____________________________________________________
step3: Import password meter component into your form

<lib-ng-password-meter-ml [password]="passwrd"></lib-ng-password-meter-ml>
______________________________________________________

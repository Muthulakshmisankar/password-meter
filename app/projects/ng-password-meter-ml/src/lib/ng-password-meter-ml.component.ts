import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-password-meter-ml',
  template: `
  <div id="password_strength" *ngIf="needLabel"></div>
  <div class="progress">
      <div class="progress-bar password_strength_meter" ></div>
  </div>
  `,
  styles: [
  ]
})
export class NgPasswordMeterMlComponent implements OnInit, OnChanges {
  @Input() password: any;
  @Input() color: any = {
    strong: '#28a745',
    medium: '#fd7e14',
    weak: '#dc3545'
  }
  @Input() needLabel : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.CheckPasswordStrength(this.password);
  }
  CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");
    var password_strength_meter: any = document.getElementsByClassName('password_strength_meter')[0];
    //TextBox left blank.
    if (password.length == 0) {
      password_strength.innerHTML = "";
      password_strength_meter.style.width = "0%";
      return;
    }
    let strongPwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    let mediumPwdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/
    let weakPwdRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#\$%\^&\*])(?=.{2,})/
    //Regular Expressions.
    let regex = new Array();

    regex.push(weakPwdRegex) //Weak Reagex
    regex.push(mediumPwdRegex); //Medium Regex
    regex.push(strongPwdRegex); //Strong regex
    var passed = 0;
    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password)) {
        passed++;
      }
    }

    //Validate for length of Password.
    if (passed > 1 && password.length > 8) {
      if (passed === 3) {
        return
      }
      passed++;
    }

    //Display status.
    var txt_color = "";
    var strength = "";
    var meter_color = "";
    var meter_width = "";
    switch (passed) {
      case 0:
        meter_width = "0%";
      case 1:
        meter_width = "10%";
        meter_color = this.color.weak;
        strength = "Weak";
        txt_color = "red";
        break;
      case 2:
        meter_width = "50%";
        meter_color = this.color.medium;
        strength = "Medium";
        txt_color = "green";
        break;
      case 3:
        meter_width = "90%";
        meter_color = this.color.strong;
        strength = "Very Strong";
        txt_color = "darkgreen";
        break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = txt_color;
    password_strength_meter.style.width = meter_width;
    password_strength_meter.style.background = meter_color;
  }
}

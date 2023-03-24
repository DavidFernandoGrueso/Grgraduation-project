import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent  {

  emailPattern: any = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
 

  createFormGroup(){

    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    
  }

  }



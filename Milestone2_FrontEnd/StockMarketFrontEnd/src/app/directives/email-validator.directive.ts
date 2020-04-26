import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { emailValidator } from '../validator/validators'

@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_VALIDATORS, useValue: emailValidator, multi: true }] //校验sign up email
})
export class EmailValidatorDirective {

  constructor() { }

}

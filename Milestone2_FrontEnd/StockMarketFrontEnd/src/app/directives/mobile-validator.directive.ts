import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { MobileValidator } from '../validator/validators'

@Directive({
  selector: '[mobile]',
  providers: [{ provide: NG_VALIDATORS, useValue: MobileValidator, multi: true }] //校验sign up mobile
})
export class MobileValidatorDirective {

  constructor() { }

}

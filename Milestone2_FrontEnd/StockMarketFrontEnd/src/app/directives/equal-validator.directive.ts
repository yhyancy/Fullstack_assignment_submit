import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equalValidator } from '../validator/validators'

@Directive({
  selector: '[equal]',
  providers: [{ provide: NG_VALIDATORS, useValue: equalValidator, multi: true }] //校验sign up password and pwconfirm
})
export class EqualValidatorDirective {
  constructor() { }
}

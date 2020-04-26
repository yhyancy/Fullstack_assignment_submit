import { FormControl } from "@angular/forms";


export function MobileValidator(control: FormControl): any {
    // var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})) +\d)
    var myreq = /^1(3|5|7|8)\d{9}$/
    let valid = myreq.test(control.value)
    return valid ? null : { mobile: true }
}
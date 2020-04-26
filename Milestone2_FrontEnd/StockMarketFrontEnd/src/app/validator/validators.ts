import { FormControl } from "@angular/forms";

// 校验signup mobile
export function MobileValidator(control: FormControl): any {
    // var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})) +\d)
    var myreq = /^1(3|5|7|8)\d{9}$/
    let valid = myreq.test(control.value)
    return valid ? null : { mobile: true }
}
// 校验signup password and pwconfirm
export function equalValidator(group: FormControl): any {
    let password: FormControl = group.get("password") as FormControl
    let pwconfirm: FormControl = group.get("pwconfirm") as FormControl
    let valid: boolean = (password.value === pwconfirm.value)
    return valid ? null : { equal: true }
}
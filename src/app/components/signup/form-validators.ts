import { AbstractControl } from '@angular/forms';

export function PassWordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const cpassword = control.get('password2');
  if(password.pristine || cpassword.pristine){
    return null;
  }
return password && cpassword && password.value != cpassword.value ?
 { 'misMatch': true } : 
 null;
}
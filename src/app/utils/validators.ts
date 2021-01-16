import { AbstractControl, Validators } from '@angular/forms';

export const emailValidator = (control: AbstractControl) => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return Validators.pattern(emailPattern)(control) ? {'Invalid email format': true} : null;
}

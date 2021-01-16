import { from } from "rxjs";
import { startCase } from 'lodash';

export function showValidatorErrors(error: any): string {
  return !error
    ? ''
    : error.required
    ? 'Required'
    : error.maxlength
    ? 'Invalid maximum length'
    : error.minlength
    ? 'Invalid minimum length'
    : error.email
    ? 'Invalid email'
    : startCase(Object.keys(error)[0]);
}

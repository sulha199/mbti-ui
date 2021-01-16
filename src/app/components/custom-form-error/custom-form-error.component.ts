import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { showValidatorErrors } from 'src/app/utils';

@Component({
  selector: 'app-custom-form-error',
  templateUrl: './custom-form-error.component.html',
  styleUrls: ['./custom-form-error.component.scss']
})
export class CustomFormErrorComponent implements OnInit {
  @Input('control') formControl: FormControl = new FormControl();

  showValidatorErrors = showValidatorErrors.bind(this);

  constructor() { }

  ngOnInit(): void {
  }

}

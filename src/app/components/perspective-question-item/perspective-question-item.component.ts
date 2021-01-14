import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perspective-question-item',
  templateUrl: './perspective-question-item.component.html',
  styleUrls: ['./perspective-question-item.component.scss']
})
export class PerspectiveQuestionItemComponent implements OnInit {
  @Input() questionForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

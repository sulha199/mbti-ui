import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { maxScore } from 'src/app/const';
import { ParticipantAnswer, Question } from 'src/app/models';
import { showValidatorErrors } from 'src/app/utils';

@Component({
  selector: 'app-perspective-question-item',
  templateUrl: './perspective-question-item.component.html',
  styleUrls: ['./perspective-question-item.component.scss']
})
export class PerspectiveQuestionItemComponent implements OnInit {
  @Input() answerForm: FormGroup;
  @Input() questionContent: Question;

  scoreArray = new Array(maxScore);
  showValidatorErrors = showValidatorErrors.bind(this);

  constructor() { }

  ngOnInit(): void {
    this.answerForm.patchValue({
      question_id: this.questionContent.id
    } as ParticipantAnswer);
  }

}

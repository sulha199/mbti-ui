import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { maxScore } from 'src/app/const';
import { ParticipantAnswer, Question } from 'src/app/models';
import { showValidatorErrors } from 'src/app/utils';

@Component({
  selector: 'app-perspective-question-item',
  templateUrl: './perspective-question-item.component.html',
  styleUrls: ['./perspective-question-item.component.scss'],
})
export class PerspectiveQuestionItemComponent implements OnChanges {
  @Input() answerForm: FormGroup;
  @Input() questionContent: Question;

  scoreArray = new Array(maxScore).fill(null).map((_, index) => index + 1);
  showValidatorErrors = showValidatorErrors.bind(this);

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.questionContent) {
      this.answerForm.patchValue({
        question_id: this.questionContent && this.questionContent.id,
      } as ParticipantAnswer);
    }
  }
}

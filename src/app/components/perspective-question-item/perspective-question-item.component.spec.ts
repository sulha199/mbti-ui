import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { By } from '@angular/platform-browser';
import { maxScore, mockQuestions } from 'src/app/const';
import { ParticipantAnswer, ParticipantAnswerScore } from 'src/app/models';
import { createAnswerForm } from 'src/app/utils/perspetive';
import { PerspectiveQuestionItemComponent } from './perspective-question-item.component';

describe('PerspectiveQuestionItemComponent', () => {
  let component: PerspectiveQuestionItemComponent;
  let fixture: ComponentFixture<PerspectiveQuestionItemComponent>;
  let radioDebugElements: DebugElement[];
  let radioLabelElements: HTMLLabelElement[];
  let radioInstances: MatRadioButton[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerspectiveQuestionItemComponent],
      imports: [MatRadioModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveQuestionItemComponent);
    component = fixture.componentInstance;
    component.answerForm = createAnswerForm();
    component.questionContent = mockQuestions[0];
    component.ngOnChanges({ questionContent: {} as any });
    fixture.detectChanges();
    radioDebugElements = fixture.debugElement.queryAll(
      By.directive(MatRadioButton)
    );
    radioLabelElements = radioDebugElements.map(
      (debugEl) => debugEl.query(By.css('label')).nativeElement
    );
    radioInstances = radioDebugElements.map(
      (debugEl) => debugEl.componentInstance
    );
  });

  it('should load question and select first radio-button form correctly ', fakeAsync(() => {
    radioLabelElements[0].click();
    fixture.detectChanges();
    tick(100);

    expect(radioInstances[0].checked).toBe(true);
    expect((component.answerForm.value as ParticipantAnswer).question_id).toBe(
      mockQuestions[0].id
    );
    expect((component.answerForm.value as ParticipantAnswer).score).toBe(
      1 as ParticipantAnswerScore
    );
  }));

  it('should load question and select last radio-button form correctly ', fakeAsync(() => {
    radioLabelElements.slice(-1)[0].click();
    fixture.detectChanges();
    tick(100);

    expect(radioInstances.slice(-1)[0].checked).toBe(true);
    expect((component.answerForm.value as ParticipantAnswer).question_id).toBe(
      mockQuestions[0].id
    );
    expect((component.answerForm.value as ParticipantAnswer).score).toBe(
      maxScore as ParticipantAnswerScore
    );
  }));
});

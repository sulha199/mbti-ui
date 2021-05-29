import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatInput } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import {
  mockApiPerspectiveProvider,
  mockParticipant,
  mockParticipantWithPerspective,
  mockQuestions,
  mockRouterProvider,
  RouteList,
} from 'src/app/const';

import { PerspectiveComponent } from './perspective.component';
import { Participant } from 'src/app/models';
import { createParticipantForm } from 'src/app/utils';

fdescribe('PerspectiveComponent', () => {
let component: PerspectiveComponent; 
  let fixture: ComponentFixture<PerspectiveComponent>;
  let radioGroupDebugElements: DebugElement[];
  let buttonDebugElement: DebugElement;
  let buttonInstance: MatButton;
  let emailInputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerspectiveComponent],
      providers: [mockRouterProvider, mockApiPerspectiveProvider],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    radioGroupDebugElements = fixture.debugElement.queryAll(
      By.directive(MatRadioGroup)
    );
    buttonDebugElement = fixture.debugElement.query(By.directive(MatButton));
    buttonInstance = buttonDebugElement.componentInstance;
    emailInputElement = fixture.debugElement.query(
      By.css('input[matinput]')
    ).nativeElement;
  });

  it('should load questions', () => {
    expect(radioGroupDebugElements.length).toBe(mockQuestions.length);
    expect(component).toBeTruthy();
    expect(buttonInstance.disabled).toBe(true);
  });

  it('should fill form and submit a valid form', fakeAsync(() => {
    // fill forms
    fillForm(radioGroupDebugElements, emailInputElement);
    fixture.detectChanges();

    // click submit button
    spyOn(component, 'submit').and.callFake((formGroup) => {
      const participantValue = formGroup.value as Participant;
      expect(formGroup.valid).toBe(true);
      expect(participantValue.participantAnswers).toEqual(
        mockParticipant.participantAnswers
      );
      expect(participantValue.email).toBe(mockParticipant.email);
    });
    expect(buttonInstance.disabled).toBeFalsy();
    buttonDebugElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.submit).toHaveBeenCalled();
  }));

  it('submit() should send to API and navigate to result', fakeAsync(() => {
    const mockForm = createParticipantForm(mockQuestions);
    mockForm.patchValue(mockParticipant);

    component.submit(mockForm);
    tick(100);

    expect(mockForm.valid).toBe(true);
    expect(
      mockApiPerspectiveProvider.useValue.submitPerspective
    ).toHaveBeenCalled();
    expect(component.participant$.value).toEqual(
      mockParticipantWithPerspective
    );
    expect(mockRouterProvider.useValue.navigate).toHaveBeenCalledWith([
      RouteList.result,
    ]);
  }));
});

function fillForm(
  radioGroupDebugElements: DebugElement[],
  emailInputElement: HTMLInputElement
) {
  radioGroupDebugElements.forEach((group, index) => {
    const radioDebugElements = group.queryAll(By.directive(MatRadioButton));
    const radioLabelElements: HTMLLabelElement[] = radioDebugElements.map(
      (debugEl) => debugEl.query(By.css('label')).nativeElement
    );
    radioLabelElements[
      mockParticipant.participantAnswers[index].score - 1
    ].click();
  });
  emailInputElement.value = mockParticipant.email;
  emailInputElement.dispatchEvent(new Event('input'));
}

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioGroup } from '@angular/material/radio';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { mockApiPerspectiveProvider, mockQuestions, mockRouterProvider } from 'src/app/const';

import { PerspectiveComponent } from './perspective.component';

fdescribe('PerspectiveComponent', () => {
  let component: PerspectiveComponent;
  let fixture: ComponentFixture<PerspectiveComponent>;
  let radioGroupDebugElements: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectiveComponent ],
      providers: [mockRouterProvider, mockApiPerspectiveProvider],
      imports: [
        AppModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveComponent) ;
    component = fixture.componentInstance;
    fixture.detectChanges();
    radioGroupDebugElements = fixture.debugElement.queryAll(
      By.directive(MatRadioGroup)
    );
  });

  it('should load questions', () => {
    expect(radioGroupDebugElements.length).toBe(mockQuestions.length);
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveQuestionItemComponent } from './perspective-question-item.component';

describe('PerspectiveQuestionItemComponent', () => {
  let component: PerspectiveQuestionItemComponent;
  let fixture: ComponentFixture<PerspectiveQuestionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectiveQuestionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveQuestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

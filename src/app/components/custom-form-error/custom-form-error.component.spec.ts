import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormErrorComponent } from './custom-form-error.component';

describe('CustomFormErrorComponent', () => {
  let component: CustomFormErrorComponent;
  let fixture: ComponentFixture<CustomFormErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFormErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

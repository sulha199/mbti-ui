import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { mockParticipantWithPerspective } from 'src/app/const';
import {
  mockRouterProvider,
  spyNavigate,
} from 'src/app/const/mock-angular-providers.spec';

import { PerspectiveResultComponent } from './perspective-result.component';

describe('PerspectiveResultComponent', () => {
  let component: PerspectiveResultComponent;
  let fixture: ComponentFixture<PerspectiveResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerspectiveResultComponent],
      providers: [mockRouterProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyNavigate.calls.reset();
  });

  it('should redirect if result empty', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();

    expect(spyNavigate).toHaveBeenCalledTimes(1);
  });

  it('should show result', fakeAsync(() => {
    component.participant$.next(mockParticipantWithPerspective);
    component.ngOnInit();
    fixture.detectChanges();

    expect(spyNavigate).toHaveBeenCalledTimes(0);
    expect(component).toBeTruthy();
  }));
});

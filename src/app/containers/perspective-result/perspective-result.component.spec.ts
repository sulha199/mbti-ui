import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { mockParticipantWithPerspective } from 'src/app/const';

import { PerspectiveResultComponent } from './perspective-result.component';

describe('PerspectiveResultComponent', () => {
  const spyNavigate = jasmine.createSpy('navigate');
  let component: PerspectiveResultComponent;
  let fixture: ComponentFixture<PerspectiveResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectiveResultComponent ],
      providers: [{
        provide: Router,
        useValue: {
          navigate: spyNavigate
        }}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect if result empty', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();

    expect(spyNavigate).toHaveBeenCalled();
  });

  it('should show result', fakeAsync(() => {
    spyNavigate.calls.reset();
    component.participant$.next(mockParticipantWithPerspective);
    component.ngOnInit();
    fixture.detectChanges();

    expect(spyNavigate).toHaveBeenCalledTimes(0)
    expect(component).toBeTruthy();
  }));
});

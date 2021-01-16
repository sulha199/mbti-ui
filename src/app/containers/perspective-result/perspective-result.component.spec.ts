import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveResultComponent } from './perspective-result.component';

describe('PerspectiveResultComponent', () => {
  let component: PerspectiveResultComponent;
  let fixture: ComponentFixture<PerspectiveResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectiveResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

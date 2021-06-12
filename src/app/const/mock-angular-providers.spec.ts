import { Router } from '@angular/router';

export const spyNavigate = jasmine.createSpy('navigate');
export const mockRouterProvider = {
  provide: Router,
  useValue: {
    navigate: spyNavigate,
  },
};

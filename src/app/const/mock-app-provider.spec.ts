import { of } from 'rxjs';
import { ApiPerspectiveService } from '../services';
import { mockParticipantWithPerspective, mockQuestions } from './mock';

export const mockApiPerspectiveProvider = {
  provide: ApiPerspectiveService,
  useValue: {
    submitPerspective: jasmine
      .createSpy('submitPerspective')
      .and.returnValue(of(mockParticipantWithPerspective)),
    getQuestions: jasmine
      .createSpy('getQuestions')
      .and.returnValue(of(mockQuestions)),
  },
};

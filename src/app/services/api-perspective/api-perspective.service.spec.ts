import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiPerspectiveService } from './api-perspective.service';
import { mockParticipant, mockParticipantWithPerspective, mockQuestions } from 'src/app/const';
import { environment } from 'src/environments/environment';

describe('ApiPerspectiveService', () => {
  let service: ApiPerspectiveService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiPerspectiveService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should submit perspective result', (done) => {
    service.submitPerspective(mockParticipant).subscribe(result => {
      expect(result).toEqual(mockParticipantWithPerspective);
      done();
    });
    httpMock.expectOne(`${environment.api}/${service.perspectivePath}/submit`).flush(mockParticipantWithPerspective);
  });

  it('should get question list', (done) => {
    service.getQuestions().subscribe(result => {
      expect(result).toEqual(mockQuestions);
      done();
    });
    httpMock.expectOne(`${environment.api}/${service.questionPath}`).flush(mockQuestions);
  });


});

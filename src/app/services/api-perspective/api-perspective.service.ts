import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createApiUrl } from 'src/app/utils';
import { Participant, ParticipantRequest, Question } from 'src/app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPerspectiveService {
  readonly questionPath = 'question';
  readonly perspectivePath = 'participant';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(createApiUrl(this.questionPath));
  }

  submitPerspective(data: Participant): Observable<Participant> {
    const url = createApiUrl(`${this.perspectivePath}/submit`);
    return this.http.post<Participant>(url, {
      Participant: data,
      ParticipantAnswers: data.participantAnswers
    } as ParticipantRequest);
  }
}

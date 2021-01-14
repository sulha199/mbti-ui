import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiPerspectiveService, PerspectiveService } from 'src/app/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.scss']
})
export class PerspectiveComponent implements OnInit {
  readonly participant$ = this.perspectiveService.participant$;
  readonly shouldShowPerspectiveResult$ = this.getShouldShowResult();
  readonly questions$ = this.apiPerspective.getQuestions();

  constructor(
    private perspectiveService: PerspectiveService,
    private apiPerspective: ApiPerspectiveService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {}

  getShouldShowResult(): Observable<boolean> {
    return this.participant$.pipe(
      map(participant => !!participant
        && !!participant.participantPerspective
        && !!participant.participantPerspective.summary
      )
    );
  }

}

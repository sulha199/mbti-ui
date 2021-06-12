import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiPerspectiveService, PerspectiveService } from 'src/app/services';
import { map } from 'rxjs/operators';
import { createParticipantForm } from 'src/app/utils';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteList } from 'src/app/const';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: ['./perspective.component.scss']
})
export class PerspectiveComponent implements OnInit {
  readonly participant$ = this.perspectiveService.participant$;
  readonly questions$ = this.apiPerspective.getQuestions();
  readonly participantForm$ = this.getForm();

  constructor(
    private perspectiveService: PerspectiveService,
    private apiPerspective: ApiPerspectiveService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(formGroup: FormGroup): void {
    if (formGroup.valid) {
      this.apiPerspective.submitPerspective(formGroup.value).subscribe(result => {
        this.participant$.next(result);
        this.router.navigate([RouteList.result]);
      });
    }
  }

  getForm(): Observable<FormGroup> {
    return this.questions$.pipe(
      map(createParticipantForm)
    );
  }
}

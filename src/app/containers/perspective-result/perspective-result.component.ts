import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerspectiveService } from 'src/app/services';

@Component({
  selector: 'app-perspective-result',
  templateUrl: './perspective-result.component.html',
  styleUrls: ['./perspective-result.component.scss']
})
export class PerspectiveResultComponent implements OnInit {
  readonly participant$ = this.perspectiveService.participant$;

  constructor(
    private perspectiveService: PerspectiveService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.redirectIfResultEmpty();
  }

  redirectIfResultEmpty(): void {
    const participant = this.participant$.value;
    if (!participant ||
        !participant.participantPerspective ||
        !participant.participantPerspective.summary) {
      this.router.navigate(['perspective']);
    }
  }

}

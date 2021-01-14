import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Participant } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PerspectiveService {
  public readonly participant$ = new BehaviorSubject<Participant>(null);

  constructor() { }
}

import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Question } from "../models";
import { emailValidator } from "./validators";

export function createAnswerForm(): FormGroup {
  return new FormGroup({
    id: new FormControl(),
    participant_id: new FormControl(),
    question_id: new FormControl(null, Validators.required),
    score: new FormControl(null, Validators.required)
  });
}

export function createParticipantForm(questions: Question[]): FormGroup {
  return  new FormGroup({
    id: new FormControl(),
    email: new FormControl(null, [Validators.required, emailValidator]),
    timestamp: new FormControl(),
    participantAnswers: new FormArray(questions.map(() => createAnswerForm()))
  });
}

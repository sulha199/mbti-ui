import {
  Participant,
  ParticipantAnswer,
  Question,
  QuestionDimension,
} from '../models';
import { randomNumber } from '../utils';

export const questionDimensions: QuestionDimension[] = ['EI', 'SN', 'TF', 'JP'];

export const mockQuestions: Question[] = new Array(9)
  .fill(null)
  .map((_, index) => {
    const dimension =
      questionDimensions[randomNumber(questionDimensions.length - 1)];
    return {
      id: index + 1,
      dimension,
      direction: index % 2 === 0 ? 1 : -1,
      question: `Question #${index + 1}`,
      meaning: dimension.toString()[index % 2],
    } as Question;
  });

export const mockParticipant: Participant = {
  email: 'xx@email.com',
  participantAnswers: mockQuestions.map((question) => {
    return {
      id: null,
      question_id: question.id,
      participant_id: null,
      score: randomNumber(6) + 1,
    } as ParticipantAnswer;
  }),
};

export const mockParticipantWithPerspective: Participant = {
  ...mockParticipant,
  id: 1,
  participantPerspective: {
    ei_e: randomNumber(5),
    ei_i: randomNumber(5),
    jp_j: randomNumber(5),
    jp_p: randomNumber(5),
    sn_n: randomNumber(5),
    sn_s: randomNumber(5),
    tf_f: randomNumber(5),
    tf_t: randomNumber(5),
    participant_id: 1,
    id: 1,
    summary: questionDimensions
      .map((dimension) => dimension[randomNumber(1)])
      .join(''),
  },
};

import { Participant, ParticipantAnswer, Question, QuestionDimension } from '../models';
import { randomNumber } from '../utils';

export const questionDimensions: QuestionDimension[] = ['EI', 'SN', 'TF', 'JP'];

export const mockQuestions: Question[] = new Array(9).map((_, index) => {
  const dimension =
    questionDimensions[randomNumber(questionDimensions.length - 1)];
  return {
    id: index,
    dimension,
    direction: index % 2 === 0 ? 1 : -1,
    question: `Question #${index + 1}`,
    meaning: dimension[index % 2],
  } as Question;
});

export const mockParticipant: Participant = {
  email: 'xx@email.com',
  participantAnswers: mockQuestions.map(question => {
      return {
          question_id: question.id,
          participant_id: null,
          score: randomNumber(6) + 1
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
        summary: `${questionDimensions[randomNumber(1)]}${questionDimensions[randomNumber(1) + 2]}`
    }
}

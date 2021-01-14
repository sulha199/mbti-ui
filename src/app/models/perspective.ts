export interface ParticipantPerspective {
    id?: number;
    participant_id: number;
    ei_i: number;
    ei_e: number;
    sn_s: number;
    sn_n: number;
    tf_t: number;
    tf_f: number;
    jp_j: number;
    jp_p: number;
    summary: string;
}

export interface ParticipantAnswer {
    id?: number;
    participant_id: number;
    question_id: number;
    score: 1 | 2 | 3 | 4 |5 | 6 | 7;
}

export interface Participant {
    id?: number;
    email: string;
    timestamp?: string;
    participantAnswers?: ParticipantAnswer[];
    participantPerspective?: ParticipantPerspective;
}

export interface ParticipantRequest {
    Participant: Participant;
    ParticipantAnswers: ParticipantAnswer[];
}

export interface Question {
    id?: number;
    question: string;
    dimension: string;
    direction: 1 | -1;
    meaning: string;
}

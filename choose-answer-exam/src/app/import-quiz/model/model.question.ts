import {Subject} from './model.Subject';

export class Question {
  idQuestion: number;
  questionContent: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  trueAnswer: string;
  subject: Subject;
}

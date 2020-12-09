import {Subject} from './subject.class';

export class Question {
  public idQuestion: number;
  public questionContent: string;
  public answerA: string;
  public answerB: string;
  public answerC: string;
  public answerD: string;
  public trueAnswer: string;
  public subject: number;
  isChecked: boolean;
}

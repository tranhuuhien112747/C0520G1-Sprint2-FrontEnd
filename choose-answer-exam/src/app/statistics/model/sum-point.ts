export class SumPoint {
  // tslint:disable-next-line:variable-name
  private _username: string;
  // tslint:disable-next-line:variable-name
  private _sumPoint: number;
  // tslint:disable-next-line:variable-name
  private _countExam: number;

  constructor(username, sumPoint, countExam) {
    this._username = username;
    this._sumPoint = sumPoint;
    this._countExam = countExam;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get sumPoint() {
    return this._sumPoint;
  }

  set sumPoint(value) {
    this._sumPoint = value;
  }

  get countExam() {
    return this._countExam;
  }

  set countExam(value) {
    this._countExam = value;
  }
}

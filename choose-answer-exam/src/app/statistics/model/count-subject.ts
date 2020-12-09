export class CountSubject {
  // tslint:disable-next-line:variable-name
  private _subjectName: string;
  // tslint:disable-next-line:variable-name
  private _countSubject: number;


  constructor(subjectName: string, countSubject: number) {
    this._subjectName = subjectName;
    this._countSubject = countSubject;
  }

  get subjectName(): string {
    return this._subjectName;
  }

  set subjectName(value: string) {
    this._subjectName = value;
  }

  get countSubject(): number {
    return this._countSubject;
  }

  set countSubject(value: number) {
    this._countSubject = value;
  }
}

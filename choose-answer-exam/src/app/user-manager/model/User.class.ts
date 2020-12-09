export class User{
  // tslint:disable-next-line:variable-name
  private _idUser: number;
  // tslint:disable-next-line:variable-name
  private _username: string;
  // tslint:disable-next-line:variable-name
  private _password: string;
  // tslint:disable-next-line:variable-name
  private _fullName: string;
  // tslint:disable-next-line:variable-name
  private _email: string;
  // tslint:disable-next-line:variable-name
  private _address: string;
  // tslint:disable-next-line:variable-name
  private _phoneNumber: string;
  // tslint:disable-next-line:variable-name
  private _image: string;

  get idUser(): number {
    return this._idUser;
  }

  set idUser(value: number) {
    this._idUser = value;
  }


  get userName(): string {
    return this._username;
  }

  set userName(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}


export class User {

  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _username: string;
  private _password: string;

  get firstname(): string {
    return this._firstname;
  }

  set firstname(newFirstname: string) {
    this._firstname = newFirstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(newLastname: string) {
    this._lastname = newLastname;
  }

  get email(): string {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  get username(): string {
    return this._username;
  }
}

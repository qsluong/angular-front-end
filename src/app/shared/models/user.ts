export class User {

  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _username: string;
  private _password: string;

  public get firstname() {
    return this._firstname;
  }

  public set firstname(newFirstname: string) {
    this._firstname = newFirstname;
  }

  public get lastname() {
    return this._lastname;
  }

  public set lastname(newLastname: string) {
    this._lastname = newLastname;
  }

  public get email() {
    return this._email;
  }

  public set email(newEmail: string) {
    this._email = newEmail;
  }

  public get username() {
    return this._username;
  }
}

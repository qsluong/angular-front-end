export class Collection {

  private _id: string;
  private _name: string;
  private _createdByUser: string;

  public get id() {
    return this._id;
  }

  public set id(newId: string) {
    this._id = newId;
  }

  public get name() {
    return this._name;
  }

  public set name(newName: string) {
    this._name = newName;
  }

  public get createdByUser() {
    return this._createdByUser;
  }

  public set createdByUser(creator: string) {
    this._createdByUser = creator;
  }

}

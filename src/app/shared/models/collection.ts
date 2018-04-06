export class Collection {

  private _id: string;
  private _name: string;
  private _createdByUser: string;

  get id() {
    return this._id;
  }

  set id(newId: string) {
    this._id = newId;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get createdByUser() {
    return this._createdByUser;
  }

  set createdByUser(creator: string) {
    this._createdByUser = creator;
  }
}

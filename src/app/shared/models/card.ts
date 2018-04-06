export class Card {

  private _id: number;
  private _title: string;
  private _definition: string;
  private _transliteration: string;
  private _collectionId: string;

  get id() {
    return this._id;
  }

  set id(newId: number) {
    this._id = newId;
  }

  get title() {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  get definition() {
    return this._definition;
  }

  set definition(newDefinition: string) {
    this._definition = newDefinition;
  }

  get transliteration() {
    return this._transliteration;
  }

  set transliteration(newTransliteration: string) {
    this._transliteration = newTransliteration;
  }

  get collectionId() {
    return this._collectionId;
  }

  set collectionId(newCollectionId: string) {
    this._collectionId = newCollectionId;
  }
}

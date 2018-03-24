export class Card {

  private _id: number;
  private _title: string;
  private _definition: string;
  private _transliteration: string;
  private _collectionId: string;

  public get id() {
    return this._id;
  }

  public set id(newId: number) {
    this._id = newId;
  }

  public get title() {
    return this._title;
  }

  public set title(newTitle: string) {
    this._title = newTitle;
  }

  public get definition() {
    return this._definition;
  }

  public set definition(newDefinition: string) {
    this._definition = newDefinition;
  }

  public get transliteration() {
    return this._transliteration;
  }

  public set transliteration(newTransliteration: string) {
    this._transliteration = newTransliteration;
  }

  public get collectionId() {
    return this._collectionId;
  }

  public set collectionId(newCollectionId: string) {
    this._collectionId = newCollectionId;
  }
}

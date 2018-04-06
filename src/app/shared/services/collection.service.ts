import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../models/collection';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user';

@Injectable()
export class CollectionService {

  private server = environment.serverUrl;
  private _collection: Collection;
  private _collections: Collection[];

  public collectionChanged: Subject<Collection> = new Subject<Collection>();
  public collectionsChanged: Subject<Collection[]> = new Subject<Collection[]>();

  constructor(private Http: HttpClient,
              private authService: AuthService) { }

  get collection(): Collection {
    return this._collection;
  }

  set collection(collection: Collection) {
    this._collection = collection;
    this.collectionChanged.next(this._collection);
  }

  get collections(): Collection[] {
    return this._collections;
  }

  set collections(collections: Collection[]) {
    this._collections = collections;
    this.collectionsChanged.next(this._collections.slice());
  }

  updateCollections(collection: Collection) {
    this._collections.push(collection);
    this.collectionsChanged.next(this._collections.slice());
  }

  getCollections(user: User) {
    return this.Http.get<Collection[]>(this.server + 'collection/' + user.username, { headers: this.authService.headers });
  }

  createCollection(collection: Collection) {
    return this.Http.post<Collection>(this.server + 'collection', collection, { headers: this.authService.headers });
  }

  updateCollection(collection: Collection) {
    return this.Http.put<Collection>(this.server + 'collection/' + collection.id, collection, { headers: this.authService.headers });
  }

  deleteCollection(collection: Collection) {
    return this.Http.delete(this.server + 'collection/' + collection.id, { headers: this.authService.headers });
  }
}

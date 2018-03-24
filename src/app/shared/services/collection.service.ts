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
  private collection: Collection;
  private collections: Collection[];

  public collectionsChanged: Subject<Collection[]> = new Subject<Collection[]>();

  constructor(private Http: HttpClient,
              private authService: AuthService) {
  }

  getCollection() {
    return this.collection;
  }

  setCollection(collection: Collection) {
    this.collection = collection;
  }

  setCollections(collection: Collection[]) {
    this.collections = collection;
    this.collectionsChanged.next(this.collections.slice());
  }

  updateCollections(collection: Collection) {
    this.collections.push(collection);
    this.collectionsChanged.next(this.collections.slice());
  }

  getCollections(user: User) {
    return this.Http.get<Collection[]>(this.server + 'collection/' + user.username, { headers: this.authService.getHeaders() });
  }

  createCollection(collection: Collection) {
    return this.Http.post<Collection>(this.server + 'collection', collection, { headers: this.authService.getHeaders() });
  }

  updateCollection(collection: Collection) {
    return this.Http.put<Collection>(this.server + 'collection/' + collection.id, collection, { headers: this.authService.getHeaders() });
  }

  deleteCollection(collection: Collection) {
    return this.Http.delete(this.server + 'collection/' + collection.id, { headers: this.authService.getHeaders() });
  }
}

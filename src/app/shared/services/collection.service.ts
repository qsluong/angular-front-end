import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../models/collection';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CollectionService {
  private server = environment.serverUrl;
  private collection: Collection;
  private collections: Collection[];

  public collectionChanged: Subject<Collection[]> = new Subject<Collection[]>();

  constructor(private authService: AuthService,
              private Http: HttpClient) {
  }

  getCollection() {
    return this.collection;
  }

  setCollection(collection: Collection) {
    this.collection = collection;
  }

  getCollections() {
    return this.Http.get<Collection[]>(this.server + 'collection', { headers: this.authService.getHeaders() });
  }

  setCollections(collection: Collection[]) {
    this.collections = collection;
  }

  updateCollections(collection: Collection) {
    this.collections.push(collection);
    this.collectionChanged.next(this.collections.slice());
  }

  createCollection(collection: Collection) {
    return this.Http.post<Collection>(this.server + 'collection', collection, { headers: this.authService.getHeaders() });
  }
}

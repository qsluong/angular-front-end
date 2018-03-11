import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/services/collection.service';
import { Collection } from '../shared/models/collection';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections: Collection[];

  constructor(private userService: UserService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.getCollections(this.userService.getCurrentUser())
      .subscribe(response => {
        this.collections = response;
        this.collectionService.setCollections(response);
      });
    this.collectionService.collectionsChanged
      .subscribe(changed => {
        this.collections = changed;
      });
  }

}

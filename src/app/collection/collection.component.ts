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

  constructor(private userService: UserService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.getCollections(this.userService.currentUser)
      .subscribe(response => {
        this.collectionService.collections = response;
      });
  }

}

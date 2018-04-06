import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../shared/models/collection';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  @Input() collection: Collection;
  collections: Collection[];

  constructor(private router: Router,
              private userService: UserService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.collectionsChanged
      .subscribe(changes => {
        this.collections = changes;
      });
    this.collections = this.collectionService.collections;
  }

  onEdit(collection: Collection) {
    this.collectionService.collection = collection;
    this.router.navigate(['/collection', 'edit']);
  }

}

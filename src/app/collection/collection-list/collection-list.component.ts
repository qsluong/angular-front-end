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

  constructor(private router: Router,
              private userService: UserService,
              private collectionService: CollectionService) { }

  ngOnInit() {
  }

  onClick(collection: Collection) {
    console.log(collection);
    this.collectionService.setCollection(collection);
    this.router.navigate(['/collection', collection.name]);
  }

  onEdit(collection: Collection) {
    this.collectionService.setCollection(collection);
    this.router.navigate(['/collection', 'edit']);
  }

  onDelete(collection: Collection) {
    this.collectionService.deleteCollection(collection)
      .subscribe(response => {
        console.log(response);
        this.collectionService.getCollections(this.userService.getCurrentUser())
          .subscribe(newResponse => {
            this.collectionService.setCollections(newResponse);
          });
      });
  }

}

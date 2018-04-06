import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';
import { Collection } from '../../shared/models/collection';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.css']
})
export class CollectionEditComponent implements OnInit {
  editCollectionForm: FormGroup;
  editedCollection: Collection;

  constructor(private userService: UserService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.editCollectionForm = new FormGroup({
      name: new FormControl(this.collectionService.collection.name)
    });
  }

  onEdit() {
    console.log('Iets wordt gewijzigd');
    this.editedCollection = new Collection();
    this.editedCollection.id = this.collectionService.collection.id;
    this.editedCollection.name = this.editCollectionForm.value.name;
    this.editedCollection.createdByUser = this.userService.currentUser.username;

    console.log(this.editedCollection);
    this.collectionService.updateCollection(this.editedCollection)
      .subscribe(update => {
        this.collectionService.getCollections(this.userService.currentUser)
          .subscribe(updated => {
            this.collectionService.collections = updated;
          });
      });
  }

}

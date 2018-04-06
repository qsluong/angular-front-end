import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../shared/services/collection.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Collection } from '../../shared/models/collection';

@Component({
  selector: 'app-collection-add',
  templateUrl: './collection-add.component.html',
  styleUrls: ['./collection-add.component.css']
})
export class CollectionAddComponent implements OnInit {
  addCollectionForm: FormGroup;
  addedCollection: Collection;
  addResponse;

  constructor(private userService: UserService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.addCollectionForm = new FormGroup({
      name: new FormControl(null)
    });
  }

  onAdd() {
    this.addResponse = {
      name: this.addCollectionForm.value.name,
      createdByUser: this.userService.currentUser.username
    };
    this.collectionService.createCollection(this.addResponse)
      .subscribe(response => {
        console.log(response);
        this.addResponse = response;
        this.addedCollection = new Collection();
        this.addedCollection.id = this.addResponse._id;
        this.addedCollection.name = this.addResponse.name;
        this.addedCollection.createdByUser = this.addResponse.createdByUser;
        this.collectionService.updateCollections(this.addedCollection);
        this.addCollectionForm.reset();
      });
  }

}

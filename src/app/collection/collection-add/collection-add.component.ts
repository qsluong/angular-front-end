import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../shared/services/collection.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Collection } from '../../shared/models/collection';
import { VALID } from '@angular/forms/src/model';

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
    // Validators.required <-- is a reference to the method
    this.addCollectionForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  onAdd() {
    if (this.addCollectionForm.status === 'VALID') {
      console.log(this.addCollectionForm);
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
    } else {
      console.log('NO YEAH');
      console.log(this.addCollectionForm);
    }
  }

}

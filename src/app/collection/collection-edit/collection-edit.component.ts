import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';
import { Collection } from '../../shared/models/collection';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.css']
})
export class CollectionEditComponent implements OnInit {
  editCollectionForm: FormGroup;
  editedCollection;

  constructor(private router: Router,
              private collectionService: CollectionService,
              private userService: UserService) { }

  ngOnInit() {
    this.editCollectionForm = new FormGroup({
      'name': new FormControl(this.collectionService.getCollection().name)
    });
  }

  onEdit() {
    this.editedCollection = {
      _id: this.collectionService.getCollection()._id,
      name: this.editCollectionForm.value.name,
      createdByUser: this.userService.getCurrentUser().username
    };
    this.collectionService.updateCollection(this.editedCollection)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/collection']);
      });
  }

  onCancel() {
    this.router.navigate(['/collection']);
  }

}

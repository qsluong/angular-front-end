import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../shared/services/collection.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-collection-add',
  templateUrl: './collection-add.component.html',
  styleUrls: ['./collection-add.component.css']
})
export class CollectionAddComponent implements OnInit {
  addCollectionForm: FormGroup;
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
      createdByUser: this.userService.getCurrentUser().username
    };
    this.collectionService.createCollection(this.addResponse)
      .subscribe(response => {
        console.log(response);
        this.collectionService.updateCollections(response);
        this.addCollectionForm.reset();
      });
  }

}

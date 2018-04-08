import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../shared/models/collection';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../../shared/services/collection.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css']
})
export class CollectionItemComponent implements OnInit {
  @Input() collection: Collection;
  editMode = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private collectionService: CollectionService) { }

  ngOnInit() { }

  onClick(collection: Collection) {
    console.log('Redirecting to ' + '"' + collection.name + '"');
    console.log(collection);
    this.collectionService.collection = collection;
    this.router.navigate([collection.name], { relativeTo: this.route });
  }

  onEdit(collection: Collection) {
    console.log('Edit ' + '"' + collection.name + '"');
    // this.collectionService.collection = collection;
    this.editMode = true;
    // this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete(collection: Collection) {
    this.collectionService.deleteCollection(collection)
      .subscribe(response => {
        console.log(response);
        this.collectionService.getCollections(this.userService.currentUser)
          .subscribe(newResponse => {
            this.collectionService.collections = newResponse;
          });
      });
  }

}

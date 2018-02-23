import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../shared/models/collection';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  @Input() collection: Collection;

  constructor(private router: Router,
              private collectionService: CollectionService) { }

  ngOnInit() {
  }

  onClick(collection: Collection) {
    this.collectionService.setCollection(collection);
    this.router.navigate(['/collection', collection.name]);
  }

}

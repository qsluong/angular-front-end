import { Component, OnInit } from '@angular/core';
import { Collection } from '../../shared/models/collection';
import { CollectionService } from '../../shared/services/collection.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  collection: Collection;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this.collectionService.getCollection();
  }

}

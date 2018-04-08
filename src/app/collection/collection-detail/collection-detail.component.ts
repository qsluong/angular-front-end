import { Component, OnInit } from '@angular/core';
import { Collection } from '../../shared/models/collection';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  collection: Collection;

  constructor(private router: Router,
              private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.collectionChanged
      .subscribe(collection => {
        this.collection = collection;
      });
    this.collection = this.collectionService.collection;
  }

  onBack() {
    this.router.navigate(['/collection']);
  }

  onAdd() {
    console.log('Add: ' + this.collection.name);
    this.router.navigate(['/collection', this.collectionService.collection.name, 'add'])
  }

}

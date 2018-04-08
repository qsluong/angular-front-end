import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/services/card.service';
import { CollectionService } from '../shared/services/collection.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.cardService.getCards(this.collectionService.collection.id)
      .subscribe(cards => {
        this.cardService.cards = cards;
      });
    this.collectionService.collectionChanged
      .subscribe(collection => {
        this.cardService.getCards(collection.id)
          .subscribe(response => {
            this.cardService.cards = response;
          });
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {Card} from '../shared/models/card';
import { CardService } from '../shared/services/card.service';
import { CollectionService } from '../shared/services/collection.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.cardService.getCards(this.collectionService.getCollection()._id)
      .subscribe(response => {
        console.log(response);
        this.cards = response;
        this.cardService.setCards(response);
      });
    this.cardService.cardsChanged
      .subscribe(response => {
        console.log(response);
        this.cards = response;
      });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../shared/models/card';
import { Router } from '@angular/router';
import { CardService } from '../../shared/services/card.service';
import { CollectionService } from '../../shared/services/collection.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;

  constructor(private router: Router,
              private collectionService: CollectionService,
              private cardService: CardService) { }

  ngOnInit() {
  }

  onEdit(card: Card) {
    this.cardService.card = card;
    this.router.navigate(['collection', this.collectionService.collection.name, this.cardService.card.title, 'edit']);
  }

  onDelete(card: Card) {
    console.log(card);
    this.card = card;
    this.cardService.deleteCard(this.card)
      .subscribe(changes => {
        console.log(changes);
        this.cardService.getCards(this.collectionService.collection.id)
          .subscribe(changedCol => {
            this.cardService.cards = changedCol;
          });
      });
  }

}

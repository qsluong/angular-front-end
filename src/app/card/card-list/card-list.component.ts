import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../shared/models/card';
import { CardService } from '../../shared/services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../../shared/services/collection.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  card: Card;
  cards: Card[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cardService: CardService) { }

  ngOnInit() {
    // Update cards after creating, updating or deleting
    this.cardService.cardsChanged
      .subscribe(changes => {
        this.cards = changes;
      });
    this.cards = this.cardService.cards;
  }

}

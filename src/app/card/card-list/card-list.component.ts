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
  @Input() card: Card;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() { }

  onEdit(card: Card) {
    this.cardService.card = card;
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete(card: Card) {
    this.cardService.deleteCard(card)
      .subscribe(response => {
        console.log(response);
        this.cardService.getCards(this.collectionService.collection.id)
          .subscribe(newResponse => {
            this.cardService.cards =  newResponse;
          });
      });
  }

}

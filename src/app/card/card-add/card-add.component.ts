import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from '../../shared/services/card.service';
import { Card } from '../../shared/models/card';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  addCardForm: FormGroup;
  card: Card;

  constructor(private router: Router,
              private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.addCardForm = new FormGroup({
      title: new FormControl(null),
      definition: new FormControl(null),
      transliteration: new FormControl(null)
    });
  }

  onAdd() {
    console.log(this.card);
    this.cardService.createCard(this.card)
      .subscribe(response => {
        console.log(response);
        this.cardService.updateCards(response);
        this.addCardForm.reset();
      });
  }

}

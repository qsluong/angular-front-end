import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from '../../shared/services/card.service';
import { Card } from '../../shared/models/card';
import { CollectionService } from '../../shared/services/collection.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  addCardForm: FormGroup;
  card;

  constructor(private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.addCardForm = new FormGroup({
      title: new FormControl(null),
      definition: new FormControl(null),
      transliteration: new FormControl(null)
    });
  }

  onAdd() {
    this.card = new Card(null,
      this.addCardForm.value.title,
      this.addCardForm.value.definition,
      this.addCardForm.value.transliteration,
      this.collectionService.getCollection()._id);
    this.cardService.createCard(this.card)
      .subscribe(response => {
        console.log(response);
        this.cardService.updateCards(response);
        this.addCardForm.reset();
      });
  }

}

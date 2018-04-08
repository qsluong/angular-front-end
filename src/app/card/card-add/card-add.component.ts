import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      title: new FormControl(null, [Validators.required]),
      definition: new FormControl(null, [Validators.required]),
      transliteration: new FormControl(null, [Validators.required])
    });
  }

  onAdd() {
    if (this.addCardForm.valid) {
      this.card = new Card();
      this.card.id = null;
      this.card.title = this.addCardForm.value.title;
      this.card.definition = this.addCardForm.value.definition;
      this.card.transliteration = this.addCardForm.value.transliteration;
      this.card.collectionId = this.collectionService.collection.id;
      console.log(this.card);
      this.cardService.createCard(this.card)
        .subscribe(response => {
          console.log(response);
          this.cardService.updateCards(response);
          this.addCardForm.reset();
          this.router.navigate(['collection', this.collectionService.collection.name ]);
        });
    }
  }

  onCancel() {
    this.router.navigate(['collection', this.collectionService.collection.name ]);
  }

}

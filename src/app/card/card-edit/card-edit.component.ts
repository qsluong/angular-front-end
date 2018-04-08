import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from '../../shared/services/card.service';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';
import { Card } from '../../shared/models/card';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  editCardForm: FormGroup;
  card: Card;

  constructor(private router: Router,
              private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.editCardForm = new FormGroup({
      title: new FormControl(this.cardService.card.title),
      definition: new FormControl(this.cardService.card.definition),
      transliteration: new FormControl(this.cardService.card.transliteration)
    });
  }

  onEdit() {
    this.card = this.cardService.card;

    this.card.title = this.editCardForm.value.title;
    this.card.definition = this.editCardForm.value.definition;
    this.card.transliteration = this.editCardForm.value.transliteration;

    this.cardService.updateCard(this.card)
      .subscribe(
        response => console.log(response),
        error => console.log(error),
        () => this.router.navigate(['/collection/' + this.collectionService.collection.name])
      );
  }

  onCancel() {
    this.router.navigate(['/collection/' + this.collectionService.collection.name]);
  }

}

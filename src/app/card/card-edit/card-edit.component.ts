import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from '../../shared/services/card.service';
import { CollectionService } from '../../shared/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  editCardForm: FormGroup;
  editedCard;

  constructor(private router: Router,
              private cardService: CardService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.editCardForm = new FormGroup({
      title: new FormControl(this.cardService.getCard().title),
      definition: new FormControl(this.cardService.getCard().definition),
      transliteration: new FormControl(this.cardService.getCard().transliteration)
    });
  }

  onEdit() {
    this.editedCard = {
      _id: this.cardService.getCard()._id,
      title: this.editCardForm.value.title,
      definition: this.editCardForm.value.definition,
      transliteration: this.editCardForm.value.transliteration,
      collectionId: this.collectionService.getCollection()._id
    };
    this.cardService.updateCard(this.editedCard)
      .subscribe(
        response => console.log(response),
        error => console.log(error),
        () => this.router.navigate(['/collection/' + this.collectionService.getCollection().name])
      );
  }

  onCancel() {
    this.router.navigate(['/collection/' + this.collectionService.getCollection().name]);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CardService {
  private server = environment.serverUrl;
  private _card: Card;
  private _cards: Card[] = [];

  public cardsChanged: Subject<Card[]> = new Subject<Card[]>();

  constructor(private Http: HttpClient,
              private authService: AuthService) {}

  get card(): Card {
    return this._card;
  }

  set card(card: Card) {
    this._card = card;
  }

  get cards(): Card[] {
    return this._cards;
  }

  set cards(cards: Card[]) {
    this._cards = cards;
    this.cardsChanged.next(this._cards.slice());
  }

  setCards(cards: Card[]) {
    this._cards = cards;
    this.cardsChanged.next(this._cards.slice());
  }

  updateCards(card: Card) {
    this.cards.push(card);
    this.cardsChanged.next(this.cards.slice());
  }

  getCards(id: string) {
    return this.Http.get<Card[]>(this.server + 'card/' + id, { headers: this.authService.headers });
  }

  createCard(card: Card) {
    return this.Http.post<Card>(this.server + 'card', card, { headers: this.authService.headers });
  }

  updateCard(card) {
    return this.Http.put<Card>(this.server + 'card', card, { headers: this.authService.headers });
  }

  deleteCard(card) {
    return this.Http.delete(this.server + 'card/' + card._id, { headers: this.authService.headers });
  }
}

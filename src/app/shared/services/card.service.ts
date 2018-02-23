import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CardService {
  private server = environment.serverUrl;
  private cards: Card[] = [];

  public cardsChanged: Subject<Card[]> = new Subject<Card[]>();

  constructor(private Http: HttpClient,
              private authService: AuthService) {}

  getCards(id: number) {
    return this.Http.get<Card[]>(this.server + 'card/' + id, { headers: this.authService.getHeaders() });
  }

  createCard(card: Card) {
    return this.Http.post<Card>(this.server + 'card', card, { headers: this.authService.getHeaders() });
  }

  setCards(cards: Card[]) {
    this.cards = cards;
    this.cardsChanged.next(this.cards.slice());
  }

  updateCards(card: Card) {
    this.cards.push(card);
    this.cardsChanged.next(this.cards.slice());
  }
}

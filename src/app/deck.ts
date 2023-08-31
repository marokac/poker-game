import { Suit, Rank } from "./enums";
import { Card } from "./models";

export class Deck {
    cards: Card[] = [];
    constructor() {
        for (const suit of Object.values(Suit)) {
            for (const rank of Object.values(Rank)) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }
  
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
  }
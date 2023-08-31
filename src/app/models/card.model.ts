import { Rank, Suit } from "../enums";

export class Card {
    rank: Rank;
    suit: Suit;
  
    constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }
  
    toString(): string {
        return `${this.rank} ${this.suit}`;
    }
  }
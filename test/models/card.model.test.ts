
import { Rank, Suit } from "../../src/app/enums";
import { Card } from "../../src/app/models";

describe('(card.model.ts): Test Card model', () => {
    const card: Card = new Card(Rank.Ace,Suit.Clubs);

    test('It should return card.rank as A', () => {
        expect(card.rank).toBe('A'); 
    })

    test('It should return card.suit as ♣️', () => {
        expect(card.suit).toBe('♣️'); 
    })

    test('It should return A ♣️ when card.toString method is executed', () => {
        expect(card.toString()).toBe('A ♣️'); 
    })

})


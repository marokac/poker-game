import { Deck } from "../src/app/deck";

describe('(deck.ts): Test deck class', () => {
    const deck: Deck = new Deck();

    test('Deck.cards should not be empty', () => {
        expect(deck.cards.length).toBeGreaterThan(0); 
    })

    test('Deck.shuffle method should exist', () => {
        expect(deck.shuffle).toBeDefined(); 
    })

})
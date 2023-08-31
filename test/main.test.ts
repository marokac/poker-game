import { Rank, Suit } from "../src/app/enums";
import { Game } from "../src/app/main";
import { Card } from "../src/app/models";

describe('(deck.ts): Test deck class', () => {
    const game: Game = new Game();

    test('game.dealHand method should exist', () => {
        expect(game.dealHand).toBeDefined(); 
    })

    test('expect game.playerHand length to be 5', () => {
        expect(game.playerHand.length).toBe(5); 
    })

    test('game.play method should exist', () => {
        expect(game.play).toBeDefined(); 
    })

    test('game.evaluateHand method should exist', () => {
        expect(game.evaluateHand).toBeDefined(); 
    })

    test('game.evaluateHand must return One Pair on 10 🤍, A ♣️, 10 ♣️, 6 ♦️, 2 ♦️', () => {

       const hand =  [
            new Card(Rank.Ten,Suit.Hearts),
            new Card(Rank.Ace,Suit.Clubs),
            new Card(Rank.Ten,Suit.Clubs),
            new Card(Rank.Six,Suit.Diamonds),
            new Card(Rank.Two,Suit.Diamonds),
          ]
        expect(game.evaluateHand(hand)).toBe('One Pair'); 
    })

    test('game.evaluateHand must return Two Pair on 6 ♦️, J ♦️, J ♣️, 2 🤍, 2 ♣️', () => {

        const hand =  [
             new Card(Rank.Six,Suit.Diamonds),
             new Card(Rank.Jack,Suit.Diamonds),
             new Card(Rank.Jack,Suit.Clubs),
             new Card(Rank.Two,Suit.Hearts),
             new Card(Rank.Two,Suit.Clubs),
           ]
         expect(game.evaluateHand(hand)).toBe('Two Pair'); 
     })

     test('game.evaluateHand must return Straight on 8 🤍, J ♦️, 10 🤍, 7 ♣️, 9 ♣️', () => {

        const hand =  [
             new Card(Rank.Eight,Suit.Hearts),
             new Card(Rank.Jack,Suit.Diamonds),
             new Card(Rank.Ten,Suit.Hearts),
             new Card(Rank.Seven,Suit.Clubs),
             new Card(Rank.Nine,Suit.Clubs),
           ]
         expect(game.evaluateHand(hand)).toBe('Straight'); 
     })

     test('game.evaluateHand must return Straight Flush on Q♥ J♥ 10♥ 9♥ 8♥', () => {

        const hand =  [
             new Card(Rank.Queen,Suit.Hearts),
             new Card(Rank.Jack,Suit.Hearts),
             new Card(Rank.Ten,Suit.Hearts),
             new Card(Rank.Nine,Suit.Hearts),
             new Card(Rank.Eight,Suit.Hearts),
           ]
         expect(game.evaluateHand(hand)).toBe('Straight Flush'); 
     })

     test('game.evaluateHand must return Four of a Kind on 9♣ 9♠ 9♦️ 9♥ J♥', () => {

        const hand =  [
             new Card(Rank.Nine,Suit.Clubs),
             new Card(Rank.Nine,Suit.Spades),
             new Card(Rank.Nine,Suit.Diamonds),
             new Card(Rank.Nine,Suit.Hearts),
             new Card(Rank.Jack,Suit.Hearts),
           ]
         expect(game.evaluateHand(hand)).toBe('Four of a Kind'); 
     })

     test('game.evaluateHand must return Full House on 3♣ 3♠ 3♦️ 6♣ 6♥', () => {

        const hand =  [
             new Card(Rank.Three,Suit.Clubs),
             new Card(Rank.Three,Suit.Spades),
             new Card(Rank.Three,Suit.Diamonds),
             new Card(Rank.Six,Suit.Clubs),
             new Card(Rank.Six,Suit.Hearts),
           ]
         expect(game.evaluateHand(hand)).toBe('Full House'); 
     })

     test('game.evaluateHand must return Flush on K♣ 10♣ 7♣ 6♣ 4♣', () => {

        const hand =  [
             new Card(Rank.King,Suit.Clubs),
             new Card(Rank.Ten,Suit.Clubs),
             new Card(Rank.Seven,Suit.Clubs),
             new Card(Rank.Six,Suit.Clubs),
             new Card(Rank.Four,Suit.Clubs),
           ]
         expect(game.evaluateHand(hand)).toBe('Flush'); 
     })

     test('game.evaluateHand must return Three of a Kind on 2♦️ 2♠ 2♣ K♠ 6♥', () => {

        const hand =  [
             new Card(Rank.Two,Suit.Diamonds),
             new Card(Rank.Two,Suit.Spades),
             new Card(Rank.Two,Suit.Clubs),
             new Card(Rank.King,Suit.Spades),
             new Card(Rank.Six,Suit.Hearts),
           ]
         expect(game.evaluateHand(hand)).toBe('Three of a Kind'); 
     })

     test('game.evaluateHand must return High Cards on K♥ J♥ 8♣ 7♦ 4♠', () => {

        const hand =  [
             new Card(Rank.King,Suit.Hearts),
             new Card(Rank.Jack,Suit.Hearts),
             new Card(Rank.Eight,Suit.Clubs),
             new Card(Rank.Seven,Suit.Diamonds),
             new Card(Rank.Four,Suit.Spades),
           ]
         expect(game.evaluateHand(hand)).toBe('High Cards'); 
     })

})
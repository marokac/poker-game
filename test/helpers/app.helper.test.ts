
import { Rank, Suit } from "../../src/app/enums";
import {
    checkForFlush,
    checkForFourOfAKind,
    checkForFullHouse,
    checkForOnePair,
    checkForStraight,
    checkForStraightFlush,
    checkForThreeOfAKind,
    checkForTwoPair
} from "../../src/app/helpers";


describe('(app.helper): Test helper methods to evaluate hand', () => {

    test('It should return true for  9 ♠️, 6 ♠️, K ♣️, K ♦️, J 🤍 (checkForOnePair) ', () => {

        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 0, [Rank.Three]: 0, [Rank.Four]: 0, [Rank.Five]: 0,
            [Rank.Six]: 1, [Rank.Seven]: 0, [Rank.Eight]: 1, [Rank.Nine]: 0,
            [Rank.Ten]: 0, [Rank.Jack]: 1, [Rank.Queen]: 0, [Rank.King]: 2, [Rank.Ace]: 0
        };

        expect(checkForOnePair(rankCount)).toBe(true);
    });

    test('It should return true for 4 ♦️, J ♦️, 4 🤍, 5 ♦️, J ♠️ (checkForTwoPair) ', () => {

        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 0, [Rank.Three]: 0, [Rank.Four]: 2, [Rank.Five]: 1,
            [Rank.Six]: 0, [Rank.Seven]: 0, [Rank.Eight]: 0, [Rank.Nine]: 0,
            [Rank.Ten]: 0, [Rank.Jack]: 2, [Rank.Queen]: 0, [Rank.King]: 0, [Rank.Ace]: 0
        };

        expect(checkForTwoPair(rankCount)).toBe(true);
    });

    test('It should return true for 8 🤍, J ♦️, 10 🤍, 7 ♣️, 9 ♣️ (checkForStraight) ', () => {

        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 0, [Rank.Three]: 0, [Rank.Four]: 0, [Rank.Five]: 0,
            [Rank.Six]: 0, [Rank.Seven]: 1, [Rank.Eight]: 1, [Rank.Nine]: 1,
            [Rank.Ten]: 1, [Rank.Jack]: 1, [Rank.Queen]: 0, [Rank.King]: 0, [Rank.Ace]: 0
        };

        expect(checkForStraight(rankCount)).toBe(true);
    });

    test('It should return true for Q♥ J♥ 10♥ 9♥ 8♥ (checkForStraightFlush) ', () => {

        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 0, [Rank.Three]: 0, [Rank.Four]: 0, [Rank.Five]: 0,
            [Rank.Six]: 0, [Rank.Seven]: 1, [Rank.Eight]: 1, [Rank.Nine]: 1,
            [Rank.Ten]: 1, [Rank.Jack]: 1, [Rank.Queen]: 0, [Rank.King]: 0, [Rank.Ace]: 0
        };

        const suitCount: { [key in Suit]: number } = {
            [Suit.Hearts]: 5, [Suit.Diamonds]: 0, [Suit.Clubs]: 0, [Suit.Spades]: 0
        };

        expect(checkForStraightFlush(rankCount, suitCount)).toBe(true);
    });

    test('It should return true for 9♣ 9♠ 9♦️ 9♥ J♥ (checkForFourOfAKind) ', () => {

        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 0, [Rank.Three]: 0, [Rank.Four]: 0, [Rank.Five]: 0,
            [Rank.Six]: 0, [Rank.Seven]: 0, [Rank.Eight]: 0, [Rank.Nine]: 4,
            [Rank.Ten]: 0, [Rank.Jack]: 1, [Rank.Queen]: 0, [Rank.King]: 0, [Rank.Ace]: 0
        };

        expect(checkForFourOfAKind(rankCount)).toBe(true);
    });

    test('It should return true for 3♣ 3♠ 3♦️ 6♣ 6♥  (checkForFullHouse) ', () => {

        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 0, [Rank.Three]: 3, [Rank.Four]: 0, [Rank.Five]: 0,
            [Rank.Six]: 2, [Rank.Seven]: 0, [Rank.Eight]: 0, [Rank.Nine]: 0,
            [Rank.Ten]: 0, [Rank.Jack]: 0, [Rank.Queen]: 0, [Rank.King]: 0, [Rank.Ace]: 0
        };

        expect(checkForFullHouse(rankCount)).toBe(true);
    });

    test('It should return true for K♣ 10♣ 7♣ 6♣ 4♣ (checkForFlush) ', () => {


        const suitCount: { [key in Suit]: number } = {
            [Suit.Hearts]: 0, [Suit.Diamonds]: 0, [Suit.Clubs]: 5, [Suit.Spades]: 0
        };

        expect(checkForFlush(suitCount)).toBe(true);
    });

    test('It should return true for 2♦️ 2♠ 2♣ K♠ 6♥ (checkForThreeOfAKind) ', () => {

        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 3, [Rank.Three]: 0, [Rank.Four]: 0, [Rank.Five]: 0,
            [Rank.Six]: 1, [Rank.Seven]: 0, [Rank.Eight]: 0, [Rank.Nine]: 0,
            [Rank.Ten]: 0, [Rank.Jack]: 0, [Rank.Queen]: 0, [Rank.King]: 1, [Rank.Ace]: 0
        };

        expect(checkForThreeOfAKind(rankCount)).toBe(true);
    });
})






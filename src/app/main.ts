import { Rank, Suit } from "./enums";
import { Card } from "./models";
import { Deck } from "./deck"
import {
    checkForStraight,
    checkForFlush,
    checkForStraightFlush,
    checkForFourOfAKind,
    checkForFullHouse,
    checkForThreeOfAKind,
    checkForTwoPair,
    checkForOnePair
} from "./helpers";


export class Game {
    deck: Deck;
    playerHand: Card[] = [];

    constructor() {
        this.deck = new Deck();
        this.deck.shuffle();
        this.playerHand = this.dealHand();
    }

    dealHand(): Card[] {
        return this.deck.cards.splice(0, 5);
    }


    evaluateHand(hand: Card[]): string {
        const rankCount: { [key in Rank]: number } = {
            [Rank.Two]: 0, [Rank.Three]: 0, [Rank.Four]: 0, [Rank.Five]: 0,
            [Rank.Six]: 0, [Rank.Seven]: 0, [Rank.Eight]: 0, [Rank.Nine]: 0,
            [Rank.Ten]: 0, [Rank.Jack]: 0, [Rank.Queen]: 0, [Rank.King]: 0, [Rank.Ace]: 0
        };

        const suitCount: { [key in Suit]: number } = {
            [Suit.Hearts]: 0, [Suit.Diamonds]: 0, [Suit.Clubs]: 0, [Suit.Spades]: 0
        };

        for (const card of hand) {
            rankCount[card.rank]++;
            suitCount[card.suit]++;
        }

        return this.getHandStrength(rankCount, suitCount);


    }
  
    private getHandStrength(rankCount: { [key in Rank]: number }, suitCount: { [key in Suit]: number }): string {
        if (checkForStraightFlush(rankCount, suitCount)) {
            return 'Straight Flush'
        }
        if (checkForFourOfAKind(rankCount)) {
            return 'Four of a Kind'
        }
        if (checkForFullHouse(rankCount)) {
            return 'Full House'
        }
        if (checkForFlush(suitCount)) {
            return 'Flush'
        }
        if (checkForStraight(rankCount)) {
            return 'Straight'
        }
        if (checkForThreeOfAKind(rankCount)) {
            return 'Three of a Kind'
        }
        if (checkForTwoPair(rankCount)) {
            return 'Two Pair'
        }
        if (checkForOnePair(rankCount)) {
            return 'One Pair'
        }
        return 'High Cards';
    }


    play() {
        let hand = '';
       
        for (const card of this.playerHand) {
            hand = `${hand}, ${card.toString()}`
        }
        console.log('\nshuffling .... shuffling ..... shuffling .....');
        
        console.log('\nYour hand:', hand.slice(1));

        const handRank = this.evaluateHand(this.playerHand);
        console.log('\nYou have:', handRank);
    }
}


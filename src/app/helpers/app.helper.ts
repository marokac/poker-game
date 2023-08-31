import { Rank, Suit } from "../enums";

export const checkForStraightFlush = (rankCount: { [key in Rank]: number }, suitCount: { [key in Suit]: number }): boolean =>{
    for (const suit of Object.values(Suit)) {
        let consecutiveRanks = 0;
        
        for (const rank of Object.values(Rank)) {
            if (suitCount[suit] >= 5 && rankCount[rank] > 0) {
                consecutiveRanks++;
                if (consecutiveRanks === 5) {
                    return true;
                }
            } else {
                consecutiveRanks = 0;
            }
        }
    }
    return false;
}

export const checkForFourOfAKind = (rankCount: { [key in Rank]: number }): boolean =>{
    for (const rank of Object.values(Rank)) {
        if (rankCount[rank] >= 4) {
            return true;
        }
    }
    return false;
}


export const  checkForFullHouse = (rankCount: { [key in Rank]: number }): boolean => {
    let hasThreeOfAKind = false;
    let hasPair = false;

    for (const rank of Object.values(Rank)) {
        if (rankCount[rank] === 3) {
            hasThreeOfAKind = true;
        } else if (rankCount[rank] === 2) {
            hasPair = true;
        }
    }

    return hasThreeOfAKind && hasPair;
}


export const checkForFlush = (suitCount: { [key in Suit]: number }): boolean =>{
    for (const suit of Object.values(Suit)) {
        if (suitCount[suit] >= 5) {
            return true;
        }
    }
    return false;
}

export const checkForStraight = (rankCount: { [key in Rank]: number }): boolean =>{
    let consecutiveRanks = 0;

    for (const rank of Object.values(Rank)) {
        if (rankCount[rank] > 0) {
            consecutiveRanks++;
            if (consecutiveRanks === 5) {
                return true;
            }
        } else {
            consecutiveRanks = 0;
        }
    }
    
    // Check for special case: A-2-3-4-5 straight
    if (rankCount[Rank.Ace] > 0 && rankCount[Rank.Two] > 0 && rankCount[Rank.Three] > 0 && rankCount[Rank.Four] > 0 && rankCount[Rank.Five] > 0) {
        return true;
    }

    return false;
}


export const checkForThreeOfAKind = (rankCount: { [key in Rank]: number }): boolean =>{
    for (const rank of Object.values(Rank)) {
        if (rankCount[rank] >= 3) {
            return true;
        }
    }
    return false;
}

export const checkForTwoPair = (rankCount: { [key in Rank]: number }): boolean =>{
    let pairCount = 0;

    for (const rank of Object.values(Rank)) {
        if (rankCount[rank] >= 2) {
            pairCount++;
        }
    }

    return pairCount >= 2;
}

export const checkForOnePair = (rankCount: { [key in Rank]: number }): boolean =>{
    for (const rank of Object.values(Rank)) {
        if (rankCount[rank] >= 2) {
            return true;
        }
    }
    return false;
}

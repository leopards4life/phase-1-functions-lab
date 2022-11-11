let distanceTravelledInBlocks;
let distanceInFeet;

function distanceFromHqInBlocks(startingBlock) {
    distanceTravelledInBlocks = startingBlock - 42;
    return Math.abs(distanceTravelledInBlocks);
}

function distanceFromHqInFeet(startingBlock) {
    distanceFromHqInBlocks(startingBlock)
    let distanceInFeet = distanceTravelledInBlocks * 264;
    return Math.abs(distanceInFeet);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    let distanceInFeet = (startingBlock - endingBlock) * 264;
    return Math.abs(distanceInFeet);
}

function calculatesFarePrice(startingBlock, endingBlock) {
    distanceTravelledInFeet(startingBlock, endingBlock)
    let farePrice = distanceInFeet * 2;
    if (distanceInFeet <= 400) {
        farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        farePrice = (distanceInFeet - 400) * .02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        farePrice = 25;
    } else if (distanceInFeet > 2500) {
        return "Cannot travel that far.";
    }
    return farePrice;
}
function distanceFromHqInBlocks(val) {
    return Math.abs(val-42);
}
function distanceFromHqInFeet(val) {
    return(264 * distanceFromHqInBlocks(val));
}
function distanceTravelledInFeet(num1, num2) {
    return (Math.abs(num1 - num2)*264);
}
function calculatesFarePrice(start, destination) {
    let totalDist = distanceTravelledInFeet(start, destination);
    if (totalDist <= 400) {
        return 0;
    }
    else if (totalDist > 400 && totalDist <= 2000) {
        return ((totalDist-400)*.02);
    }
    else if (totalDist > 2000 && totalDist <= 2500) {
        return 25;
    }
    else {
        return ('cannot travel that far');
    }
}

// Code your solution in this file!
function distanceFromHqInBlocks(travelingFrom) {
//returns the number of blocks given a value
const currentBlock = 42;
const blocksInTotal = Math.abs(currentBlock - travelingFrom);  
    return blocksInTotal; 
    
  }

  function distanceFromHqInFeet(travelingFeet) {
    const toFeet = distanceFromHqInBlocks(travelingFeet) * 264;
    return toFeet;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  }

  function distanceTravelledInFeet(start, destination) { 
    const totalDistance1 = Math.abs(start - destination); 
    const totalDistance2 = totalDistance1 * 264;
    return totalDistance2;
  
  }

  function calculatesFarePrice(start, destination) {
    const fare1 = distanceTravelledInFeet(start, destination);
    if(fare1 <= 400){
        return 0;
    } else if(fare1 > 400 && fare1 <= 2000){ 
        return .02*(fare1 - 400); 
    } else if(fare1 > 2000 && fare1 < 2500){
        return 25;
    } else { 
        return 'cannot travel that far';
    }
  }
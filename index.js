// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return [arrayOfDrivers[0], arrayOfDrivers[1]];
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
  return [arrayOfDrivers[arrayOfDrivers.length-2], arrayOfDrivers[arrayOfDrivers.length - 1]];
}

function selectingDrivers(arrayOfDrivers) {
  return [returnFirstTwoDrivers(arrayOfDrivers), returnLastTwoDrivers(arrayOfDrivers)];
}

function createFareMultiplier(multiplier) {
  return function(fare) {multiplier*fare;}
}

const fareDoubler = createFareMultiplier(2)();

const fareTripler = createFareMultiplier(3)();

function selectDifferentDrivers(arrayOfDrivers, firstTwoOrLast) {
  if (firstTwoOrLast === returnFirstTwoDrivers(arrayOfDrivers)) {
    return returnFirstTwoDrivers;
  } else {
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}

// We put as argument an array called "drivers" containing 4 names: cosnt drivers = [name1,name2,name3,name4] it is already declared st indexTest.js
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
} 
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}

 

    





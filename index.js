// Code your solution in this file!
// 1. returnFirstTwoDrivers() - Return the first two drivers from an array.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // 2. returnLastTwoDrivers() - Return the last two drivers from an array.
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // 3. Selecting drivers - An array that contains the two functions defined above.
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. createFareMultiplier() - A higher-order function that multiplies a fare by a given integer.
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // 5. fareDoubler() - A function that doubles the fare.
  const fareDoubler = createFareMultiplier(2);
  
  // 6. fareTripler() - A function that triples the fare.
  const fareTripler = createFareMultiplier(3);
  
  // 7. selectDifferentDrivers() - A function that selects either the first two or last two drivers based on the passed function.
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
  
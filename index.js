const returnFirstTwoDrivers = (array) =>{
    return array.slice(0,2);
}

const returnLastTwoDrivers = (array) =>{
    return array.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
    const fareMultiplier = (base)=>base*int;
    /*function fareMultiplier(base){
        return base*int;
    }*/
    return fareMultiplier;
}

const fareDoubler = (fare) => {
    const doubler = createFareMultiplier(2);
    return (doubler(fare));
}

const fareTripler = (fare) => {
    const tripler = createFareMultiplier(3);
    return (tripler(fare));
}

const selectDifferentDrivers = (driver, fn) =>{
    return fn(driver);
}
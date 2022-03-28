const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 
const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function () {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fareMultiplier){
    return function(value){
        return fareMultiplier * value
    }
}
const fareDoubler = function (createFareMultiplier){
    return createFareMultiplier * 2
}
const fareTripler = function (createFareMultiplier){
    return createFareMultiplier * 3
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers, returnLastTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
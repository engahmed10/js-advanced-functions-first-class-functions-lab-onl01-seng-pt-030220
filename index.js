// Code your solution in this file!

function returnFirstTwoDrivers(array){
  const newArr=[]
<<<<<<< HEAD
    newArr.push(array[0]);
    newArr.push(array[1]);
    return newArr

}

function returnLastTwoDrivers(array){
  const newArr=[]
    newArr.push(array[array.length-2]);
    newArr.push(array[array.length-1]);
    return newArr

}


let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]


 function createFareMultiplier(){

  return function multiplayer(number){  return number * number}

 }


 function  fareDoubler(fare){

   return fare * 2
 }

 function  fareTripler(fare){

   return fare * 3
 }

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers)

}
=======
    newArr.push(array[0]),
    newArr.push(array[1])),
    return newArr

}
>>>>>>> b67792c2aedc15fed9f5367c684d4e0d19f41f0f

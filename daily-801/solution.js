// To view the problem this solution belongs to and understand the solution better, read the README.

var assert = require('assert');

function FindSevenishNumber(n)
{
    //powerPosition here represents the positions of powers, therefore it starts at 1
    let powerPosition = 1; 

    //powerPositionList contains all the positions of the powers of 7 in order
    let powerPositionList = []; 
    let i = 0;

    //Until we find a powerPosition of 7 with a position that is higher than the number we're trying to find, we calculate the next power position 
    for(i = 0; i < n; i++)
    {
        //We calculate the next power position
        powerPosition += i; 
        //We add it to the list
        powerPositionList.push(powerPosition); 
        //If the powerPosition is higher or equal to the position of the number we're trying to calculate, we break off the loop.
        if(powerPosition >= n) break; 
    }

    //If the number is a power, we calculate it's result directly from it's index
    if(n == powerPosition) return (7**(i)); 

    //Else we need to find out the two powers that are used to make n

    let firstPower = powerPositionList.length - 2;
    let secondPower = (n-1) - powerPositionList[powerPositionList.length-2];

    return (7**firstPower) + (7**secondPower);
}       

assert(FindSevenishNumber(5) == 50);
assert(FindSevenishNumber(3) == 8);
assert(FindSevenishNumber(11) == 2401);

console.log("Test passed !");
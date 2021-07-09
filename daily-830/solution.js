// To view the problem this solution belongs to and understand the solution better, read the README.



// This is a function that sorts an object keys their value and returns an array containing those keys sorted
// This is code pulled from https://stackoverflow.com/questions/39828559/how-to-sort-dictionary-object-based-on-values-in-d3-js
function SortObjectKeys(data) {
    var result = Object.keys(data).sort(function(a, b) {
        return data[b] - data[a];
      })
      return result;
} 


function AssembleBiggestNumber(array)
{
    //Map used to convert numbers of the array to strings, and also map their values to their indexes
    let stringMap = {}; 
    let biggestNumber = "";
    let longestStringLength = 0;
    
    //We fill our map and also find out the longestStringLength of all of them
    for(let i = 0; i < array.length; i++)
    {
        stringMap[i] = array[i].toString();
        if(longestStringLength < stringMap[i].length) {longestStringLength = stringMap[i].length;}
    }

    //We use the trick demonstrated in README.md by appending the first digit over and over to numbers in the set until they are the same length as longestStringLength
    for([key, value] of Object.entries(stringMap))
    {
        while(stringMap[key].length < longestStringLength)
        {
            stringMap[key] = stringMap[key] + stringMap[key][0];
        }
    }

    //We sort the map by value and return the keys (which is the correct index order to create the biggest number)
    indexOrder = SortObjectKeys(stringMap);

    //We create the biggest number by appending all the values in array using the correct index order
    for(let i = 0; i < indexOrder.length; i++)
    {
        biggestNumber += array[indexOrder[i]];
    }

    return parseInt(biggestNumber,10);
}

var numberArray = [10,7,7611,41,414];
numberArray = numberArray.sort().reverse();
var biggestNumber = AssembleBiggestNumber(numberArray);

console.log(biggestNumber);

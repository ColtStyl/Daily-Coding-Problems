**Problem #801 [rated Easy] :**

**This problem was asked by Zillow.**

**Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7.
The first few sevenish numbers are 1, 7, 8, 49, and so on. 
Create an algorithm to find the nth sevenish number.**

////////////////////////////////////////////////////////

After some thinking, the series that defines all sevenish numbers is a pretty simple one.

Each time you calcule a power of 7, the following numbers are the addition of that power and all the previous ones in order from 0 to n-1. After that we calculate the next power and do the same process over.

We could calculate every number until we find the nth one but this would take quite a bit of time for higher numbers. One way to cut down on calculations is by finding out all the numbers in the series that are powers of 7. That way we can find out where the number we want to find lies in that list of powers (or maybe it is a power itself), and by knowing what number is the next higher power we can determine what addition of 2 powers creates the nth number, and we are therefore able to calculate it.

For example : Let's say we want to find out what the 5th sevenish number is, we calcute the numbers for powers : 1, 2, 4, 7...
We find out that our number is between 4 and 7 in the list of powers. That means to calculate the 5th sevenish number, we need to take the power represented by the 4th sevenish number (which is the 3rd number in the list so 7^2 since the first number represents the power of 0) and add to it the power represented by the first number (since 4+1 = 5, the number we're trying to find out !). That means the 5th sevenish number is (7^2) + (7^0) = 50.

Another example : We want to find out the number at position 9.
We find out it's between 7 and 11, which are power positions.
We know that position 7 is 4th on the list of power position, therefore it's number is 7^3 = 343.
We know that the 9th position is 2 off of position 7th, therefore we need to calculate the power represented by position 2, which is 7^1 = 7.
We add those 2 together 343+7 = 350. 350 is the sevenish number at position 9th.

This method can be applied to any n to calculate it.


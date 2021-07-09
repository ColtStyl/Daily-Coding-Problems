**Problem #830 [rated Medium] :**

**This problem was asked by Twitter.**

**Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. For example, given [10, 7, 76, 415], you should return 77641510.**

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

At first glance, I thought the solution would be simpler than it is. But the more you think about it, you find out it's a little more complex.

I started out thinking about a solution that involved comparing each digit of the numbers, but it got complicated quickly and I thought there has to be a simpler, more elegant solution to this problem. And in fact there is.

The most important thing to look for in all the values given is the first digit, because numbers with the same first digit are the numbers that you want to compare to each other to find out which one goes first, second, etc... (because obviously the first digits are sorted when appended, and it's not the difficult part)

For example : 445 and 4459
Both these number start with 4 so we know we have to find out which one goes first and which one goes second.
Between 4454459 and 4459445, it is quite obvious which one is the biggest. But algorithmically, finding out the correct order, especially on a large set of them, can be tricky to formulate.

There is however a simple trick we can use to find out. We find out the number with the most digits (in this case 4459), and we append the first digit over and over to other numbers in the set until they are the same length.

In our example : 445 becomes 4454 (we append 4 to it and it's length is now the same as 4459)

By doing this and sorting the set, we get the correct order that gives us the biggest number. By mapping these modified numbers to their original index, we can then find out the biggest number with the original numbers appended.

Example of the algorithm :

1.Original array : [10,7,76,415]
2.Dictionary with numbers converted to strings (keys are the indexes) : ["0":"10", "1":"7", "2":"76", "3":"415"]
3.Same dictionary with modified numbers (the longest length is 3) : ["0":"101", "1":"777", "2":"767", "3":"415"]
4.Now we sort it by value and get the indexes : [ '1', '2', '3', '0' ]
5.We map those indexes to the original values of the array : [7,76,415,10]
6.We assemble our biggest number : 77641510

Edit : 
After thinking about it a bit more, it seems there is an odd case that I haven't thought about.
If our array is : [10,7,7611,41,414]
The modified numbers are : [1011,7777,7611,4144,4144]
And so we have two 4144, but only one order is correct. When I ran my original algorithm with that array, it gave me a number that wasn't the biggest : 776,114,141,410 instead of 776,114,144,110.
The problem comes from the order of the original array and the fact that the modified numbers don't account for the fact that 414 should be placed before 41. The bigger number should always be before because it's always the order that gives the biggest number.
However a simple solution is found : Since when the bigger number is before the smaller number in the array, the final order is correct, we just have to sort the initial array and reverse it. Problem solved.

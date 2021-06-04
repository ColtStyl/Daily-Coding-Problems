**Problem #802 [rated Medium] :**

**This problem was asked by Triplebyte.**

**You are given n numbers as well as n probabilities that sum up to 1. Write a function to generate one of the numbers with its corresponding probability.**

**For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2], your function should return 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.**

**You can generate random numbers between 0 and 1 uniformly.**

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

While this problem is rated Medium, I thought the solution was pretty easy to find.

First thing we need to do is create an array with the summed up probabilities. We then generate a random float between 0 and 1 uniformly, this number will then be compared to the summed up probabilities, allowing us to pick a number based on the index of the probability that is higher than our number while the previous one is lower.

For example : We have numbers [1,8,9,12,20] and probabilities [0.1, 0.5, 0.1, 0.05, 0.25].

The summed up probabilities give us the following array : [0.1, 0.6, 0.7, 0.75, 1], obviously summing up to 1.

We generate our random float : 0.03
Since the generated number is between 0 and 0.1, we know that the index of the number chosen is 0 since 0.1 is our first element in the summed up probability array. The chosen number is therefore 1.

If we generate another number : 0.71
We know the number is between 0.7 and 0.75, therefore the index of 0.75 (which is 3) determines the number chosen : 12


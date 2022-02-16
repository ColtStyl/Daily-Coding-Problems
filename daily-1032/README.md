**Problem #1032 [rated Easy] :**

**This problem was asked by Google.**

**In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.**

**Here is an example:**

[1 2 3 4 8]
[5 1 2 3 4]
[4 5 1 2 3]
[7 4 5 1 2]

**Write a program to determine whether a given input is a Toeplitz matrix.**

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Well this is a very easy one, not much to think about to come up with a simple solution. Though there might be a faster one.

We start from the top left of the matrix, go from left to right, and compare the values diagonally.
Since the last row and last column don't have any bottom right diagonal, we can simply skip them.

If we detect that a value is not the same as it's diagonal, we don't need to continue and we return False, the matrix isn't a Toeplitz.

If the algorithm goes through every value and confirms that the diagonals contain the same value, we can confirm it's a Toeplitz and return True.

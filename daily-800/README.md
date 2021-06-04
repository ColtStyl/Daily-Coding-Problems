For some reason, I didn't receive a new problem today. So here's yesterday's problem.

**Problem #800 [rated Medium] :**

**This problem was asked by Fitbit.**

**Given a linked list, rearrange the node values such that they appear in alternating low -> high -> low -> high ... form. For example, given 1 -> 2 -> 3 -> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.**

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

First of all, we implement a very simple LinkedList class and Node class to work with.

Once we have a simple linked list filled with random values in each node, we begin to think about a solution to our problem.

We assume that there is no duplicates for the values in nodes. Pretty much no constraints are given as to how we can engineer our solution.
There are a number of ways we can solve the problem, from very simple solutions to more complex ones. We will use the fact that we can use auxilary space to simplify the problem !

We create a vector that reflects all the values of the linked list. We then sort that vector using common sorting algorithms. Since we are able to directly change the values of the nodes, we are simply gonna assign them one by one going through the list, alternating between the start of our vector and the end of it.

Here is an example : 
We have a linked list 3 -> 8 -> 4 -> 10 -> 25 -> 31. We need to rearrange it since 10 -> 25 breaks our rule.
We create a vector that reflects the values in the list [3,8,4,10,25,31]. We sort it [3,4,8,10,25,31].
And now we alternate between the start and the end of our vector until there are no values left to pick : 3 -> 31 -> 4 -> 25 -> 8 -> 10.
Our linked list is now alternating between low and high, starting with low.

After some research, a more efficient solution can be found here : https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/

The gist of it is : 
1) Find the middle point using tortoise and hare method.
2) Split the linked list into two halves using found middle point in step 1.
3) Reverse the second half.
4) Do alternate merge of first and second halves.


**Problem #821 [rated Easy] :**

**This problem was asked by Apple.**

**A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.**

**For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.**

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

This problem, as is stated, is fairly easy and fast to write.

All we need to do is check each value of the sorted array, see it it's equal to the index (in which case we return that value) and see if it's higher than the index (in which case we return false, since each element is distinct and the array is sorted, so we couldn't catch up). If nothing satisfies either of those conditions, it's false.



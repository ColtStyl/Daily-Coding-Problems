using System;

namespace daily_821
{
    class Program
    {

        static int ReturnFixedPoint(int[] array)
        {
            for(int i = 0; i < array.GetLength(0); i++)
            {
                if(array[i] == i) {return i;}
                if(array[i] > i) {return -1;}
            }
            return -1;
        }

        static void Main(string[] args)
        {
            int[] sortedArray = new int[] {-4, -5, 1, 3};
            
            // Since we're not working with a dynamically typed language (such as Python) and for the sake of simplicity, we will consider -1 to be False
            // A more complicated method to obtain a result variable that is either a bool or an int would be to declare it as an object and cast it on the fly depending on the returned value of ReturnFixedPoint

            int result = ReturnFixedPoint(sortedArray);

            Console.WriteLine(result);
        }
    }
}

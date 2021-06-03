using System;
using System.Collections.Generic;

// To view the problem this solution belongs to and understand the solution better, read the README.

namespace daily_800
{

    // Simple Node implementation
    class Node
    {
           public int data;
           public Node next;

           public Node(){}
           public Node(int d)
           {
               data = d;
               next = null;
           }
        
    }

    // Simple LinkedList implementation
    class SingleLinkedList
    {
        private Node head;

        public void AddNode(int data)
        {
            Node newNode = new Node(data);
            if(head == null) {head = newNode; return;}
            
            Node foo = head;
            while(foo.next != null)
            {
                foo = foo.next;
            }

            foo.next = newNode;
        }

        public void Rearrange()
        {
            // If the linked list has no nodes or only one, we just return
            if(head.next == null || head == null) return;

            // The counter is used to count the number of values we already have modified
            int i = 0, counter = 0;
            List<int> valuesVector = new List<int>();
            Node foo = head;

            // We add all node values into our vector until we hit the last node
            while(foo.next != null)
            {
                valuesVector.Add(foo.data);
                foo = foo.next;
            }

            // We add final node value
            valuesVector.Add(foo.data);

            valuesVector.Sort();
            foo = head;
            int vectorCount = valuesVector.Count;

            while(counter < vectorCount)
            {
                // This part starts from the beginning of the vector and goes up
                foo.data = valuesVector[i];
                counter++;
                if(foo.next != null) foo = foo.next;

                // In case the linked list is odd, we break the loop here
                if(counter == vectorCount) break;
                
                // This part starts from the end of the vector and goes down
                foo.data = valuesVector[vectorCount - i - 1];
                counter++;
                if(foo.next != null) foo = foo.next;

                i++;
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            SingleLinkedList list = new SingleLinkedList();
            list.AddNode(3);
            list.AddNode(1);
            list.AddNode(10);
            list.AddNode(20);
            list.AddNode(21);
            list.AddNode(18);
            list.AddNode(17);

            list.Rearrange();
        }
    }
}

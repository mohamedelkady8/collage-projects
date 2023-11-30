#include <iostream>
#include <iomanip>
#include <climits>

using namespace std;

#define ll long long
#define fixed(n) fixed << setprecision(n)
#define endl "\n"

class node {
public:
    int val;
    node* nextnode;

    node(int val)
    {
        this->val = val;
        nextnode = nullptr;
    }
};

class Linked_list {
private:
    node* head;
    node* tail;
    int mini = INT_MAX;
    int NodesCounter = 0;

public:
    Linked_list() : head(nullptr), tail(nullptr) {}

    void AddToHead(int val)
    {
        mini = min(val, mini);

        NodesCounter++;
        node* newnode = new node(val);

        newnode->nextnode = head;
        head = newnode;
        if (NodesCounter == 1)
            tail = head;
    }

    void AddToEnd(int val)
    {
        mini = min(val, mini);

        NodesCounter++;
        node* newnode = new node(val);
        if (head == nullptr)
        {
            newnode->nextnode = head;
            head = tail = newnode;
            return;
        }
        else
        {
            tail->nextnode = newnode;
            tail = newnode;
        }
    }

    void InsertNode(int val, int targetval)
    {
        node* newnode = new node(val);

        node* CurrentNode = head;
        while (CurrentNode->val != targetval && CurrentNode->nextnode != nullptr)
        {
            CurrentNode = CurrentNode->nextnode;
        }

        if (targetval == CurrentNode->val)
        {
            NodesCounter++;
            mini = min(val, mini);
            newnode->nextnode = CurrentNode->nextnode;
            CurrentNode->nextnode = newnode;

            if (CurrentNode->nextnode == nullptr)
                tail = CurrentNode;
            return;
        }
        cout << "Error: No node contains " << targetval << endl;
    }

    void PrintTheList()
    {
        node* looper = head;

        while (looper != nullptr)
        {
            cout << looper->val << " ";
            looper = looper->nextnode;
        }

        cout << endl;
    }

    bool IsEmpty()
    {
        return NodesCounter == 0;
    }

    node* find(int target)
    {
        node* CurrentNode = head;

        while (CurrentNode != nullptr && CurrentNode->val != target)
        {
            CurrentNode = CurrentNode->nextnode;
        }

        if (CurrentNode != nullptr && CurrentNode->val == target)
        {
            return CurrentNode;
        }
        else
        {
            cout << target << " Doesn't exist in the list" << endl;
            return nullptr;
        }
    }

    int getMin()
    {
        if (IsEmpty())
            return 0;
        else
        {
            int dd = INT_MAX;
            node* looper = head;

            while (looper != nullptr)
            {
                dd = min(dd, looper->val);
                looper = looper->nextnode;
            }
            return dd;
        }
    }

    int sumOdd()
    {
        int sum = 0;
        node* CurrentNode = head;

        while (CurrentNode != nullptr)
        {
            if (CurrentNode->val % 2 == 1)
                sum += CurrentNode->val;

            CurrentNode = CurrentNode->nextnode;
        }

        return sum;
    }

    int length()
    {
        return NodesCounter;
    }

    void DeleteFromHead()
    {
        if (!IsEmpty())
        {
            node* deleter = head;
            head = head->nextnode;
            delete deleter;
            NodesCounter--;
        }
    }

    void DeleteFromEnd()
    {
        if (!IsEmpty())
        {
            if (head == tail)
            {
                delete head;
                head = tail = nullptr;
                NodesCounter--;
                return;
            }

            node* looper = head;

            while (looper->nextnode->nextnode != nullptr)
            {
                looper = looper->nextnode;
            }

            delete looper->nextnode;
            looper->nextnode = nullptr;
            tail = looper;
            NodesCounter--;
        }
    }

    void deleteNode(int target)
    {
        if (head == nullptr)
            return;

        if (target == head->val)
        {
            DeleteFromHead();
            return;
        }

        node* CurrentNode = head;
        while (CurrentNode->nextnode != nullptr && CurrentNode->nextnode->val != target)
        {
            CurrentNode = CurrentNode->nextnode;
        }

        if (CurrentNode->nextnode != nullptr && CurrentNode->nextnode->val == target)
        {
            node* deleter = CurrentNode->nextnode;
            CurrentNode->nextnode = CurrentNode->nextnode->nextnode;
            delete deleter;
            NodesCounter--;
        }
    }

    void copyList(const Linked_list& oldlist)
    {
        if (IsEmpty())
        {
            // Clear existing content
            node* looper = head;
            while (looper != nullptr)
            {
                node* temp = looper;
                looper = looper->nextnode;
                delete temp;
            }

            // Copy elements from the old list
            node* copier = oldlist.head;
            while (copier != nullptr)
            {
                AddToEnd(copier->val);
                copier = copier->nextnode;
            }
        }
    }

    ~Linked_list()
    {
        node* CN = head, *temp = nullptr;

        while (CN != nullptr)
        {
            temp = CN->nextnode;
            delete CN;
            CN = temp;
        }

        NodesCounter = 0;
        head = tail = nullptr;
    }
};

int main()
{
    Linked_list f, h;

    f.AddToHead(6);
    f.AddToEnd(7);
    f.AddToEnd(8);

    h.copyList(f);
    cout << "Length of h: " << h.length() << endl;

    cout << "Content of h: ";
    h.PrintTheList();

    h.AddToEnd(9);
    h.AddToHead(5);

    cout << "Content of h after modifications: ";
    h.PrintTheList();

    return 0;
}

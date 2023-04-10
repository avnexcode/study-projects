#include <iostream>
using namespace std;
int main() {
    int a = 1, b = 2;
    int *pointer_a = &a;
    int *pointer_b = nullptr;
    pointer_b = &b;

    cout << "a = " << a << endl;
    cout << "pointer a = " << pointer_a << endl;
    cout << "pointer a = " << pointer_b << endl;
    cin.get();
    return 0;
}
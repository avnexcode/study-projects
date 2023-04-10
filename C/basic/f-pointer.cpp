#include <iostream>
using namespace std;

void function(int *x) {
    cout << "alamat memori x : " << x << endl;
    cout << "nilai x : " << *x << endl;
}

int main() {
    int a = 10;
    int b = 10;
    int c = 10;
    cout << "alamat memori a : " << &a << endl;
    cout << "nilai a : " << a << endl;
    function(&a);
    cin.get();
    return 0;
}
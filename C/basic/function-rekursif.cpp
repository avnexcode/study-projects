#include <iostream>
using namespace std;

int faktorial(int n) {
    if (n <= 1) {
        return n;
    }
    return faktorial(n -1 ) * n;
    
}

int fibo(int n);

void tampol(int data) {
    cout << data << endl;
}

int main() {
    int angka;
    cout<< "Masukan angka : "; cin >> angka;
    tampol(faktorial(angka));
    tampol(fibo(angka));
}

int fibo(int n) {
    if((n == 0) || (n == 1)) {
        return n;
    }
    return fibo(n - 1) + fibo (n - 2);
}
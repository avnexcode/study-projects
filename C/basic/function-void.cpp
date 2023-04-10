#include <iostream>
using namespace std;
// ? - sebuah function yang tidak memiliki return
void tampilData(int data) {
    cout << data << endl;
}

int perkalian(int a, int b) {
    int hasil = a * b;
    return hasil;
}

int main(int argc, const char** argv) {
    cout << "Hello World" << endl;
    int a,b;
    cout << "Masukan Nilai 1 : "; cin >> a;
    cout << "Masukan Nilai 2 : "; cin >> b;
    int result = perkalian(a,b);
    tampilData(result);
    return 0;
}
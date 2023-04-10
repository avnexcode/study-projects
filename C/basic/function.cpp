#include <iostream>
using namespace std;

int akarKuadrat(int a) {
    int hasil = a * a;
    return hasil;
}

int penjumlahan(int a, int b) {
    int hasil = a + b;
    return hasil;
}

int main() {
    int input1,input2;
    cout<< "Masukan Angka ke-1 : ";cin>>input1;
    cout<< "Masukan Angka ke-2 : ";cin>>input2;
    cout<< "Akar dari " << input1 << " = " << akarKuadrat(input1) << endl; 
    cout<< "Akar dari " << input2 << " = " << akarKuadrat(input2) << endl;
    cout<< "Penjumlahan dari " << input1 << " dan " << input2 << " = " << penjumlahan(input1,input2) << endl;
    cin.get();
    return 0;
}
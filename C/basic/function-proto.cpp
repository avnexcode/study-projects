#include <iostream>
using namespace std;

void println(string text);
void printSum(double x);

int main() {
    string text;
    double sum;
    cout << "Sapa aku dengan : "; getline(cin,text);
    cout << "Masukan angka favorit : "; cin >> sum;
    println(text);
    printSum(sum);
    return 0;
}

void println(string text) {
    cout << text << endl;
}
void printSum(double x) {
    cout << x << endl;
}
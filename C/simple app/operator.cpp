#include <iostream>
#include <windows.h>
using namespace std;

int operation(char opt);
string odd_or_even_number(int number);
void getResult(), showMenu();
short pilihan;
  int first_number, second_number;

int main() {
    bool autoReload;

    do {
        showMenu();
        cout << "Mau menghitung kembali ? "; cin >> autoReload;
    } while(autoReload == 'y' || autoReload == 'Y');

    return 0;
}

void showMenu() {
    cout << "+============================+" << endl;
    cout << "|PROGRAM KALKULATOR SEDERHANA|" << endl;
    cout << "+============================+" << endl;
    cout << "|            Menu            |" << endl;
    cout << "+============================+" << endl;
    cout << "|      1. Penjumlahan        |" << endl;
    cout << "|      2. Pengurangan        |" << endl;
    cout << "|      3. Perkalian          |" << endl;
    cout << "|      4. Pembagian          |" << endl;
    cout << "+============================+" << endl;
    cout << "Masukkan pilihan menu anda : ";
    while(!(cin >> pilihan)) {
        cout << "Masukkan kembali pilihan : " ;
        cin.clear();
        cin.ignore(123);
    }
}

void getResult() {
    char opt;
    switch (opt) {
        int result;
        case 1:
            result = operation('+');
            cout << "Nilai dari " << first_number << " + " << second_number << " = " << result << endl;
            cout << "Nilai " << result << " adalah bilangan " << odd_or_even_number(result) << endl;
            break;
        case 2:
            result = operation('-');
            cout << "Nilai dari " << first_number << " - " << second_number << " = " << result << endl;
            cout << "Nilai " << result << " adalah bilangan " << odd_or_even_number(result) << endl;
            break;
        case 3:
            result = operation('*');
            cout << "Nilai dari " << first_number << " * " << second_number << " = " << result << endl;
            cout << "Nilai " << result << " adalah bilangan " << odd_or_even_number(result) << endl;
            break;
        case 4:
            result = operation('/');
            cout << "Nilai dari " << first_number << " / " << second_number << " = " << result << endl;
            cout << "Nilai " << result << " adalah bilangan " << odd_or_even_number(result) << endl;
            break;
        default:
            break;
        }
}

string odd_or_even_number(int number) {
    if(number % 2 == 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

int operation(char opt) {
  
    switch (opt) {
    case '+':
        cout<<"Masukkan bilangan pertama : "; cin >> first_number;
        cout<<"Masukkan bilangan kedua : "; cin >> second_number;
        return first_number + second_number;
        break;
    case '-':
        return first_number - second_number;
        break;
    case '*':
        return first_number * second_number;
        break;
    case '/':
        return first_number / second_number;
        break;
    default:
        return false;
        break;
    }
}

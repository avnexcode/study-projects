#include <iostream>

double keliling(double p, double l) {
    double hasil = 2 * (p + l);
    return hasil;
}

double luas(double p, double l) {
    double hasil = p * l;
    return hasil;
}

void tampilHasil(double p, double l) {
    double hasilKeliling = keliling(p,l);
    double hasilLuas = luas(p,l);
    std::cout << "Hasil keliling dari " << p << " dan " << l << " = " << hasilKeliling << std::endl;
    std::cout << "Hasil luas dari " << p << " dan " << l << " = " << hasilLuas << std::endl;
    
}

int main() {
    double input1, input2;
    std::cout << "Masukan Nilai ke 1 : "; std::cin >> input1;
    std::cout << "Masukan Nilai ke 2 : "; std::cin >> input2;
    tampilHasil(input1, input2);
}
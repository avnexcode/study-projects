#include <iostream>
int main() {
    // todo - tipe data
    // ? - bilangan bulat
    short a = 30; // ! - 2 byte or 16-bit
    int b = 10; // ! - 4 byte or 32-bit
    long c = 20; // ! - 8 byte or 64-bit
    std::cout << "Size memori variabel a/short = " << sizeof(a) << std::endl;
    std::cout << "Size memori variabel b/int = " << sizeof(b) << std::endl;
    std::cout << "Size memori variabel c/long = " << sizeof(c) << std::endl;
    std::cout << "short a = " << a << "\nint b = " << b << "\nlong c = " << c << std::endl;

    // ? - bilangan desimal
    float d = 1.5; // ! - 4 byte or 32-bit
    double e = 2.5; // ! - 8 byte or 64-bit
    std::cout << "Size memori variabel d/float = " <<  sizeof(d) <<std::endl;
    std::cout << "Size memori variabel e/double = " << sizeof(e) <<std::endl;
    std::cout << "float d = " << d << "\ndouble e = " << e << std::endl;

    // ? - karakter
    char f = 'A';
    std::cout << "Size memori variabel f/char = " << sizeof(f) << std::endl;
    std::cout << "Char f = " << f << std::endl;

    // ? - boolean
    bool g = true; // ! - 1-bit
    std::cout << g << std::endl;

    // ? - unsigned digunakan untuk melipat gandakan batas maksimal nilai dari variabel karena menghilangankan batas minimal negatif
    unsigned int uns = 2;
    std::cout << "Size memori variabel uns/unsigned int = " << sizeof(uns) << std::endl;
    std::cout << "Unsigned int = " << uns << std::endl;

}
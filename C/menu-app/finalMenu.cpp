#include <iostream>
#include <algorithm>
#include <windows.h>
#include <vector>

using namespace std;

int pilihan;

struct Menu
{
    string name;
    double price;
};

vector<int> linearSearch(Menu menu[], int size, const string &key);
void bubbleSortPrice(Menu menu[], int size), bubbleSortName(Menu names[], int length);
void pilihanMenu(), tampilMenu(), daftarMenu(), searchResult();

// todo - Daftar Menu
const int size = 40;
Menu menu[size] = {
    {"Nasi Babat", 15000},
    {"Nasi Daging", 25000},
    {"Nasi Kresengan", 25000},
    {"Cah Pakcoy", 12000},
    {"Udang Crispy", 22500},
    {"Rice Bowl chicken Cheese", 17000},
    {"Rice Bowl chicken Samat", 17000},
    {"Rice Bowl chicken Teriyaki", 17000},
    {"P. Chicken Saus Peanut", 17000},
    {"Jamur Crispy", 10000},
    {"P. Jamur Crispy", 15000},
    {"Chicken Sup", 10000},
    {"P. Chicken Sup", 15000},
    {"Ice Tea", 4000},
    {"Ice Green tea", 9000},
    {"Ice Chocolate", 9000},
    {"Ice Milo", 9000},
    {"Ice Orange Squash", 7000},
    {"Ice Milkshake Chocolate", 10000},
    {"Ice Milkshake Vanilla", 10000},
    {"Ice Milkshake Stowberry", 10000},
    {"Ice lemon Tea", 7000},
    {"Ice Cream", 11000},
    {"Hot Green Tea", 9000},
    {"Hot Chocolate", 9000},
    {"Hot Milo", 9000},
    {"Hot Tea", 4000},
    {"Hot Lemon Tea", 7000},
    {"Hot Coffe", 6000},
    {"Green Tea Float", 12000},
    {"Chocolate Float", 12000},
    {"Orange Float", 12000},
    {"Milkshake Choco Float", 13000},
    {"Milkshake Vanilla Float", 13000},
    {"Milkshake Stowberry Float", 13000},
    {"Snack Banana Cube", 12500},
    {"Snack Roti Bakar", 12500},
    {"Snack Chicken Pop", 13000},
    {"Snack Rich Bucket", 20000},
    {"Snack Pancake", 18500},
};

// todo - run or debugging
int main()
{
    char ulang;
    do
    {
        tampilMenu();
        cout << endl;
        pilihanMenu();
        cout << endl;
        cout << "Mau Mengulang Program? (y/n) => ";
        cin >> ulang;
        system("cls");
    } while (ulang == 'y' || ulang == 'Y');

    if (ulang == 'n' || ulang == 'N')
    {
        system("color 2");
        char ending[] = {
            "\n+--------------------------------------------------------------------+"
            "\n|  Terima Kasih KON HEHEHE   ................................   ^_^  |"
            "\n+--------------------------------------------------------------------+"};
        int panjang_string;
        panjang_string = strlen(ending);
        for (int a = 0; a < panjang_string; a++)
        {
            for (int b = 0; b < 99999; b++)
            {
                for (int c = 0; c < 500; c++)
                {
                }
            }
            cout << ending[a];
        }
        cout << endl
             << endl;
    }
    else
    {
        system("color C");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
    }
}

void tampilMenu()
{
    cout << "++====================================++" << endl;
    cout << "||=========== Menu Makanan ===========||" << endl;
    cout << "||                                    ||" << endl;
    cout << "||  1. Tampilkan Semua Menu           ||" << endl;
    cout << "||  2. Urutkan Menu Berdasarkan Nama  ||" << endl;
    cout << "||  3. Urutkan Menu Berdasarkan Harga ||" << endl;
    cout << "||  4. Cari Menu                      ||" << endl;
    cout << "||                                    ||" << endl;
    cout << "++====================================++" << endl;
    cout << "\nMasukkan Pilihan Anda : ";
    while (!(cin >> pilihan))
    {
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Pilihan! : ";
        cin.clear();
        cin.ignore(123, '\n');
    }
}

// todo - Menjalankan menu yang dipilih
void pilihanMenu()
{
    switch (pilihan)
    {
    case 1:
        daftarMenu();
        break;
    case 2:
        bubbleSortName(menu, size);
        break;
    case 3:
        bubbleSortPrice(menu, size);
        break;
    case 4:
        searchResult();
        break;
    default:
        cout << "Pilihan Tidak Tersedia!" << endl;
        break;
    }
}

// todo - Menampilkan seluruh daftar menu
void daftarMenu()
{
    cout << "+------------------------------------------+" << endl;
    cout << "|                Daftar Menu               |\n";
    cout << "+------------------------------------------+" << endl;
    cout << "|                                          |" << endl;
    string line = "+==========================================+";
    for (int i = 0; i < size; i++)
    {
        cout << line << endl;
        cout << "  " << i + 1 << ". " << menu[i].name << " - Rp" << menu[i].price << endl;
    }
    cout << line << endl;
}

// todo - sorting by name
void bubbleSortName(Menu menu[], int length)
{
    for (int i = 0; i < length - 1; i++)
    {
        for (int j = 0; j < length - i - 1; j++)
        {
            if (menu[j].name > menu[j + 1].name)
            {
                swap(menu[j], menu[j + 1]);
            }
        }
    }
    cout << "+------------------------------------------+" << endl;
    cout << "|  Menu setelah diurutkan berdasarkan nama |\n";
    cout << "+------------------------------------------+" << endl;
    cout << "|                                          |" << endl;
    string line = "+==========================================+";
    for (int i = 0; i < size; i++)
    {
        cout << line << endl;
        cout << "  " << i + 1 << ". " << menu[i].name << " - Rp" << menu[i].price << endl;
    }
    cout << line << endl;
}

// todo - sorting by price
void bubbleSortPrice(Menu menu[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size - i - 1; j++)
        {
            if (menu[j].price > menu[j + 1].price)
            {
                Menu temp = menu[j];
                menu[j] = menu[j + 1];
                menu[j + 1] = temp;
            }
        }
    }
    cout << "+------------------------------------------+" << endl;
    cout << "| Menu setelah diurutkan berdasarkan harga |\n";
    cout << "+------------------------------------------+" << endl;
    cout << "|                                          |" << endl;
    string line = "+==========================================+";
    for (int i = 0; i < size; i++)
    {
        cout << line << endl;
        cout << "  " << i + 1 << ". " << menu[i].name << " - Rp" << menu[i].price << endl;
    }
    cout << line << endl;
}

void searchResult()
{
    string line = "+==========================================+";
    string key;
    cout << line << endl;
    cout << "Masukkan nama menu yang ingin dicari: ";
    cin.ignore();
    getline(cin, key);
    cout << line << endl;
    vector<int> result = linearSearch(menu, size, key);
    int urutan = 1;
    if (result.empty())
    {
        cout << "Menu tidak ditemukan." << endl;
    }
    else
    {
        cout << "+------------------------------------------+" << endl;
        cout << "|             Menu yang ditemukan          |\n";
        cout << "+------------------------------------------+" << endl;
        cout << "|                                          |" << endl;
        for (int index : result)
        {
            cout << line << endl;
            cout << "  " << urutan++ << ". " << menu[index].name << " - " << menu[index].price << endl;
        }
        cout << line << endl;
    }
}

vector<int> linearSearch(Menu menu[], int size, const string &key)
{
    vector<int> matches;

    for (int i = 0; i < size; i++)
    {
        string nama = menu[i].name;
        transform(nama.begin(), nama.end(), nama.begin(), ::tolower);
        string searchKey = key;
        transform(searchKey.begin(), searchKey.end(), searchKey.begin(), ::tolower);

        if (nama.find(searchKey) != string::npos)
        {
            matches.push_back(i);
        }
    }

    return matches;
}

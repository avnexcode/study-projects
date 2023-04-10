#include <iostream>
#include <windows.h>

using namespace std;

void menu(), pilih(), info();
int emas(), perak(), perniagaan();
float gabah(), zakat_fitrah();

short pilihan;

int main() {
    char ulang;
    do {
        menu();
        cout << endl;
        pilih();
        cout << endl;
        cout << "Mau Mengulang Program? (y/n) => ";
        cin >> ulang;
        system("cls");
    } while (ulang == 'y' || ulang == 'Y');

    if (ulang == 'n' || ulang == 'N') {
        system("color 2");
        char ending[] = {
                "\n+--------------------------------------------------------------------+"
                "\n|   Terima Kasih Telah Menggunakan Program dari Kelompok C ... ^_^   |"
                "\n+--------------------------------------------------------------------+"};
        int panjang_string;
        panjang_string = strlen(ending);
        for (int a = 0; a < panjang_string; a++) {
            for (int b = 0; b < 99999; b++) {
                for (int c = 0; c < 100; c++) {
                }
            }
            cout << ending[a];
        }
        cout << endl
             << endl;
    } else {
        system("color C");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
    }
}  

void menu() {
    cout << "+===========================+" << endl;
    cout << "| PROGRAM PERHITUNGAN ZAKAT |" << endl;
    cout << "+---------------------------+" << endl;
    cout << "|       MENU PILIHAN :      |" << endl;
    cout << "+===========================+" << endl;
    cout << "|  1. Zakat Fitrah          |" << endl;
    cout << "|  2. Zakat Emas            |" << endl;
    cout << "|  3. Zakat Perak           |" << endl;
    cout << "|  4. Zakat Perniagaan      |" << endl;
    cout << "|  5. Zakat Gabah           |" << endl;
    cout << "|  0. Info                  |" << endl;
    cout << "+---------------------------+" << endl;
    cout << "\nMasukkan Pilihan Anda : ";
    while (!(cin >> pilihan)) {
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Pilihan! : ";
        cin.clear();
        cin.ignore(123, '\n');
    }
}

void pilih() {
    switch (pilihan) {
    case 1:
        zakat_fitrah();
        break;
    case 2:
        emas();
        break;
    case 3:
        perak();
        break;
    case 4:
        perniagaan();
        break;
    case 5:
        gabah();
        break;
    case 0:
        info();
        break;
    default:
        cout << "Pilihan Tidak Tersedia!" << endl;
    }
}

float zakat_fitrah() {
	int orang;
	float hasil, takaran_beras = 2.5;

	
	cout << "Masukkan Total Orang Yang Akan Zakat : ";
    while (!(cin >> orang)) {
        system("cls");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Orang Yang Akan Zakat : ";
        cin.clear();
        cin.ignore(123, '\n');
    }   
        hasil = orang * takaran_beras;
      	cout << "+==============================================+" << endl;
        cout << "|  Jumlah Zakat Yang Harus Dikeluarkan : " << hasil << " kg |" << endl;
        cout << "+==============================================+" << endl;
    return 0;
}

int emas() {
    float jumlah_emas;
    int harga_emas, pilih, total_temuan[1], total_bukan[1];

    cout << "Masukkan Jumlah Harta Emas ( Gram ) : ";
    while (!(cin >> jumlah_emas)) {
        system("cls");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Jumlah Emas! ( Gram ) : ";
        cin.clear();
        cin.ignore(123, '\n');
    }
    if (jumlah_emas >= 77.5) {
        cout << endl;
        cout << "+================================+" << endl;
        cout << "|  ANDA TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+================================+" << endl;
        cout << endl;
        cout << "Masukkan Harga Emas Saat Ini : Rp. ";
        while (!(cin >> harga_emas)) {
            system("cls");
            cout << "\n400_ERR_INVALID_INPUT!" << endl;
            cout << "\nMasukkan Ulang Harga Emas! : ";
            cin.clear();
            cin.ignore(123, '\n');
        }
        system("cls");
        cout << endl;
        cout << " Silahkan Pilih Opsi : " << endl;
        cout << "=======================" << endl;
        cout << " 1. Emas Temuan" << endl;
        cout << " 2. Bukan Temuan" << endl;
        cout << "\nPilihan : ";

        while (!(cin >> pilih)) {
            cout << "\n400_ERR_INVALID_INPUT!" << endl;
            cout << "\nMasukkan Ulang Pilihan! : ";
            cin.clear();
            cin.ignore(123, '\n');
        }

        if (pilih == 1) {
            total_temuan[0] = (jumlah_emas * harga_emas) / 5;
            cout << "+====================================================" << endl;
            cout << "| Zakat yang harus di keluarkan adalah Rp. " << total_temuan[0] << endl;
        } else if (pilih == 2) {
            total_bukan[0] = (jumlah_emas * harga_emas) / 40;
            cout << "+===================================================" << endl;
            cout << "| Zakat yang harus di keluarkan adalah Rp. " << total_bukan[0] << endl;
        } else {
            cout << "\nPilihan Tidak Tersedia!" << endl;
        }
    } else {
        cout << endl;
        cout << "+======================================+" << endl;
        cout << "|  ANDA BELUM TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+======================================+" << endl;
    }
    return 0;
}

int perak() {
    float jumlah_perak;
    int harga_perak, pilih, total_temuan[1], total_bukan[1];

    cout << "Masukkan Jumlah Harta Perak ( Gram ) : ";

    while (!(cin >> jumlah_perak)) {
        system("cls");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Jumlah Perak! ( Gram ) : ";
        cin.clear();
        cin.ignore(123, '\n');
    }
    if (jumlah_perak >= 543) {
        cout << endl;
        cout << "+================================+" << endl;
        cout << "|  ANDA TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+================================+" << endl;
        cout << endl;
        cout << "Masukkan Harga Perak Saat Ini : Rp. ";

        while (!(cin >> harga_perak)) {
            system("cls");
            cout << "\n400_ERR_INVALID_INPUT!" << endl;
            cout << "\nMasukkan Ulang Harga Perak! : ";
            cin.clear();
            cin.ignore(123, '\n');
        }
        system("cls");
        cout << endl;
        cout << " Silahkan Pilih Opsi : " << endl;
        cout << "=======================" << endl;
        cout << " 1. Perak Temuan" << endl;
        cout << " 2. Bukan Temuan" << endl;
        cout << "\nPilihan : ";

        while (!(cin >> pilih)) {
            cout << "\n400_ERR_INVALID_INPUT!" << endl;
            cout << "\nMasukkan Ulang Pilihan! : ";
            cin.clear();
            cin.ignore(123, '\n');
        }
        if (pilih == 1) {
            total_temuan[0] = (jumlah_perak * harga_perak) / 5;

            cout << endl;
            cout << "+====================================================" << endl;
            cout << "| Zakat yang harus di keluarkan adalah Rp. " << total_temuan[0] << endl;
        } else if (pilih == 2) {
            total_bukan[0] = (jumlah_perak * harga_perak) / 40;

            cout << "+===================================================" << endl;
            cout << "| Zakat yang harus di keluarkan adalah Rp. " << total_bukan[0] << endl;
        } else {
            cout << "\nPilihan Tidak Tersedia!" << endl;
        }
    } else {
        cout << endl;
        cout << "+======================================+" << endl;
        cout << "|  ANDA BELUM TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+======================================+" << endl;
    }
    return 0;
}

int perniagaan() {
    int jumlah_harta, harga_emas;
    int zakat_perniagaan[1];

    cout << "Masukkan Jumlah Harta Perniagaan : Rp.  ";

    while (!(cin >> jumlah_harta)) {
        system("cls");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Jumlah Harta Perniagaan! : ";
        cin.clear();
        cin.ignore(123, '\n');
    }
    cout << "\nMasukkan Harga Emas Saat Ini : Rp. ";

    while (!(cin >> harga_emas)) {
        system("cls");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Harga Emas! : ";
        cin.clear();
        cin.ignore(123, '\n');
    }

    if ((jumlah_harta / harga_emas) >= 77.5) {
        cout << endl;
        cout << "+================================+" << endl;
        cout << "|  ANDA TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+================================+" << endl;

        zakat_perniagaan[0] = jumlah_harta / 40;

        cout << endl;
        cout << "+====================================================" << endl;
        cout << "| Zakat yang harus di keluarkan adalah Rp. " << zakat_perniagaan[0] << endl;
    } else {
        cout << endl;
        cout << "+======================================+" << endl;
        cout << "|  ANDA BELUM TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+======================================+" << endl;
    }
    return 0;
}

float gabah() {
    float hasil_panen, jenis_usaha;
    float dengan_biaya[1], tanpa_biaya[1];

    cout << "Masukkan Hasil Panen ( Kg ) : ";

    while (!(cin >> hasil_panen)) {
        system("cls");
        cout << "\n400_ERR_INVALID_INPUT!" << endl;
        cout << "\nMasukkan Ulang Hasil Panen! : ";
        cin.clear();
        cin.ignore(123, '\n');
    }
    if (hasil_panen >= 1323.132) {
        system("cls");
        cout << endl;
        cout << "+================================+" << endl;
        cout << "|  ANDA TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+================================+" << endl;
        cout << endl;
        cout << "  Usaha Yang Dilakukan (pilih opsi) : " << endl;
        cout << " =====================================" << endl;
        cout << " 1. Dengan Biaya Pengairan" << endl;
        cout << " 2. Tanpa Biaya Pengairan" << endl;
        cout << "\nPilihan : ";

        while (!(cin >> jenis_usaha)) {
            cout << "\n400_ERR_INVALID_INPUT!" << endl;
            cout << "\nMasukkan Ulang Pilihan! : ";
            cin.clear();
            cin.ignore(123, '\n');
        }

        if (jenis_usaha == 1) {
            dengan_biaya[0] = hasil_panen / 20;

            cout << endl;
            cout << "+===================================================" << endl;
            cout << "| Zakat yang harus di keluarkan adalah : " << dengan_biaya[0] << " Kg" << endl;
        } else if (jenis_usaha == 2) {
            tanpa_biaya[0] = hasil_panen / 10;

            cout << endl;
            cout << "+==================================================" << endl;
            cout << "| Zakat yang harus di keluarkan adalah : " << tanpa_biaya[0] << " Kg" << endl;
        } else {
            cout << "\nPilihan Tidak Tersedia!" << endl;
        }
    } else {
        cout << endl;
        cout << "+======================================+" << endl;
        cout << "|  ANDA BELUM TERMASUK WAJIB ZAKAT..!  |" << endl;
        cout << "+======================================+" << endl;
    }
    return 0;
}

void info() {
    system("cls");
    cout << "# PENGERTIAN ZAKAT :" << endl;
    cout << "\tZakat merupakan harta yang wajib dikeluarkan oleh orang muslim untuk" << endl;
    cout << "diberikan kepada orang yang berhak menerimanya. Zakat merupakan salah" << endl;
    cout << "satu dari rukun islam yang memiliki kedudukan tinggi. Allah berfirman" << endl;
    cout << "dalam surah al Baqarah ayat 43: \"Dirikanlah sholat dan bayarkanlah zakat\"." << endl;
    cout << "\tTerdapat berbagai macam zakat, diantaranya zakat fitrah dan zakat mal. " << endl;
    cout << "Program ini di buat untuk memudahkan orang muslim dalam menghitung zakat" << endl;
    cout << "yang akan di keluarkan (khususnya zakat mal). Zakat BUKAN TEMUAN dikeluarkan" << endl;
    cout << "setelah mencapai satu nishob dan sudah dimiliki paling tidak SATU tahun." << endl;
    cout << endl
         << endl;
    cout << "# 8 GOLONGAN YANG BERHAK MENERIMA ZAKAT :" << endl;
    cout << "\tZakat memiliki aturan mengikat dari segi ilmu fiqihnya, salah satu diantaranya " << endl;
    cout << "kepada siapa zakat diberikan. Dalam QS. Attaubah ayat 60, allah memberikan" << endl;
    cout << "ketentuan, ada 8 golongan yang berhak menerima zakat, yaitu sebagai berikut:" << endl;
    cout << endl;
    cout << "  1. Faqir" << endl;
    cout << "\tMereka yang hampir tidak memiliki apa-apa sehingga tidak mampu memenuhi kebutuhan hidup." << endl;
    cout << "  2. Miskin" << endl;
    cout << "\tMereka yang memiliki harta namun tidak cukup utuk memenuhi kebutuhan dasar kehidupan." << endl;
    cout << "  3. Amil" << endl;
    cout << "\tMereka yang mengumpulkan dan mendisribusikan zakat." << endl;
    cout << "  4. Mualaf" << endl;
    cout << "\tMereka yang baru masuk islam dan membtuhkan bantuan untuk menguatkan tauhid dan syariah." << endl;
    cout << "  5. Riqab" << endl;
    cout << "\tBudak atau hamba sahaya yang ingin memerdekakan dirinya." << endl;
    cout << "  6. Gharim" << endl;
    cout << "\tMereka yang berhutang untuk kebtuhan hidup." << endl;
    cout << "  7. Fisabilillah" << endl;
    cout << "\tMereka yang berjuang di jalan allah dalam bentuk dakwah, jihad, dan sebagainya." << endl;
    cout << "  8. Ibnu Sabil" << endl;
    cout << "\tMereka yang kehabisan biaya di perjalanan dalam ketaatan kepada allah." << endl;
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package Volume;
import java.util.*;

/**
 *
 * @Author Muhammad Fauzi Nur Aziz
 * @NIM 22104410046
 * @Prodi Teknik Informatika - Universitas Islam Balitar
 */
public class Main {
    // todo - declaration variable
    private int pilihan; 
    public int ulang;
    
    // todo - setter variable(Pilihan)
    private void setPilihan(int pilihan) {
        this.pilihan = pilihan;
    }
    
    // todo - setter and getter variable(Ulang)
    public void setUlang(int ulang) {
        this.ulang = ulang;
    }
    public int getUlang() {
        return ulang;
    }

    // todo - function untuk menampilkan menu program yang tersedia
    private static void pilihanMenu() {
        System.out.println("||||||||||||||||||||||||||");
        System.out.println("++======================++\n||                      ||\n||   Pilih Perhitungan  ||\n||   1. Volume Balok    ||\n||   2. Volume Kubus    ||\n||   3. Volume Tabung   ||\n||                      ||\n++======================++");
        
        System.out.println("||||||||||||||||||||||||||");
        System.out.println("--------------------------");
    }

    // todo
    public static void ulangMenu() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Mau mengulang ?");
        System.out.println("1. Ya");
        System.out.println("2. Tidak");
        scanner.close();
    }

    // todo - function untuk menjalankan program yang dipilih
    protected void perhitunganVolume() {
        Scanner scanner = new Scanner(System.in);
        switch (this.pilihan) {
            case 1: Balok.run();
                break;
            case 2: Kubus.run();    
                break;
            case 3: Tabung.run();
                break;
            default:
                System.out.println("Maaf menu yang anda pilih tidak tersedia.");
                break;
            }
        scanner.close();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Main main = new Main();

        do {
            System.out.println("\n");
            pilihanMenu();
            
            System.out.print("Tentukan Pilihanmu : ");
            main.setPilihan(scanner.nextInt());
            
            main.perhitunganVolume();

            ulangMenu();
            System.out.println(main.getUlang());
            scanner.close();
        } while(main.getUlang() == 1);

    }
}

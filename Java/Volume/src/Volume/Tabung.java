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
public class Tabung {
    // todo - declaration variable
    private double r; double t;

    // todo - setter and getter variable(R)
    protected double getR() {
        return r;
    }
    protected void setR(double r) {
        this.r = r;
    }
    
    // todo - setter and getter variable(T)
    protected double getT() {
        return t;
    }
    protected void setT(double t) {
        this.t = t;
    }

    // todo - function untuk menghitung volume tabung
    protected double volumeTabung() {
        return Math.PI * Math.pow(this.r, 2) * this.t;
    }

    // todo - function untuk menampilkan rumus volume tabung
    protected static void rumus() {
        System.out.println("++=================++");
        System.out.println("||      Rumus :    ||");
        System.out.println("|| phi x r x r x t ||");
        System.out.println("++=================++");

    }

    // todo - function untuk menjalankan program
    protected static void run() {
        Scanner scanner = new Scanner(System.in);
        Tabung tabung = new Tabung();

        System.out.println("++====================++");
        System.out.print("Masukkan jari - jari tabung : "); tabung.setR(scanner.nextDouble());
        System.out.println("+----------------------+");
        System.out.print("Masukkan tinggi tabung : "); tabung.setT(scanner.nextDouble());
        System.out.println("+----------------------+");

        rumus();

        System.out.println("Hasil dari " + 3.14 + " x " 
        + tabung.getR() + " x " 
        + tabung.getR() + " x " 
        + tabung.getT() + " = " 
        + tabung.volumeTabung());

        scanner.close();
    }
}

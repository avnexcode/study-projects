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
public class Balok {
    // todo - declaration variable
    private double p; double l; double t;

    // todo - setter and getter variable (P)
    protected double getP() {
        return p;
    }
    protected void setP(double p) {
        this.p = p;
    }
    
    // todo - setter and getter variable (L)
    protected double getL() {
        return l;
    }
    protected void setL(double l) {
        this.l = l;
    }

    // todo - setter and getter variable (T)
    protected double getT() {
        return t;
    }
    protected void setT(double t) {
        this.t = t;
    }

    // todo - function untuk menghitung volume balok
    protected double volumeBalok() {
        return this.p * this.l * this.t;
    }

    // todo - function untuk menampilkan rumus volume balok
    protected static void rumus() {
        System.out.println("++===========++");
        System.out.println("||  Rumus :  ||");
        System.out.println("|| p x l x t ||");
        System.out.println("++===========++");

    }

    // todo - function untuk menjalankan program
    protected static void run() {
        Scanner scanner = new Scanner(System.in);
        Balok balok = new Balok();

        System.out.println("++====================++");
        System.out.print("Masukkan panjang balok : "); balok.setP(scanner.nextDouble());
        System.out.println("+----------------------+");
        System.out.print("Masukkan lebar balok : "); balok.setL(scanner.nextDouble());
        System.out.println("+----------------------+");
        System.out.print("Masukkan tinggi balok : "); balok.setT(scanner.nextDouble());
        System.out.println("+----------------------+");

        rumus();

        System.out.println("Hasil dari " 
        + balok.getP() + " x " 
        + balok.getL() + " x " 
        + balok.getT() + " = " 
        + balok.volumeBalok());
        
        scanner.close();
    }
}

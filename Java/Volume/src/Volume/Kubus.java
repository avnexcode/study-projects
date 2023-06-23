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
public class Kubus {
    // todo - declaration variable
    private double s;

    // todo - setter and getter variable (S)
    protected double getS() {
        return s;
    }

    protected void setS(double s) {
        this.s = s;
    }

    // todo - function untuk menghitung volume kubus
    protected double volumeKubus() {
        return (double) Math.pow(this.s, 3);
    }

    // todo - function untuk menampilkan rumus volume kubus
    protected static void rumus() {
        System.out.println("++===========++");
        System.out.println("||  Rumus :  ||");
        System.out.println("|| s x s x s ||");
        System.out.println("++===========++");

    }

    // todo - function untuk menjalankan program
    protected static void run() {
        Scanner scanner = new Scanner(System.in);
        Kubus kubus = new Kubus();

        System.out.println("++====================++");
        System.out.print("Masukkan sisi kubus : "); kubus.setS(scanner.nextDouble());
        System.out.println("+----------------------+");

        rumus();

        System.out.println("Hasil dari " 
        + kubus.getS() + " x " 
        + kubus.getS() + " x " 
        + kubus.getS() + " x = " 
        + kubus.volumeKubus());

        scanner.close();
    }
}

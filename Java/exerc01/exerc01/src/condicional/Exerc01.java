package condicional;

import java.util.Locale;
import java.util.Scanner;

public class Exerc01 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        System.out.println((n >= 0) ? "NAO NEGATIVO" : "NEGATIVO");

        sc.close();
    }
}

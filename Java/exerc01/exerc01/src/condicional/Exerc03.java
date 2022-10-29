package condicional;

import java.util.Locale;
import java.util.Scanner;

public class Exerc03 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int n2 = sc.nextInt();

        System.out.println((n % n2 == 0 || n2 % n == 0) ? "Sao Multiplos" : "Nao sao multiplos");

        sc.close();
    }
}

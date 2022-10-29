package condicional;

import java.util.Locale;
import java.util.Scanner;

public class Exerc08 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double salary = sc.nextDouble();

        double total = 0;

        if (salary <= 2000.00){
            System.out.println("Isento");
        } else if (salary <= 3000.00) {
            total = (salary - 2000.00) * 0.08;
        } else if (salary <= 4500.00) {
            total = (salary - 3000.00) * 0.18 + 1000.00 * 0.08;
        } else {
            total = (salary - 4000.00) * 0.28 + 3500.00 * 0.18 + 1000 * 0.08;
        }

        System.out.printf("R$ %.2f", total);

        sc.close();
    }
}

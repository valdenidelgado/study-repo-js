package condicional;

import java.util.Locale;
import java.util.Scanner;

public class Exerc06 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double value = sc.nextDouble();

        if (value < 0 || value > 100) {
            System.out.println("Fora de intervalo");
        } else if (value <= 25) {
            System.out.println("Intervalo de [0,25]");
        } else if (value <= 50) {
            System.out.println("Intervalo de [25,50]");
        } else if (value <= 75) {
            System.out.println("Intervalo de [50,75]");
        } else {
            System.out.println("Intervalo de [75,100]");
        }

        sc.close();
    }
}

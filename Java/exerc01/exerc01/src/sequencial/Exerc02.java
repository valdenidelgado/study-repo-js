import java.util.Locale;
import java.util.Scanner;

public class Exerc02 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        final double PI = 3.14159;

        double r = sc.nextDouble();

        double area = PI * Math.pow(r, 2);

        System.out.printf("A=%.4f", area);
    }
}
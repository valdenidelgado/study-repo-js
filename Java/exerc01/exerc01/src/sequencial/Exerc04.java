import java.util.Locale;
import java.util.Scanner;

public class Exerc04 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int numFunc = sc.nextInt();
        int hoursWorked = sc.nextInt();
        double valueHours = sc.nextDouble();

        double calc = hoursWorked * valueHours;

        System.out.println("NUMBER = " + numFunc);
        System.out.printf("SALARY = U$ %.2f", calc);
    }
}
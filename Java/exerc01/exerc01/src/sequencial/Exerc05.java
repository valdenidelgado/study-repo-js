package sequencial;

import java.util.Locale;
import java.util.Scanner;

public class Exerc05 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int cod1 = sc.nextInt();
        int numPiece1 = sc.nextInt();
        double valuePiece1 = sc.nextDouble();

        int cod2 = sc.nextInt();
        int numPiece2 = sc.nextInt();
        double valuePiece2 = sc.nextDouble();

        double calc = numPiece1 * valuePiece1 + numPiece2 * valuePiece2;

        System.out.printf("VALOR A PAGAR: R$ %.2f", calc);

        sc.close();
    }
}
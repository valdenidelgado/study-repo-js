package condicional;

import java.util.Locale;
import java.util.Scanner;

public class Exerc04 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int initialHour = sc.nextInt();
        int finalHour = sc.nextInt();

        int duracao = 0;

        if (initialHour > finalHour){
            duracao = finalHour - initialHour + 24;
        } else if (finalHour > initialHour) {
            duracao = finalHour - initialHour;
        }

        if (duracao > 0) {
            System.out.printf("O JOGO DUROU %d HORA(S)", duracao);
        } else {
            System.out.println("O JOGO DUROU 24 HORA(S)");
        }
        sc.close();
    }
}

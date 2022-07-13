import java.util.Scanner;

public class Nota {
    public static void conferirNota() {
        Scanner scan = new Scanner(System.in);
        int nota;
        do {
            System.out.println("Insira a nota");
            nota = scan.nextInt();
            if (nota < 0 || nota > 10)
                System.out.println("Nota Inválida!");
        } while (nota < 0 || nota > 10);

    }
}

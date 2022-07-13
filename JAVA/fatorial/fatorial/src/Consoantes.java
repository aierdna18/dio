import java.security.SecureClassLoader;
import java.util.Scanner;

//Leia um vetor de 6 caracteres e diga quantas consoantes foram lidas

public class Consoantes {
    public static void name() {
        Scanner scan = new Scanner(System.in);

        String[] vetor = new String[6];
        int qtdConsoantes = 0;
        int count = 0;

        do {
            System.out.println("Letra: ");
            String letra = scan.next();

            if ((letra.equalsIgnoreCase("a")) |
                    (letra.equalsIgnoreCase("e")) |
                    (letra.equalsIgnoreCase("i")) |
                    (letra.equalsIgnoreCase("o")) |
                    (letra.equalsIgnoreCase("u"))) {
                vetor[count] = letra;
                qtdConsoantes++;
            }
            count++;
        } while (count < vetor.length);

        System.out.println("Consoantes\n");
        System.out.println("Quantidade de consoantes: " + qtdConsoantes);
        for (String cons : vetor) {
            if (cons != null)
                System.out.print(cons + " ");
        }

    }
}

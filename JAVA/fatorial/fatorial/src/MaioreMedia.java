import java.util.Scanner;

public class MaioreMedia {
    public static void mediaeMaior() {
        Scanner scan = new Scanner(System.in);
        int soma = 0;
        int maior = 0;
        int numero;

        System.out.println("Digite 5 numeros: ");
        for (int i = 0; i < 5; i++) {
            numero = scan.nextInt();
            soma += numero;
            if (numero > maior) {
                maior = numero;
            }
        }
        System.out.println("O maior número é: " + maior);
        System.out.println("Média dos numeros é: " + (soma / 5));

    }
}
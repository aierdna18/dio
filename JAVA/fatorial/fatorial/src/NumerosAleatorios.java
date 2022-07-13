import java.util.Random;
import java.util.Scanner;

//Leia 20 numeros aleatorios(entre 0 e 100) e armazene em um vetor
//ao final mostre os numeros e seus sucessores
public class NumerosAleatorios {
    public static void name() {
        Random random = new Random();

        int[] numeros = new int[20];

        for (int i = 0; i < numeros.length; i++) {
            int num = random.nextInt(100);
            numeros[i] = num;
        }

        System.out.println("\nNumeros aleatorios:");
        for (int i : numeros) {
            System.out.print(i + " ");
        }

        System.out.println("\nNumeros sucessores:");
        for (int i : numeros) {
            System.out.print((i + 1) + " ");
        }

    }

}

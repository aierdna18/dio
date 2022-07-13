import java.util.Scanner;

public class PareImpar {
    public static void name() {
        Scanner scan = new Scanner(System.in);
        int qtdNum;
        int par = 0;
        int impar = 0;
        int num;
        System.out.println("Informe a quantidade de numeros: ");
        qtdNum = scan.nextInt();

        for (int i = 0; i < qtdNum; i++) {
            num = scan.nextInt();
            if ((num % 2) == 0)
                par++;
            else
                impar++;
        }

        System.out.println("A quantidade de numeros pares é: " + par);
        System.out.println("A quantidade de numeros impares é: " + impar);

    }
}
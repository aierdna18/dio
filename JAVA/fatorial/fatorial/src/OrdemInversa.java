//crie um vetor de 6 numeros inteiros e mostre-os na ordem inversa
//
public class OrdemInversa {
    public static void name() {
        int[] vetor = { 3, -2, -5, 9, -8, 6 };
        int conut = 0;
        while (conut < (vetor.length - 1)) {
            System.out.println(vetor[conut]);
            conut++;
        }
        for (int i = (vetor.length - 1); i == 0; i--) {
            System.out.println(vetor[i]);
        }
    }
}

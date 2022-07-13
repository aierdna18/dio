public class Emprestimo {
    public static double getTaxaParcelas(int parcela) {
        if (parcela >= 5) {
            return 0.3;
        } else {
            return 0.5;
        }
    }

    public static void calcularEmprestimo(int parcela, double valor) {
        System.out.println("O valor final do empréstimo é de " + (valor += valor * getTaxaParcelas(parcela)));
    }

}

public class Main {
    public static void main(String[] args) throws Exception {
        // Calculadora
        System.out.println("Calculadora");
        Calculadora.soma(3.7, 7);
        Calculadora.subtracao(4.5, 5);
        Calculadora.multiplicacao(2.6, 8);
        Calculadora.divisao(3, 9);

        // Mensagem
        System.out.println("Mensagem");
        Mensagem.getMsg(1);
        Mensagem.getMsg(5);
        Mensagem.getMsg(13);
        Mensagem.getMsg(21);
        Mensagem.getMsg(25);

        // emprestimo
        System.out.println("Emprestimo");
        Emprestimo.calcularEmprestimo(2, 500);
        Emprestimo.calcularEmprestimo(1, 300);
        Emprestimo.calcularEmprestimo(7, 500);

    }

}

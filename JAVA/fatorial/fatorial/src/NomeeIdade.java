import java.util.Scanner;

public class NomeeIdade {
    public static void nameAge() {
        Scanner scan = new Scanner(System.in);
        String nome;
        int idade;

        while (true) {
            System.out.println("Nome: ");
            nome = scan.next();
            if (nome.equals("0"))
                break;
            System.out.println("Idade: ");
            idade = scan.nextInt();
        }
    }
}
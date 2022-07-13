import java.text.BreakIterator;

public class Main {
    public static void main(String[] args) throws Exception {
        ifFlecha();
        ifSemFlecha();
        ifFerias();
        ifMenor();

        switchSemana();
        switchNumero();
        switchFerias();
    }

    private static void ifFlecha() {
        int mes = 5;
        // HAHAHA NÃO FICA FLECHA POR CAUSA DAS EXTENSOES
        if (mes == 1) {
            System.out.println("Janeiro");
        } else if (mes == 2) {
            System.out.println("Fevereiro");
        } else if (mes == 3) {
            System.out.println("Março");
        } else if (mes == 4) {
            System.out.println("Abril");
        } else if (mes == 5) {
            System.out.println("Maio");
        } else if (mes == 6) {
            System.out.println("Junho");
        } else if (mes == 7) {
            System.out.println("Julho");
        } else if (mes == 8) {
            System.out.println("Agosto");
        } else if (mes == 9) {
            System.out.println("Setembro");
        } else if (mes == 10) {
            System.out.println("Outubro");
        } else if (mes == 11) {
            System.out.println("Novembro");
        } else if (mes == 12) {
            System.out.println("Dezembro");
        }

    }

    private static void ifSemFlecha() {
        int mes = 5;
        // HAHAHA NÃO FICA FLECHA POR CAUSA DAS EXTENSOES
        if (mes == 1) {
            System.out.println("Janeiro");
        } else if (mes == 2) {
            System.out.println("Fevereiro");
        } else if (mes == 3) {
            System.out.println("Março");
        } else if (mes == 4) {
            System.out.println("Abril");
        } else if (mes == 5) {
            System.out.println("Maio");
        } else if (mes == 6) {
            System.out.println("Junho");
        } else if (mes == 7) {
            System.out.println("Julho");
        } else if (mes == 8) {
            System.out.println("Agosto");
        } else if (mes == 9) {
            System.out.println("Setembro");
        } else if (mes == 10) {
            System.out.println("Outubro");
        } else if (mes == 11) {
            System.out.println("Novembro");
        } else if (mes == 12) {
            System.out.println("Dezembro");
        }

    }

    private static void ifFerias() {
        String mes = "dezembro";
        if (mes == "dezembro" || mes == "janeiro") {
            System.out.println("Férias");
        }
    }

    private static void ifMenor() {
        double salarioMensal = 11333.58d;
        double mediaSalario = 1116.56d;
        int qtdDependentes = 6;
        int mediaDependentes = 2;

        if ((salarioMensal < mediaSalario) && (qtdDependentes >= mediaDependentes)) {
            System.out.println("Funcionário deve receber auxílio");
        }
        boolean salarioBaixo = salarioMensal < mediaSalario;
        boolean mtosDependentes = qtdDependentes >= mediaDependentes;
        if ((salarioBaixo) && (mtosDependentes)) {
            System.out.println("Funcionario deve receber auxilio!");
        }
        boolean recebeAuxilio = (salarioBaixo) && (mtosDependentes);
        if (recebeAuxilio) {
            System.out.println("Funcionario deve receber auxilio!");
        } else {
            System.out.println("Funcionario não deve receber auxilio!");
        }
    }

    private static void switchSemana() {
        String dia = "Sexta";
        switch (dia) {
            case "Domingo":
                System.out.println("1");
                break;
            case "Segunda":
                System.out.println("3");
                break;
            case "Terça":
                System.out.println("3");
                break;
            case "Quarta":
                System.out.println("4");
                break;
            case "Quinta":
                System.out.println("5");
                break;
            case "Sexta":
                System.out.println("6");
                break;
            case "Sábado":
                System.out.println("7");
                break;
            default:
                System.out.println("Dia Inválido!");
        }
    }

    public static void switchNumero() {
        int dia = 1;
        switch (dia) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda");
                break;
            case 3:
                System.out.println("Terça");
                break;
            case 4:
                System.out.println("Quarta");
                break;
            case 5:
                System.out.println("Quinta");
                break;
            case 6:
                System.out.println("Sexta");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            default:
                System.out.println("Dia Inválido!");
        }
    }

    public static void switchFerias() {
        String mes = "Dezembro";
        switch (mes) {
            case "Janeiro":
            case "Dezembro":
                System.out.println("Férias");
                break;
            default:
                System.out.println("Não é ferias!");
                break;
        }
    }
}

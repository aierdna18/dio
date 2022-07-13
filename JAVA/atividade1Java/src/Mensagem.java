public class Mensagem {
    public static void getMsg(int hora) {
        if ((hora >= 5) && (hora < 12)) {
            bomDia();
        } else if ((hora >= 12) && (hora < 17)) {
            boaTarde();
        } else if (((hora >= 17) && (hora < 23)) || ((hora >= 0) && (hora < 5))) {
            boaNoite();
        } else {
            System.out.println("Hora inválida!");
        }
    }

    public static void bomDia() {
        System.out.println("Bom Dia");
    }

    public static void boaTarde() {
        System.out.println("Boa Tarde");
    }

    public static void boaNoite() {
        System.out.println("Boa Noite");
    }

}

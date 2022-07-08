class ContaBancaria{
    constructor(ag, num, tipo){
        this.ag = ag;
        this.num = num;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set set(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo)  {
            return "Saldo Insuficiente!"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(ag, num, cartaoCredito){
        super(ag, num);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(ag, num){
        super(ag, num);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(ag, num){
        super(ag, num);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return "Valor acima do permitido para saque!"
        }
    }
}
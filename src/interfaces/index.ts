export interface IUser {
    idUsuario: number;
    sub: string;
  }

  export interface IBank {
    plan: IPlan[]
    banco: IDataAccount
  }
  
  
export interface IPlan{
  id: number,
  descricao: string,
  login: string,
  tipoMovimento: string,
  padrao: boolean
}

export interface IDataAccount {
  contaBanco: {
    saldo: number;
    id: number;
    lancamentos: IHistoric[];
  };
  contaCredito: {
    saldo: number;
    id: number;
    lancamentos: IHistoric[];
  };
}

export interface IHistoric{
  id: number,
  data: string,
  valor: number,
  conta: number,
  descricao: string,
  tipo: string
}

export interface IProps {
  loginToken?: string;
}
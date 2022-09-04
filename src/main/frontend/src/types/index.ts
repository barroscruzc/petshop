
type Animal = {
    id: number;
    nome: string;
    idade: number;
    peso: number;
    cliente_id: number;
}

type Cliente = {
    id: number;
    nome: string;
    telefone: string;
    animais?: Animal[];
};

type OrdemServico = {
    codigo: number;
    id_cliente: number;
    id_animal: number;
    valor: number;
    data: string;
    descricao: string;
    hora_entrada: string;
    hora_retirada: string;
};

export {
    Animal,
    Cliente,
    OrdemServico
};

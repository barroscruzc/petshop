type Cliente = {
    id: number;
    nome: string;
    telefone: string;
    animais: Animal[];
};

type Animal = {
    id: number;
    nome: string;
    idade: number;
    peso: number;
    cliente: Cliente;
}

type OrdemServico = {
    codigo: number;
    cliente: Cliente;
    animal: Animal;
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

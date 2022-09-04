import { Animal, Cliente, OrdemServico } from "./types";

const fetchAnimais = async () => {
    const response = await fetch("http://localhost:8080/petshop/animais");
    const json = await response.json();
    console.log(json);
    return json as Animal[];
}

const fetchClientes = async () => {
    const response = await fetch("http://localhost:8080/petshop/clientes");
    const json = await response.json();
    console.log(json);
    return json as Cliente[];
}

const fetchOrdemServico = async () => {
    const response = await fetch("http://localhost:8080/petshop/ordemservico");
    const json = await response.json();
    console.log(json);
    return json as OrdemServico[];
}

export { fetchAnimais, fetchClientes, fetchOrdemServico };
import * as React from "react";
import { fetchClientes } from "../util";
import { Cliente } from "../types";
import style from "./Page.module.scss";

export default () => {
    const [clientes, setClientes] = React.useState<Cliente[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>("");

    const [clienteSelecionado, setClienteSelecionado] = React.useState<Cliente | null>(null);

    const [nome, setNome] = React.useState<string>("");
    const [telefone, setTelefone] = React.useState<string>("");

    const getClientes = async () => {
        try {
            setClientes(await fetchClientes());
        }
        catch (e: any) {
            setError(e.message);
        }
    }

    React.useEffect(() => {
        //set page title
        document.title = "PetShop - Clientes";
        //fetch data
        getClientes().then(() => setLoading(false));
    }, []);

    const handleClienteSelecionado = (cliente: Cliente) => {
        if (clienteSelecionado?.id === cliente.id) {
            setClienteSelecionado(null);
            setNome("");
            setTelefone("");
        } else {
            setClienteSelecionado(cliente);
            setNome(cliente.nome);
            setTelefone(cliente.telefone);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (clienteSelecionado) {
            //update
            const response = await fetch(`http://localhost:8080/petshop/clientes/${clienteSelecionado.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome, telefone })
            });
            if (response.ok) {
                getClientes();
                setClienteSelecionado(null);
                setNome("");
                setTelefone("");
            }
        }
        else {
            //create
            const response = await fetch("http://localhost:8080/petshop/clientes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome, telefone })
            });
            if (response.ok) {
                getClientes();
                setNome("");
                setTelefone("");
            }
        }
    }

    return (
        <>
            <h1 className={style.titulo}>Clientes</h1>
            <div className={style.erro}>
                {error}
            </div>
            <div className={style.container}>
                {
                    loading ?
                        <h1>Carregando...</h1>
                        :
                        <>
                            {
                                clientes.length > 0 ?
                                    (<>
                                        <div className={style.lista}>
                                            <ul>
                                                {
                                                    clientes.map(cliente => (
                                                        <li key={cliente.id}>
                                                            <div className={style.card}>
                                                                <p>
                                                                    ID: {cliente.id}
                                                                </p>
                                                                <p>
                                                                    Nome: {cliente.nome}
                                                                </p>
                                                                <p>
                                                                    Telefone: {cliente.telefone}
                                                                </p>
                                                                <button onClick={() => handleClienteSelecionado(cliente)}>
                                                                    {
                                                                        clienteSelecionado?.id === cliente.id ? "Desselecionar" : "Selecionar"
                                                                    }
                                                                </button>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </>) :
                                    (<h2>Nenhum cliente cadastrado</h2>)
                            }
                        </>
                }
            </div>

            <div className={style.container}>
                <h2>
                    {
                        clienteSelecionado ?
                            `Editando Cliente: ${clienteSelecionado.nome}` :
                            "Cadastre um novo cliente"
                    }
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome do cliente"
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="Telefone do cliente"
                        />
                    </div>
                    <div className={style.formGroup}>
                        <button type="submit">Salvar</button>
                    </div>
                    {
                        clienteSelecionado &&
                        <div className={style.formGroup}>
                            <button type="button" onClick={
                                async (e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    const response = await fetch(`http://localhost:8080/petshop/clientes/${clienteSelecionado.id}`, {
                                        method: "DELETE"
                                    });
                                    if (response.ok) {
                                        getClientes();
                                        setClienteSelecionado(null);
                                        setNome("");
                                        setTelefone("");
                                    } else {
                                        setError("Erro ao deletar cliente");
                                    }
                                }}>Excluir</button>
                        </div>
                    }
                </form>
            </div>
        </>
    );
}

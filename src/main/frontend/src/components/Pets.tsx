import * as React from "react";
import { Animal, Cliente } from "../types";
import style from "./Page.module.scss";
import { fetchAnimais, fetchClientes } from "../util";

export default () => {
    const [animais, setAnimais] = React.useState<Animal[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [clientes, setClientes] = React.useState<Cliente[]>([]);
    const [error, setError] = React.useState<string>("");

    const [nome, setNome] = React.useState<string>("");
    const [idade, setIdade] = React.useState<number>(0);
    const [peso, setPeso] = React.useState<number>(0);
    const [clienteSelecionado, setClienteSelecionado] = React.useState<Cliente | null>(null);

    const [animalSelecionado, setAnimalSelecionado] = React.useState<Animal | null>(null);

    const GetAnimais = async () => {
        try {
            setAnimais(await fetchAnimais());
        }
        catch (e: any) {
            setError(e.response.data.message);
        }
    }

    const getClientes = async () => {
        try {
            setClientes(await fetchClientes());
        }
        catch (e: any) {
            setError(e.message);
        }
    }

    const handleSelecionarAnimal = (animal: Animal) => {
        if (animalSelecionado?.id === animal.id) {
            setAnimalSelecionado(null);
            setNome("");
            setIdade(0);
            setPeso(0);
            setClienteSelecionado(null);
        } else {
            setAnimalSelecionado(animal);
            setNome(animal.nome);
            setIdade(animal.idade);
            setPeso(animal.peso);
            setClienteSelecionado(animal.cliente);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (animalSelecionado) {
            //update
            fetch(`http://localhost:8080/petshop/animais/${animalSelecionado.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome, idade, peso, cliente: clienteSelecionado })
            }).then(() => {
                GetAnimais();
                setAnimalSelecionado(null);
                setNome("");
                setIdade(0);
                setPeso(0);
                setClienteSelecionado(null);
            });
        }
        else {
            //create
            fetch("http://localhost:8080/petshop/animais", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome, idade, peso, cliente: clienteSelecionado })
            }).then(() => {
                GetAnimais();
                setNome("");
                setIdade(0);
                setPeso(0);
                setClienteSelecionado(null);
            });
        }
    }


    React.useEffect(() => {
        //set page title
        document.title = "PetShop - Animais";
        //fetch data
        getClientes();
        GetAnimais().then(() => setLoading(false));

    }, []);

    return (
        <>
            <h1 className={style.titulo}>Animais</h1>
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
                                animais.length > 0 ? (
                                    <div className={style.lista}>
                                        <ul>
                                            {
                                                animais.map(animal => (
                                                    <li key={animal.id}>
                                                        <p>
                                                            Nome: {animal.nome}
                                                        </p>
                                                        <p>
                                                            Idade: {animal.idade}
                                                        </p>
                                                        <p>
                                                            Peso: {animal.peso} kg
                                                        </p>
                                                        <p>
                                                            Dono do Pet: {animal.cliente.nome}
                                                        </p>
                                                        <button onClick={() => handleSelecionarAnimal(animal)}>
                                                            {
                                                                animalSelecionado?.id === animal.id ? "Desselecionar" : "Selecionar"
                                                            }
                                                        </button>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>) :
                                    (<h1>Nenhum pet cadastrado</h1>)
                            }
                        </>
                }
            </div>
            <div className={style.container}>
                <h2>
                    {
                        animalSelecionado ?
                            `Editando Pet: ${animalSelecionado.nome}`
                            :
                            "Cadastrar Pet"
                    }
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome do Pet"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="idade">Idade</label>
                        <input
                            type="number"
                            id="idade"
                            name="idade"
                            value={idade}
                            onChange={e => setIdade(Number(e.target.value))}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="peso">Peso</label>
                        <input
                            type="number"
                            id="peso"
                            name="peso"
                            value={peso}
                            onChange={e => setPeso(Number(e.target.value))}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="cliente">Dono do Pet</label>
                            <div className={style.lista}>
                                <ul>
                                    {
                                        clientes.map(cliente => (
                                            <li key={cliente.id}>
                                                <input
                                                    type="radio"
                                                    id={cliente.id.toString()}
                                                    name="cliente"
                                                    value={cliente.id}
                                                    onChange={e => setClienteSelecionado(cliente)}
                                                    style={{ boxShadow: "none" }}
                                                    checked={cliente.id === clienteSelecionado?.id}
                                                />
                                                <label htmlFor={cliente.id.toString()}>{cliente.nome}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                        </div>
                    </div>
                    <div className={style.formGroup}>
                        <button type="submit">
                            {
                                animalSelecionado ?
                                    "Salvar"
                                    :
                                    "Cadastrar"
                            }
                        </button>
                    </div>
                    {
                        animalSelecionado &&
                        <div className={style.formGroup}>
                            <button type="button" onClick={
                                async (e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    const response = await fetch(`http://localhost:8080/petshop/animais/${animalSelecionado.id}`, {
                                        method: "DELETE"
                                    })
                                    if (response.ok) {
                                        GetAnimais();
                                        setAnimalSelecionado(null);
                                        setNome("");
                                        setIdade(0);
                                        setPeso(0);
                                        setClienteSelecionado(null);
                                    } else {
                                        setError("Não foi possível excluir o pet");
                                    }
                                }}>Excluir</button>
                        </div>
                    }
                </form>
            </div>
        </>
    );
}

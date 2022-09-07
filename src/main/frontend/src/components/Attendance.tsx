import * as React from "react";
import { fetchAnimais, fetchClientes, fetchOrdemServico } from "../util";
import { Animal, Cliente, OrdemServico } from "../types";
import style from "./Page.module.scss";

export default () => {
    const [animais, setAnimais] = React.useState<Animal[]>([]);
    const [clientes, setClientes] = React.useState<Cliente[]>([]);
    const [error, setError] = React.useState<string>("");

    const [cliente, setCliente] = React.useState<null | Cliente>(null);
    const [animal, setAnimal] = React.useState<null | Animal>(null);
    const [valor, setValor] = React.useState<number>(25);
    const [data, setData] = React.useState<string>( new Date().toISOString().slice(0, 10) );
    const [descricao, setDescricao] = React.useState<string>("Check-up de rotina");
    const [hora_entrada, setHora_entrada] = React.useState<string>("08:00");
    const [hora_retirada, setHora_retirada] = React.useState<string>("18:00");

    const getAnimais = async () => {
        try {
            setAnimais(await fetchAnimais());
        } catch (e: any) {
            setError(e.message);
        }
    };
    const getClientes = async () => {
        try {
            setClientes(await fetchClientes());
        } catch (e: any) {
            setError(e.message);
        }
    };
    const getOrdemServico = async () => {
        try {
            setOrdemServico(await fetchOrdemServico());
        } catch (e: any) {
            setError(e.message);
        }
    };

    React.useEffect(() => {
        //set page title
        document.title = "PetShop - Atendimento";
        //fetch data
        getAnimais();
        getClientes();
        getOrdemServico().then(() => setLoading(false));
    }, []);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // convert date from yyyy-mm-dd to dd-mm-yyyy
            const dataFormatada = `${data.slice(8, 10)}-${data.slice(5, 7)}-${data.slice(0, 4)}`;
            const response = await fetch("http://localhost:8080/petshop/ordemservico", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cliente,
                    valor,
                    data: dataFormatada,
                    descricao,
                    hora_entrada,
                    hora_retirada,
                    animal,
                }),
            });
            if (response.ok) {
                setError("Atendimento cadastrado com sucesso!");
            } else {
                setError("Erro ao salvar");
            }        
        }
        catch (e: any) {
            setError(e.message);
        }
        // Clear form
        setCliente(null);
        setAnimal(null);
        setValor(25);
        setData(new Date().toISOString().slice(0, 10));
        setDescricao("Check-up de rotina");
        setHora_entrada("08:00");
        setHora_retirada("18:00");
    }

    return (
        <>
            <h1 className={style.titulo}>Atendimento</h1>
            <div className={style.erro}>
                {error}
            </div>
            <div className={style.container}>
                <h2>Adicionar Atendimento</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="id_cliente">Cliente</label>
                        <div className={style.lista}
                            style={{
                                width: "90%",
                                display: "block",
                            }}>
                            <ul>
                                {
                                    clientes.map(elem => (
                                        <li key={elem.id}>
                                            <div className={style.radioType}>
                                                <label htmlFor={elem.id.toString()}>{elem.nome}</label>
                                                <input
                                                    type="radio"
                                                    id={elem.id.toString()}
                                                    name="cliente"
                                                    value={elem.id}
                                                    onChange={e => setCliente(elem)}
                                                    style={{ boxShadow: "none" }}
                                                    checked={elem.id === cliente?.id}
                                                />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {
                        (cliente && cliente.animais.length > 0) ?
                            (
                                <>
                                    <div className={style.formGroup}>
                                        <label htmlFor="id_animal">Animal</label>
                                        <div className={style.lista}
                                            style={{
                                                width: "90%",
                                                display: "block",
                                            }}>
                                            <ul>
                                                {
                                                    animais.filter(elem => elem.cliente.id === cliente.id).map(elem => (
                                                        <li key={elem.id}>
                                                            <div className={style.radioType}>
                                                                <label htmlFor={elem.id.toString()}>{elem.nome.substring(0, 15)}</label>
                                                                <input
                                                                    type="radio"
                                                                    id={elem.id.toString()}
                                                                    name="animal"
                                                                    value={elem.id}
                                                                    onChange={e => setAnimal(elem)}
                                                                    style={{ boxShadow: "none" }}
                                                                    checked={elem.id === animal?.id}
                                                                />
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.formGroup}>
                                        <label htmlFor="valor">Valor</label>
                                        <input type="number" name="valor" id="valor" value={valor} onChange={(e) => setValor(Number(e.target.value))} />
                                    </div>
                                    <div className={style.formGroup}>
                                        <label htmlFor="data">Data</label>
                                        <input type="date" name="data" id="data" value={data} onChange={(e) => setData(e.target.value)} />
                                    </div>
                                    <div className={style.formGroup}>
                                        <label htmlFor="descricao">Descrição</label>
                                        <input type="text" name="descricao" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                    </div>
                                    <div className={style.formGroup}>
                                        <label htmlFor="hora_entrada">Hora de Entrada</label>
                                        <input type="time" name="hora_entrada" id="hora_entrada" value={hora_entrada} onChange={(e) => setHora_entrada(e.target.value)} />
                                    </div>
                                    <div className={style.formGroup}>
                                        <label htmlFor="hora_retirada">Hora de Retirada</label>
                                        <input type="time" name="hora_retirada" id="hora_retirada" value={hora_retirada} onChange={(e) => setHora_retirada(e.target.value)} />
                                    </div>
                                    <div className={style.formGroup}>
                                        <button type="submit">{"Criar novo Atendimento"}</button>
                                    </div>
                                </>
                            ) :
                            (
                                <h2>
                                    Nem um cliente selecionado ou nenhum animal cadastrado para o cliente selecionado
                                </h2>
                            )
                    }
                </form>
            </div>
        </>
    );
}
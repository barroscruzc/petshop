import * as React from "react";
import { fetchAnimais, fetchClientes, fetchOrdemServico } from "../util";
import { Animal, Cliente, OrdemServico } from "../types";
import style from "./Page.module.scss";

export default () => {
    const [animais, setAnimais] = React.useState<Animal[]>([]);
    const [clientes, setClientes] = React.useState<Cliente[]>([]);
    const [ordemServico, setOrdemServico] = React.useState<OrdemServico[]>([]);
    const [ordemServicoSelecionado, setOrdemServicoSelecionado] = React.useState<OrdemServico | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>("");

    const [cliente, setCliente] = React.useState<null | Cliente>(null);
    const [id_animal, setId_animal] = React.useState<number>(0);
    const [valor, setValor] = React.useState<number>(0);
    const [data, setData] = React.useState<string>("");
    const [descricao, setDescricao] = React.useState<string>("");
    const [hora_entrada, setHora_entrada] = React.useState<string>("");
    const [hora_retirada, setHora_retirada] = React.useState<string>("");

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
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/petshop/ordemServico", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cliente_id: cliente?.id,
                    valor: valor,
                    data: data,
                    descricao: descricao,
                    hora_entrada: hora_entrada,
                    hora_retirada: hora_retirada,
                    animal_id: id_animal,
                }),
            });
            if (response.status === 201) {
                setOrdemServicoSelecionado(await response.json());
            } else {
                setError("Erro ao cadastrar atendimento");
            }
        }
        catch (e: any) {
            setError(e.message);
        }
    }

    return (
        <>
            <h1 className={style.titulo}>Atendimento</h1>
            <div className={style.erro}>
                {error}
            </div>
            <div className={style.container}>
                {loading ? <div className={style.loading}>Carregando...</div> :
                    <>
                        {
                            ordemServico.length === 0 ? <h2>Nenhum atendimento cadastrado</h2> :
                                <table className={style.tabela}>
                                    <thead>
                                        <tr>
                                            <th>Cliente</th>
                                            <th>Animal</th>
                                            <th>Valor</th>
                                            <th>Data</th>
                                            <th>Descrição</th>
                                            <th>Hora Entrada</th>
                                            <th>Hora Retirada</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ordemServico.map((ordemServico) => (
                                            <tr key={ordemServico.id_ordem_servico}>
                                                <td>{ordemServico.id_cliente}</td>
                                                <td>{ordemServico.id_animal}</td>
                                                <td>{ordemServico.valor}</td>
                                                <td>{ordemServico.data}</td>
                                                <td>{ordemServico.descricao}</td>
                                                <td>{ordemServico.hora_entrada}</td>
                                                <td>{ordemServico.hora_retirada}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                        }
                    </>}
            </div>
            <div className={style.container}>
                <h2>{ordemServicoSelecionado ? "Editar" : "Adicionar"} Atendimento</h2>
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
                        (cliente && cliente?.animais?.length > 0) ?
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
                                                                    onChange={e => setId_animal(elem.id)}
                                                                    style={{ boxShadow: "none" }}
                                                                    checked={elem.id === id_animal}
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
                                        <button type="submit">{ordemServicoSelecionado ? "Editar" : "Adicionar"}</button>
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
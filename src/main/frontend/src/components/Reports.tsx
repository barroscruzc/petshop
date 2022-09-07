import * as React from "react";
import { Animal, Cliente, OrdemServico } from "../types";
import style from "./Reports.module.scss";
import { fetchAnimais, fetchClientes, fetchOrdemServico } from "../util";

const DataToCSV = (data: any, filename: string) => {
    const csvData = data.map((row: any) => {
        return Object.values(row).join(",");
    });
    const csvString = csvData.join("\n");
    return csvString;
};

const DownloadCSVButton = (props: {
    data: any;
    filename: string;
}) => {
    const handleClick = () => {
        const csvString = DataToCSV(props.data, props.filename);
        const a = document.createElement("a");
        a.href = "data:text/csv;charset=utf-8," + csvString;
        a.target = "_blank";
        a.download = props.filename;
        a.click();
    };
    return (
        <button onClick={handleClick}
            className={style.downloadButton}
        >Download CSV</button>
    );
};



const ClientesTable = (props: {
    clientes?: Cliente[],
    atendimentos?: OrdemServico[]
}) => {
    const dados: {
        nome: string;
        telefone: string;
        quantPets: number;
        quantAtendimentos: number;
        totalGasto: number;
    }[] = props.clientes?.map((cliente) => {
        return {
            nome: cliente.nome,
            telefone: cliente.telefone,
            quantPets: cliente.animais?.length,
            quantAtendimentos: props.atendimentos?.filter((atendimento) => atendimento.cliente?.id === cliente.id).length,
            totalGasto: props.atendimentos?.filter((atendimento) => atendimento.cliente?.id === cliente.id).reduce((total, atendimento) => total + atendimento.valor, 0)
        }
    }) || [];


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Quant. Pets</th>
                        <th>Quant. Atendimentos</th>
                        <th>Total Gasto</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((cliente) => (
                        <tr key={cliente.nome}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.quantPets}</td>
                            <td>{cliente.quantAtendimentos}</td>
                            <td>R${cliente.totalGasto.toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr className={style.total}>
                        <td>
                            Total:{dados.length}
                        </td>
                        <td></td>
                        <td>
                            Total:{dados.reduce((total, cliente) => total + cliente.quantPets, 0)}
                        </td>
                        <td>
                            Media:{(dados.reduce((total, cliente) => total + cliente.quantAtendimentos, 0) / dados.length).toFixed(2)}
                        </td>
                        <td>
                            Total: R${(dados.reduce((total, cliente) => total + cliente.totalGasto, 0)).toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
            <DownloadCSVButton data={dados} filename="clientes.csv" />
        </>
    )
}

const AnimaisTable = (props: {
    animais?: Animal[],
    atendimentos?: OrdemServico[]
}) => {
    const dados: {
        nome: string;
        idade: number;
        peso: number;
        dono: string;
        totalGasto: number;
    }[] = props.animais?.map((animal) => {
        return {
            nome: animal.nome,
            idade: animal.idade,
            peso: animal.peso,
            dono: animal.cliente?.nome || "",
            totalGasto: props.atendimentos?.filter((atendimento) => atendimento.animal?.id === animal.id).reduce((total, atendimento) => total + atendimento.valor, 0) || 0
        }
    }) || [];

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Peso</th>
                        <th>Dono</th>
                        <th>Total Gasto</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((animal) => (
                        <tr key={animal.nome}>
                            <td>{animal.nome}</td>
                            <td>{animal.idade}</td>
                            <td>{animal.peso}</td>
                            <td>{animal.dono}</td>
                            <td>R${animal.totalGasto.toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr className={style.total}>
                        <td>
                            Total: {dados.length}
                        </td>
                        <td>
                            Media: {(dados.reduce(
                                (total, animal) =>
                                    total + animal.idade, 0) / dados.length).toFixed(2)}
                        </td>
                        <td>
                            Media: {(dados.reduce(
                                (total, animal) =>
                                    total + animal.peso, 0) / dados.length).toFixed(2)}
                        </td>
                        <td>

                        </td>
                        <td>Total: R${(dados.reduce(
                            (total, animal) =>
                                total + animal.totalGasto, 0)).toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
            <DownloadCSVButton data={dados} filename="animais.csv" />
        </>
    )
}

const AtendimentosTable = (props: { atendimentos?: OrdemServico[] }) => {
    const dados: {
        Animal: string
        Dono: string
        Data: string
        Valor: number
        hora_entrada: string
        hora_retirada: string
    }[] = props.atendimentos?.map((atendimento) => {
        return {
            Animal: atendimento.animal?.nome || "",
            Dono: atendimento.cliente?.nome || "",
            Data: atendimento.data.toString(),
            Valor: atendimento.valor,
            hora_entrada: atendimento.hora_entrada,
            hora_retirada: atendimento.hora_retirada
        }
    }) || [];

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Animal</th>
                        <th>Dono</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Entrada</th>
                        <th>Saida</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((atendimento) => (
                        <tr key={atendimento.Animal}>
                            <td>{atendimento.Animal}</td>
                            <td>{atendimento.Dono}</td>
                            <td>{atendimento.Data}</td>
                            <td>R${atendimento.Valor}</td>
                            <td>{atendimento.hora_entrada}</td>
                            <td>{atendimento.hora_retirada}</td>
                        </tr>
                    ))}
                    <tr className={style.total}>
                        <td colSpan={3}>Total Atendimentos {dados.length}</td>
                        <td
                            colSpan={3}>
                            Montante: R${dados.reduce(
                                (total, atendimento) =>
                                    total + atendimento.Valor, 0)}
                        </td>
                    </tr>
                </tbody>
            </table>
            <DownloadCSVButton data={dados} filename="atendimentos.csv" />
        </>
    )
}

export default () => {
    const [clientes, setClientes] = React.useState<Cliente[]>();
    const [animais, setAnimais] = React.useState<Animal[]>();
    const [atendimentos, setAtendimentos] = React.useState<any[]>();

    React.useEffect(() => {
        fetchClientes().then(setClientes);
        fetchAnimais().then(setAnimais);
        fetchOrdemServico().then(setAtendimentos);
    }, []);

    return (
        <>
            <h1 className={style.title}>Relatórios</h1>
            <div className={style.reportContainer}>
                <h2>
                    <span>1.</span> Relatório dos Clientes
                </h2>
                <ClientesTable
                    clientes={clientes}
                    atendimentos={atendimentos}
                />
            </div>
            <div className={style.reportContainer}>
                <h2>
                    <span>1.</span> Relatório dos Pets
                </h2>
                <AnimaisTable animais={animais} atendimentos={atendimentos} />
            </div>
            <div className={style.reportContainer}>
                <h2>
                    <span>1.</span> Relatório de Atendimentos
                </h2>
                <AtendimentosTable atendimentos={atendimentos} />
            </div >
        </>
    )
}
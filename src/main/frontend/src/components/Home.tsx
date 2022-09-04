import * as React from "react";
import { Link } from "react-router-dom";
import style from "./Page.module.scss";

export default () => {


    return (
        <div className={style.container}>
            <h2>Sobre</h2>
            <p>
                PetShop é um sistema de gerenciamento de petshops.
            </p>
            <p>
                Para gerenciar os Clientes clique <Link to="/owners">aqui</Link>.
            </p>
            <p>
                Para gerenciar os Pets clique <Link to="/pets">aqui</Link>.
            </p>
            <p>
                Para gerenciar os Atendimentos clique <Link to="/services">aqui</Link>.
            </p>
        </div>
    );
}

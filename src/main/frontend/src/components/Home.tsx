import * as React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";

export default () => {


    return (
        <>
            <div className={style.content}>
                <h2>Sobre</h2>
                <p>
                <img src="/images/Cachorinho.png" alt="Cachorinho" />
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
        </>
    );
}

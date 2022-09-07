import * as React from "react";
import { Link } from "react-router-dom";
import style from "./Layout.module.scss";

export default ({ children }: { children: React.ReactNode }) => (
    <div className={style.layout}>
        <header>
            <h1>PetShop</h1>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/owners">
                        Donos
                    </Link>
                </li>
                <li>
                    <Link to="/pets">
                        Pets
                    </Link>
                </li>
                <li>
                    <Link to="/attendance">
                        Atendimento
                    </Link>
                </li>
                <li>
                    <Link to="/reports">
                        Relatórios
                    </Link>
                </li>
            </ul>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>Todos os direitos reservados © 2022</p>
            <p className=".credito" >Cristhiane da Cruz</p>
            <div className={style.links}>
                <a href="https://www.linkedin.com/in/barroscruzc/">
                    <img src="/images/linkedin-icon.svg" alt="Linkedin" />
                </a>
                <a href="mailto:barroscruzc@gmail.com">
                    <img src="/images/email-icon.svg" alt="Email" />
                </a>
                <a href="https://github.com/barroscruzc">
                    <img src="/images/github-icon.svg" alt="GitHub" />
                </a>
            </div>
            <p className=".credito">Nicolas da Nery</p>
            <div className={style.links}>
                <a href="https://www.linkedin.com/in/nicolas-vycas/">
                    <img src="/images/linkedin-icon.svg" alt="Linkedin" />
                </a>
                <a href="mailto:vycasnicolas@gmail.com">
                    <img src="/images/email-icon.svg" alt="Email" />
                </a>
                <a href="https://github.com/tomast1337">
                    <img src="/images/github-icon.svg" alt="GitHub" />
                </a>
            </div>
        </footer>
    </div>
);
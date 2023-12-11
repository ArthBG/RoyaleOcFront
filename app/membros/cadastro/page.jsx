
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./cadastro.module.css";
import Link from "next/link";

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";



export default function Register() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [errorNome, setErrorNome] = useState("");
    const [errorIdade, setErrorIdade] = useState("");
    const [errorCargo, setErrorCargo] = useState("");
    const [errorFoto, setErrorFoto] = useState("");
    const [errorDescricao, setErrorDescricao] = useState("");
    const [descricao, setDescricao] = useState("");
    const [membros, setMembros] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nome == '') {
            setErrorNome("Preencha o campo nome!");
            setTimeout(() => {
                setErrorNome("");
            }, 3000);
            return;
        } else if (nome.length < 2) {
            setErrorNome("O nome deve ter mais que 2 caracteres!");
            setTimeout(() => {
                setErrorNome("");
            }, 3000);
            return;

        }
        if (!idade || idade <= 15) {
            setErrorIdade("Idade deve ser maior que 15!");
            setTimeout(() => {
                setErrorIdade("");
            }, 3000);
            return;
        } else if (idade == '') {
            setErrorIdade("Preencha o campo idade!");
            setTimeout(() => {
                setErrorIdade("");
            }, 3000);
            return;
        }
        if (cargo == '') {
            setErrorCargo("Preencha o campo cargo!");
            setTimeout(() => {
                setErrorCargo("");
            }, 3000);
            return;
        }
        if (foto == '') {
            setErrorFoto("Preencha o campo foto!");
            setTimeout(() => {
                setErrorFoto("");
            }, 3000);
            return;

        } if (descricao.length > 1000) {
            setErrorDescricao("Descrição muito grande!");
            setTimeout(() => {
                setErrorDescricao("");
            }, 3000);
        } else if (descricao == '') {
            setErrorDescricao("Preencha o campo descrição!");
            setTimeout(() => {
                setErrorDescricao("");
            }, 3000);
            return;
        }

        else {

            try {

                await axios.post("/api/membros", { nome, idade, cargo, foto, descricao });

                setNome("");
                setIdade("");
                setCargo("");
                setFoto("");
                setDescricao("");
            } catch (error) {

                console.error("Error submitting data:", error);

                setMsg("Erro ao cadastrar membro. Por favor, preencha todos os campos corretamente.");

            }
        }
    };

    useEffect(() => {
        async function fetchMembros() {
            try {

                const response = await axios.get("/api/membros");

                setMembros(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMembros();
    }, []);

    return (
        <div className={styles.containerPai}>
            <Header />


            <div className={styles.containerForm}>
                <h1 className={styles.titulo}>Fazer o cadastro:</h1>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="Nome"
                            type="text"
                            id="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}

                        />
                        <p className={styles.msgError}>{errorNome}</p>

                    </div>

                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="Idade"
                            type="number"
                            id="idade"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}

                        />

                        <p className={styles.msgError}>{errorIdade}</p>

                      

                    </div>

                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="Cargo"
                            type="text"
                            id="cargo"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}

                        />
                        <p className={styles.msgError}>{errorCargo}</p>
                    </div>

                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="URL da foto"
                            type="text"
                            id="foto"
                            name="foto"
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}


                        />
                        <p className={styles.msgError}>{errorFoto}</p>
                    </div>


                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="Descrição"
                            type="text"
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}

                        />
                        <p className={styles.msgError}>{errorDescricao}</p>

                    </div>
                    <div className={styles.containerbtn}>

                        <Link href="/membros">
                            <button type="submit" className={styles.botaoVoltar}>
                                <div className={styles.overlay}></div>
                                <div className={styles.overlay}></div>
                                <div className={styles.overlay}></div>
                                <span className={styles.voltar}>Voltar</span>
                            </button >
                        </Link>


                        <button type="submit" className={styles.btn}>
                            <div className={styles.overlay}></div>
                            <div className={styles.overlay}></div>
                            <div className={styles.overlay}></div>
                            <span>Cadastrar</span>
                        </button >

                    </div>

                </form >
            </div >
            <Footer />
        </div >
    );
}
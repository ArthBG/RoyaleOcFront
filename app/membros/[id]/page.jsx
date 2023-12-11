"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css"
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function UpdateMembro({ params }) {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [errorNome, setErrorNome] = useState("");
    const [errorIdade, setErrorIdade] = useState("");
    const [errorCargo, setErrorCargo] = useState("");
    const [errorFoto, setErrorFoto] = useState("");
    const [errorDescricao, setErrorDescricao] = useState("");
    const router = useRouter();
    const { id } = params;

    useEffect(() => {
        async function fetchMembrodetails() {
            try {
                const response = await axios.get(`/api/membros/${id}`);
                const membro = response.data;
                setNome(membro.nome);
                setIdade(membro.idade);
                setCargo(membro.cargo);
                setFoto(membro.foto);
                setDescricao(membro.descricao);
            } catch (error) {
                console.error("erro fetching membro details", error);
            }
        }
        if (id) {
            fetchMembrodetails();
        }
    }, [id]);

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
        try {
            await axios.put(`/api/membros/${id}`, { nome, idade, cargo, foto, descricao });
            setNome("");
            setIdade("");
            setCargo("");
            setFoto("");
            setDescricao("");

            router.push(`/membros/${id}`);

        } catch (error) {
            console.error("erro updating membro", error);

        }
    };

    return (
        <div className={styles.containerPai}>
            <Header />

            <div className={styles.divForm}>
                <h1 className={styles.h1}>Atualizar Membro</h1>

                {id ? (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.divInputs}>
                            <label htmlFor="nome">Nome</label>
                            <input
                                className={styles.input}
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}

                            />
                            <p className={styles.pzin}>{errorNome}</p>
                        </div>
                        <div className={styles.divInputs}>
                            <label htmlFor="idade">Idade</label>
                            <input
                                className={styles.input}
                                id="idade"
                                type="text"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}

                            />
                            <p className={styles.pzin}>{errorIdade}</p>
                        </div>
                        <div className={styles.divInputs}>
                            <label htmlFor="cargo">Cargo</label>
                            <input
                                className={styles.input}
                                id="cargo"
                                type="text"
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}

                            />
                            <p className={styles.pzin}>{errorCargo}</p>
                        </div>
                        <div className={styles.divInputs}>

                            <label htmlFor="foto">Foto</label>
                            <input
                                className={styles.input}
                                id="foto"
                                type="text"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}

                            />
                            <p className={styles.pzin}>{errorFoto}</p>
                        </div>
                        <div className={styles.divInputs}>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea
                                className={styles.textarea}
                                id="descricao"
                                type="textarea"
                                cols={20}
                                rows={6}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}

                            />
                            <p className={styles.pzin}>{errorDescricao}</p>
                        </div>
                        <div className={styles.divpaibtn}>
                            <Link href={`/membros`}>
                                <button className={styles.btnv}>Voltar</button>
                            </Link>

                            <button className={styles.btna} type="submit">Atualizar</button>

                        </div>

                    </form>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

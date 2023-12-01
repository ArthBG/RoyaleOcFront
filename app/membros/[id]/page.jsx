"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css"

export default function UpdateMembro({ params }) {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [descricao, setDescricao] = useState("");
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
            <div>
                <Link href={`/membros`}>
                    <button className={styles.botaoV}>Voltar</button>
                </Link>
            </div>
            <div className={styles.divForm}>
                <h1 className={styles.h1}>atualizar membro</h1>

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
                        </div>
                        <div className={styles.divInputs}>
                            <label htmlFor="descricao">Descrição</label>
                            <input
                                className={styles.input}
                                id="descricao"
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </div>
                        <button type="submit">Atualizar
                        </button>
                    </form>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </div>
    );
}

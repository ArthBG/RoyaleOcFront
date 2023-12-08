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
                                required
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
                                required
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
                                required
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
                                required
                            />
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
                                required
                            />
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

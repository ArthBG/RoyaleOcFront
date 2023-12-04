"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './contato.module.css';

export default function Forms() {
    const [contatos, setContatos] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [comentario, setComentario] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envia uma requisição POST para a API com os dados do novo membro.
            await axios.post("/api/contatos", { nome, email, telefone, comentario });
            // Limpa os campos do formulário 
            setNome("");
            setEmail("");
            setTelefone("");
            setComentario("");
        } catch (error) {

            console.error("Error submitting data:", error);
            // Exibe mensagem de erro

        }
    };

    // Buscar a lista de membros quando o componente é montado.
    useEffect(() => {
        async function fetchContatos() {
            try {
                // Realiza uma requisição GET para obter a lista de membros da API.
                const response = await axios.get("/api/contatos");
                // Atualiza o estado com a lista de membros obtida.
                setContatos(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchContatos();
    }, []);


  return (
    <main className={styles.body}>
        <Header />
        <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="Nome"
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                       
                    </div>

                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="Email"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                       
                    </div>

                    <div className={styles.divInput}>
                        <input
                            className={styles.input}
                            placeholder="Telefone"
                            type="text"
                            maxLength={11}
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                       
                    </div>

                    <div className={styles.containerbtn}>


                        <button type="submit" className={styles.btn}>
                            <div className={styles.overlay}></div>
                            <div className={styles.overlay}></div>
                            <div className={styles.overlay}></div>
                            <span>Cadastrar</span>
                        </button >  

                    </div>

                </form >
        </div>
        <Footer />
    </main>
  )
}


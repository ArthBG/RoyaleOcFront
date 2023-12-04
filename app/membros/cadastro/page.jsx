"use client";
// Importações
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./cadastro.module.css";
import Link from "next/link";
import Mensagem from "@/app/components/mensagem/msg";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";


// Componente de registro de novos membros
export default function Register() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [msg, setMsg] = useState("");
    const [descricao, setDescricao] = useState("");
    const [membros, setMembros] = useState([]);

 

    // Função para lidar com o envio do formulário de registro.
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envia uma requisição POST para a API com os dados do novo membro.
            await axios.post("/api/membros", { nome, idade, cargo, foto, descricao });
            // Limpa os campos do formulário 
            setNome("");
            setIdade("");
            setCargo("");
            setFoto("");
            setDescricao("");
        } catch (error) {

            console.error("Error submitting data:", error);
            // Exibe mensagem de erro
            setMsg("Erro ao cadastrar membro. Por favor, preencha todos os campos corretamente.");

        }
    };

    // Buscar a lista de membros quando o componente é montado.
    useEffect(() => {
        async function fetchMembros() {
            try {
                // Realiza uma requisição GET para obter a lista de membros da API.
                const response = await axios.get("/api/membros");
                // Atualiza o estado com a lista de membros obtida.
                setMembros(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMembros();
    }, []);
    // Renderização do componente.
    return (
        <div className={styles.containerPai}>
            <Header />


            <Link href="/membros">
                <button type="submit" className={styles.botaoVoltar}>
                    <div className={styles.overlay}></div>
                    <div className={styles.overlay}></div>
                    <div className={styles.overlay}></div>
                    <span>Voltar</span>
                </button >
            </Link>


            <div className={styles.containerForm}>
                <h1 className={styles.titulo}>Fazer cadastro</h1>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.divInput}>
                        <label className={styles.label} htmlFor="nome">
                            Nome:
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        {msg && nome === "" && <Mensagem msg="Preencha o campo nome!" type="error" />}
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label} htmlFor="idade">
                            Idade:
                        </label>
                        <input
                            className={styles.input}
                            type="number"
                            id="idade"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                            required
                        />
                        {
                            msg ? (idade == "" ? <Mensagem msg="Preencha o campo idade!"
                            type="error" /> : null) : null
                        }
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label} htmlFor="cargo">
                            Cargo:
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="cargo"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            required
                        />
                        {
                            msg ? (cargo == "" ? <Mensagem msg={"Preencha o campo cargo!"} type={"error"} /> : null) : null
                        }
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label} htmlFor="foto">
                            Foto:
                        </label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}
                            required

                        />
                        {
                            msg ? (foto == "" ? <Mensagem msg={"Preencha o campo foto!"} type={"error"} /> : null) : null
                        }
                    </div>


                    <div className={styles.divInput}>
                        <label className={styles.label} htmlFor="descricao">
                            Descrição:
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                        {
                            msg ? (descricao == "" ? <Mensagem msg={"Preencha o campo descricao!"} type={"error"} /> : null) : null
                        }
                    </div>

                    <button type="submit" className={styles.btn}>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlay}></div>
                        <span>Cadastrar</span>
                    </button >

                </form >
            </div >
            <Footer />
        </div >
    );
}
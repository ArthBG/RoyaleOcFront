"use client";
// Importações
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./cadastro.module.css";
import Link from "next/link";



// Componente de registro de novos membros
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



    // Função para lidar com o envio do formulário de registro.
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação dos campos do formulário
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

                        />
                        <p className={styles.msgError}>{errorNome}</p>

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

                        />
                        <p className={styles.msgError}>{errorIdade}</p>
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

                        />
                        <p className={styles.msgError}>{errorCargo}</p>
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


                        />
                        <p className={styles.msgError}>{errorFoto}</p>
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

                        />
                        <p className={styles.msgError}>{errorDescricao}</p>

                    </div>

                    <button type="submit" className={styles.btn}>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlay}></div>
                        <span>Cadastrar</span>
                    </button >

                </form >
            </div >
        </div >
    );
}
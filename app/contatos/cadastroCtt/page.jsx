"use client";

import Link from "next/link";
import Image from "next/image"
import { useEffect, useState } from "react";
import axios from 'axios';
import styles from '../cadastroCtt/page.module.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { useRouter } from 'next/navigation';
export default function Forms() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    let [telefone, setTelefone] = useState("");
    const [comentario, setComentario] = useState("");
    const [contatos, setContatos] = useState([]);
    const [isCreated, setIsCreated] = useState("");
    const [errorNome, setErrorNome] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorTelefone, setErrorTelefone] = useState("");
    const [errorComentario, setErrorComentario] = useState("");

    // Buscar a lista de membros quando o componente é montado.
    useEffect(() => {
        async function fetchContatos() {
            try {
                // Realiza uma requisição GET para obter a lista de membros da API.
                const response = await axios.get("/api/contatos");
                // Atualiza o estado com a lista de membros obtida.
                setContatos(response.data.contatos);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchContatos();
    }, []);


    const validate = () => {
        let hasError = false;
        if (nome == '') {
            setErrorNome("Preencha o campo!");
            setTimeout(() => {
                setErrorNome("");
            }, 3000);
            hasError = true;
        } else if (nome < 2) {
            setErrorNome("O nome deve ter no mínimo 2 caracteres!");
            setTimeout(() => {
                setErrorNome("");
            }, 3000);
            hasError = true;
        } else if (!email.includes('@')) {
            setErrorEmail("O email é inválido!");
            setTimeout(() => {
                setErrorEmail("");
            }, 3000);
            hasError = true;
        } else if (email == '') {
            setErrorEmail("Preencha o Campo!");
            setTimeout(() => {
                setErrorEmail("");
            }, 3000);
            hasError = true;
        } else if (telefone == '') {
            setErrorTelefone("Preencha o campo!");
            setTimeout(() => {
                setErrorTelefone("");
            }, 3000);
            hasError = true;
        }
        //se telefone for menor que 11 ou não for número
        else if (telefone.length < 10 || isNaN(telefone)) {
            setErrorTelefone("O telefone é inválido");
            setTimeout(() => {
                setErrorTelefone("");
            }, 3000);
            hasError = true;
        } else if (comentario == '') {
            setErrorComentario("Preencha o campo!");
            setTimeout(() => {
                setErrorComentario("");
            }, 3000);
            hasError = true;
        }
        if (hasError) {
            return false;
        } else {
            setIsCreated('Criado');
            return true; 
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validate(); // Chama a função de validação

        if (isValid) {
            try {
                const telefoneNumber = Number(telefone);
                console.log("Sending data to API:", { nome, email, telefone: telefoneNumber, comentario });

                // Envia uma requisição POST para a API com os dados do novo membro.
                const response = await axios.post('/api/contatos', { nome, email, telefone: telefoneNumber, comentario });
                console.log("API response:", response.data);
                // Limpa os campos do formulário
                setNome('');
                setEmail('');
                setTelefone('');
                setComentario('');
            } catch (error) {
                console.error('Error creating member:', error);
            }
        }
    };




    return (
        <div className={styles.bg}>
            <Header />
            <main className={styles.main22}>
                <div>
                    <Link href="/contatos">
                        <button type="submit" className={styles.botaovoltar}>
                            DEVELEPORSOCTOPUSAREA
                        </button >
                    </Link>
                    <form onSubmit={handleSubmit} className={styles.divforms}>
                        <h1 className={styles.cadastrotitulo}>Entre em contato</h1>

                        <div>
                            <input
                                placeholder="Nome"
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className={styles.inputs}

                            />
                            <p className={styles.errormessage}>{errorNome}</p>
                        </div>

                        <div>
                            <input
                                placeholder="Email"
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.inputs}

                            />
                            <p className={styles.errormessage}>{errorEmail}</p>
                        </div>

                        <div>
                            <input
                                placeholder="Telefone"
                                type="text"
                                maxLength={11}
                                id="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                className={styles.inputs}

                            />
                            <p className={styles.errormessage}>{errorTelefone}</p>
                        </div>

                        <div>
                            <input
                                placeholder="Comentário"
                                type="text"
                                maxLength={300}
                                id="comentario"
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                                className={styles.inputs}

                            />
                            <p className={styles.errormessage}>{errorComentario}</p>
                        </div>

                        <div className={styles.divbutton1}>
                            <button type="submit" className={styles.botaocadastro}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <span>Cadastrar</span>
                            </button >
                        </div>
                    </form >
                </div>
            </main>
            <Footer />
        </div>
    )
}
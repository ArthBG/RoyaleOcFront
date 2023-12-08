"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function Forms() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [comentario, setComentario] = useState("");
    const [contatos, setContatos] = useState([]);

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
        <div>
            <Header />
            <div>
                <Link href="/">
                    <button type="submit">
                        Voltar
                    </button >
                </Link>
                <form onSubmit={handleSubmit}>

                    <div>
                        <input
                            placeholder="Nome"
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                           
                        />

                    </div>

                    <div>
                        <input
                            placeholder="Email"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                           
                        />

                    </div>

                    <div>
                        <input
                            placeholder="Telefone"
                            type="text"
                            maxLength={11}
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                           
                        />

                    </div>

                    <div>
                        <input
                            placeholder="Comentário"
                            type="text"
                            maxLength={300}
                            id="comentario"
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                           
                        />

                    </div>

                    <Link href="/contatos">
                    <button type="submit">
                        <div></div>
                        <div></div>
                        <div></div>
                        <span>Cadastrar</span>
                    </button >
                    </Link>

                </form >
            </div>
            <Footer />
        </div>
    )
}
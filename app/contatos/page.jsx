"use client";
// Importações
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Page() {
    // Estados para armazenar a lista de membros e dados adicionais.
    const [contatos, setContatos] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    // Função para deletar um comentario.
    const deletar = async (id) => {
        const url = `/api/contatos/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((contato) => contato.id !== id));
            setContatos(contatos.filter((contato) => contato.id !== id));
        } catch (error) {
            console.error("Error deleting contato", error);
        }
    };
    console.log(dados, contatos)

    
    const update = (id) => {
        router.push(`/contatos/${id}`);
    };


    useEffect(() => {
        async function fetchContatos() {
            try {
                // Atualiza os estados com a lista de membros e dados adicionais.
                const response = await axios.get("/api/contatos");
                setContatos(response.data.contatos);
                setDados(response.data.contatos);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchContatos();
    }, []);
    // Renderização do componente.
    return (

        <div>
            <Header />

            <h1>Contatos</h1>

            <Link href="/contatos/cadastroCtt">
                <button type="submit">
                    Voltar
                </button >
            </Link>



            <div>

                {/* Se há dados, exibe a lista de membros; caso contrário, exibe uma mensagem de carregamento ou erro. */}
                {dados && dados.length !== 0 ? (
                    // Se há membros, mapeia e exibe as informações de cada membro.
                    <div>
                        <div>
                            {contatos.map((contato) => (
                                <div key={contato.id}>

                                    <div>
                                        {/*  Informações do comentario */}

                                        <p>
                                            <strong></strong> {contato.nome}
                                        </p>
                                        <p>
                                            <strong>Idade:</strong> {contato.idade}
                                        </p>
                                        <p>
                                            <strong></strong> {contato.cargo}
                                        </p>
                                        <p>
                                            <strong></strong>
                                            <img src={contato.foto} width={200} height={200} />
                                        </p>
                                        <p>
                                            <strong>Descrição:</strong> {contato.descricao}
                                        </p>

                                        <div>

                                            <button onClick={() => deletar(contato.id)}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <span>Deletar</span>
                                            </button >

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>
                        <div>
                            <Link href="/contatos/cadastroCtt">
                                <button type="submit">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <span>Cadastro</span>
                                </button >
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p>carregando..</p>
                )}
            </div>
            <Footer />
        </div>
    );
}
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
/* import dashboardInput from "../components/dashInput"; */

export default function UptadeMembro({ params }) {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [descricao, setDescricao] = useState("");
    const router = useRouter();
    const { id } = params;

    useEffect(() => {
        async function fetchMembro() {
            try {
                const response = await axios.get(`/api/membros/${id}`);
                const membro = response.data;
                setNome(membro.nome);
                setIdade(membro.idade);
                setCargo(membro.cargo);
                setFoto(membro.foto);
                setDescricao(membro.descricao);

            } catch (error) {
                console.log("error fetching membro details", error);
            }

        }
        if (id) {
            fetchMembro();
        }

    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/membros/${id}`, { nome, idade, cargo, foto, descricao });
            router.push(`/membros/${id}`);

        } catch (error) {
            console.log("error updating membro", error);
        }
    };

    return (

        <div className="paidetodos">
            <div className="container">
                <h1> Membro</h1>
                <Link href={`/membros`}>
                    <button>Voltar</button>
                </Link>
            </div>

            <div>
                <h1>Atualizar Membro</h1>
                {id ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nome</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Idade</label>
                            <input
                                type="text"
                                id="idade"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Cargo</label>
                            <input
                                type="text"
                                id="cargo"
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Foto</label>
                            <input
                                type="text"
                                id="foto"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Descrição</label>
                            <input
                                type="text"
                                id="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Atualizar</button>
                    </form>
                ) : (
                    <p> Carregando..</p>

                )}
            </div>
        </div>
    );
}

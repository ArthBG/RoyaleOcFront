"use client";

import { UseState, UseEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function UptadeMembro({ params }) {
    const [nome, setNome] = UseState("");
    const [idade, setIdade] = UseState("");
    const [cargo, setCargo] = UseState("");
    const [foto, setFoto] = UseState("");
    const [descricao, setDescricao] = UseState("");
    const router = useRouter();
    const { id } = params;

    UseEffect(() => {
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
            router.push("/membros");

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
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Idade</label>
                            <input
                                type="text"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Cargo</label>
                            <input
                                type="text"
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Foto</label>
                            <input
                                type="text"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Descrição</label>
                            <input
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </div>
                        <button type="submit">Atualizar</button>
                    </form>
                ) : (
                <p> Carregando...</p>

            )
                }

                  </div>
                  
                   </div>
    )
    


}

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default async function Registros() {
    const [infos, setInfos] = useState([]);
    const [membros, setMembros] = useState([]);
    const router = useRouter();

    const deletar = async (id) => {
        const url = `/api/membros/${id}`;
    try {
        await axios.delete(url);
        setInfos(infos.filter((info) => info.id !== id));
    } catch (error) {
        console.log("error", error);
    };
    };
    const update = async (id) => {
        router.push(`/membros/${id}`);
    };

    useEffect(() => {
        async function fetchMembros() {
            try {
                const response = await axios.get("/api/membros");
                setMembros(response.data);
                setInfos(response.data);
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchMembros();
    }, []);

    return (
        <div>
            <div>
                <Link href="/membros">
                    <button>
                        cadastrar membro
                    </button>
                </Link>
            </div>

            <div>
                <h1>membros</h1>
                {infos.length ? (
                    <div>
                        {membros.map((membro) => (
                            <div key={membro.id}>
                                <div>
                                    <p>
                                        <strong>ID:</strong>{membro.id}
                                    </p>
                                    <p>
                                        <strong>Nome:</strong>{membro.nome}
                                    </p>
                                    <p>
                                        <strong>Idade:</strong>{membro.idade}
                                    </p>
                                    <p>
                                        <strong>Cargo:</strong>{membro.cargo}

                                    </p>
                                    <p>
                                        <strong>Foto:</strong>{membro.foto}
                                    </p>
                                    <p>
                                        <strong>Descrição:</strong>{membro.descricao}
                                    </p>
                                </div>
                                <div >
                                    <button onClick={() => deletar(membro.id)}>

                                        Deletar

                                    </button>
                                    <button onClick={() => update(membro.id)}>

                                        Atualizar

                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                <p>{infos.message ? infos.message : "carregando"}</p>
                )}
            </div>

        </div>
    );
}
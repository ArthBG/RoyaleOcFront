"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function Register() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [membros, setMembros] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/membros", { nome, idade, cargo, foto, descricao });
            setNome("");
            setIdade("");
            setCargo("");
            setFoto("");
            setDescricao("");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    useEffect(() => {
        async function fetchMembros() {
            try {
                const response = await axios.get("/api/membros");
                setMembros(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMembros();
    }, []);
    return (
        <div>

            <div>
                <Link href="/membros">
                    <button >
                        Voltar para membros
                    </button>
                </Link>
            </div>

            <div>
                <h1>Cadastrar novo integrante</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">
                            Nome:
                        </label>
                        <input
                           
                            type="text"
                            id="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="idade">
                            Idade:
                        </label>
                        <input
                           
                            type="number"
                            id="idade"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="cargo">
                            Cargo:
                        </label>
                        <input
                           
                            type="text"
                            id="cargo"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="foto">
                            Foto:
                        </label>
                        <input
                           
                            type="text"
                            id="foto"
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="descricao">
                            Descrição:
                        </label>
                        <input
                           
                            type="text"
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>


                    <button
                        type="submit"

                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
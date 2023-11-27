"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default async function Registros() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [membros, setMembros] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    try {
        await axios.post("/api/membros", { nome, idade, cargo, foto, descricao, });
        setNome("");
        setIdade("");
        setCargo("");
        setFoto("");
        setDescricao("");
    }
    catch (error) {
        console.log("error", error);

    }
}

useEffect(() => {
    async function fetchMembros() {
        try {
            const response = await axios.get("/api/membros");
            fetchMembros(response.data);
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
                    voltar para membro
                </button>
            </Link>

        </div>
        <div>
            <h1>cadastrar membro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label>idade</label>
                    <input
                        type="text"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>
                <div>
                    <label>cargo</label>
                    <input
                        type="text"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                    />
                </div>
                <div>
                    <label>foto</label>
                    <input
                        type="text"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                    />
                </div>
                <div>
                    <label>descricao</label>
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>

                <button type="submit">
                    cadastrar
                </button>

            </form>

        </div>
    </div>

)
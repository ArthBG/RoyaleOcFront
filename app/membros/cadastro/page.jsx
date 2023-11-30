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
"use client";
// Importações
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./membro.module.css";
import Link from "next/link";

export default function Page() {
  // Estados para armazenar a lista de membros e dados adicionais.
  const [membros, setMembros] = useState([]);
  const [dados, setDados] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function fetchMembros() {
      try {
        // Atualiza os estados com a lista de membros e dados adicionais.
        const response = await axios.get("/api/membros");
        setMembros(response.data.membros);
        setDados(response.data.membros);
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
        <Link href="/membros/cadastro">
          <button>Cadastrar membro</button>
        </Link>
      </div>

      <div>
        <h1>Membros</h1>
        {/* Se há dados, exibe a lista de membros; caso contrário, exibe uma mensagem de carregamento ou erro. */}
        {dados.length ? (
          // Se há membros, mapeia e exibe as informações de cada membro.
          <div>
            {membros.map((membro) => (
              <div key={membro.id}>
                <div>
                  {/*  Informações do membro */}
                  <p>
                    <strong>ID:</strong> {membro.id}
                  </p>
                  <p>
                    <strong>Nome:</strong> {membro.nome}
                  </p>
                  <p>
                    <strong>Idade:</strong> {membro.idade}
                  </p>
                  <p>
                    <strong>Cargo:</strong> {membro.cargo}
                  </p>
                  <p>
                    <strong>Foto:</strong> {membro.foto}
                  </p>
                  <p>
                    <strong>Descrição:</strong> {membro.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>{dados.message ? dados.message : "Carregando..."}</p>
        )}
      </div>
    </div>
  );
}

"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const [membros, setMembros] = useState([]);
  const [dados, setDados] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function fetchMembros() {
      try {
        const response = await axios.get("/api/membros");
        setMembros(response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMembros();
  }, []);

  return (
    <div>
      <div>
        <Link href="/membros/cadastro">
          <button>Cadastrar membro</button>
        </Link>
      </div>

      <div>
        <h1>Membros</h1>

        {dados.length ? (
          <div>
            {membros.map((membro) => (
              <div key={membro.id}>
                <div>
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

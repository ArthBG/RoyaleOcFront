"use client"; // Diretiva de uso do cliente (nota: isso parece ser um comentário não padrão, talvez específico para um ambiente ou ferramenta)

import { useState, useEffect } from "react"; // Importação de Hooks do React para manipulação de estados e efeitos
import axios from "axios"; // Importação do Axios para realizar requisições HTTP
import { useRouter } from "next/navigation"; // Importação do useRouter do Next.js para navegação dinâmica
import Link from "next/link"; // Importação do Link do Next.js para navegação entre páginas
import styles from "./page.module.css"; // Importação de estilos CSS para o componente
import Header from "@/app/components/header/header"; // Componente de cabeçalho
import Footer from "@/app/components/footer/footer"; // Componente de rodapé

export default function UpdateMembro({ params }) {
    // Declaração de variáveis de estado para cada campo do formulário e inicialização dos valores
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [descricao, setDescricao] = useState("");
    const router = useRouter(); // Inicialização do useRouter para navegação
    const { id } = params; // Extração do parâmetro de rota "id"

    // Efeito para buscar os detalhes do membro com base no "id"
    useEffect(() => {
        async function fetchMembrodetails() {
            try {
                // Requisição GET para obter os detalhes do membro com o "id" especificado
                const response = await axios.get(`/api/membros/${id}`);
                const membro = response.data;

                // Definição dos valores dos campos do formulário com base nos dados recebidos
                setNome(membro.nome);
                setIdade(membro.idade);
                setCargo(membro.cargo);
                setFoto(membro.foto);
                setDescricao(membro.descricao);
            } catch (error) {
                console.error("Erro ao buscar detalhes do membro", error);
            }
        }

        // Verificação se há um "id" válido antes de buscar os detalhes do membro
        if (id) {
            fetchMembrodetails();
        }
    }, [id]);

    // Função para lidar com o envio do formulário de atualização do membro
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Requisição PUT para atualizar os dados do membro com o "id" especificado
            await axios.put(`/api/membros/${id}`, { nome, idade, cargo, foto, descricao });

            // Limpeza dos campos do formulário após a atualização bem-sucedida
            setNome("");
            setIdade("");
            setCargo("");
            setFoto("");
            setDescricao("");

            // Redirecionamento para a página de detalhes do membro atualizado
            router.push(`/membros/${id}`);
        } catch (error) {
            console.error("Erro ao atualizar membro", error);
        }
    };

    // Retorno do componente com estrutura condicional para exibir o formulário ou mensagem de carregamento

    return (
        <div className={styles.containerPai}>
            <Header />
            <main className={styles.main22}>
            <div className={styles.divForm}>
                <h1 className={styles.h1}>Atualizar Membro</h1>

                {id ? (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.divInputs}>
                            <label htmlFor="nome">Nome</label>
                            <input
                                className={styles.input}
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.divInputs}>
                            <label htmlFor="idade">Idade</label>
                            <input
                                className={styles.input}
                                id="idade"
                                type="text"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.divInputs}>
                            <label htmlFor="cargo">Cargo</label>
                            <input
                                className={styles.input}
                                id="cargo"
                                type="text"
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.divInputs}>

                            <label htmlFor="foto">Foto</label>
                            <input
                                className={styles.input}
                                id="foto"
                                type="text"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.divInputs}>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea
                                className={styles.textarea}
                                id="descricao"
                                type="textarea"
                                cols={20}
                                rows={6}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.divpaibtn}>
                            <Link href={`/membros`}>
                                <button className={styles.btnv}>Voltar</button>
                            </Link>

                            <button className={styles.btna} type="submit">Atualizar</button>
                            
                        </div>

                    </form>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
            </main>
            <Footer />
        </div>
    );
}

"use client";
// Importações
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Page() {
    // Estados para armazenar a lista de membros e dados adicionais.
    const [membros, setMembros] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    // Função para deletar um membro.
    const deletar = async (id) => {
        const url = `/api/membros/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((membro) => membro.id !== id));
            setMembros(membros.filter((membro) => membro.id !== id));
        } catch (error) {
            console.error("Error deleting membro", error);
        }
    };
    console.log(dados, membros)

    const update = (id) => {
        router.push(`/membros/${id}`);
    };

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

        <div className={styles.container}>
            <Header/>
            <h1 className={styles.h1}>Membros</h1>
            <div className={styles.divPai}>

                {/* Se há dados, exibe a lista de membros; caso contrário, exibe uma mensagem de carregamento ou erro. */}
                {dados.length ? (
                    // Se há membros, mapeia e exibe as informações de cada membro.
                    <div>
                    <div className={styles.map}>
                        {membros.map((membro) => (
                            <div key={membro.id}>
                               
                                <div className={styles.divpaiinfos}>
                                    {/*  Informações do membro */}
                             
                                    <p className={styles.infos}>
                                        <strong></strong> {membro.nome}
                                    </p>
                                    <p className={styles.infos}>
                                        <strong>Idade:</strong> {membro.idade}
                                    </p>
                                    <p className={styles.infos}>
                                        <strong></strong> {membro.cargo}
                                    </p>
                                    <p className={styles.infosImg}>
                                        <strong></strong>
                                        <img className={styles.img} src={membro.foto} width={200} height={200} />
                                    </p>
                                    <p className={styles.descricao}>
                                        <strong>Descrição:</strong> {membro.descricao}
                                    </p>
                                    
                                    <div className={styles.divbtn}>

                                        <button className={styles.btndelete} onClick={() => deletar(membro.id)}>
                                            <div className={styles.overlay}></div>
                                            <div className={styles.overlay}></div>
                                            <div className={styles.overlay}></div>
                                            <span>Deletar</span>
                                        </button >

                                        <button className={styles.btnupdate} onClick={() => update(membro.id)}>
                                            <div className={styles.overlay}></div>
                                            <div className={styles.overlay}></div>
                                            <div className={styles.overlay}></div>
                                            <span>Editar</span>
                                        </button >

                                    </div>
                                    
                                </div>
                               
                            </div>
                           
                        ))}
                        
                    </div>
                    <div className={styles.cria}>
                            <Link href="/membros/cadastro">
                                <button type="submit" className={styles.btncreate}>
                                    <div className={styles.overlay}></div>
                                    <div className={styles.overlay}></div>
                                    <div className={styles.overlay}></div>
                                    <span>Cadastro</span>
                                </button >
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p>carregando..</p>
                )}
            </div>
            <Footer/>
        </div>
    );
}
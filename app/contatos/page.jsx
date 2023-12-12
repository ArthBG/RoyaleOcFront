"use client";
// Importações required
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "../contatos/page.module.css";

export default function Page() {
    // Estados para armazenar a lista de contatos e dados adicionais.
    const [contatos, setContatos] = useState([]);
    const router = useRouter();

//  //    Função para deletar um comentario.
    const deletar = async (id) => {
          const url = `/api/contatos/${id}`;
          try {
              await axios.delete(url);
              setContatos(contatos.filter((contato) => contato.id !== id));
          } catch (error) {
              console.error("Error deleting contato", error);
          }
   };

    const editar = (id) => {
        router.push(`/contatos/${id}`);
    };

    useEffect(() => {
             async function fetchContatos() {
                 try {
                    //  Atualiza os estados com a lista de membros e dados adicionais.
                     const response = await axios.get("/api/contatos");
                     setContatos(response.data.contatos);
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    }
                }
                
                fetchContatos();
            }, []);
    // Renderização do componente.
    return (

        <div className={styles.bg}>
            <Header/>
            <h1 className={styles.cadastrotitulo}>Contatos registrados:</h1>

            <Link href="/contatos/cadastroCtt">
                <div className={styles.divbutton1}>
                    <button type="submit" className={styles.botaocadastro} >
                        Voltar
                    </button >
                </div>
                </Link>
            <div>
                    <div>
                    <div>
                    { contatos && contatos.map((contato) => (
                             <div key={contato.id}>
                               
                               <div>    
                                      {/*  Informações do comentario */}
                                         <p>
                                             <strong></strong> {contato.nome}
                                         </p>
                                         <p>
                                             <strong>Idade:</strong> {contato.email}
                                         </p>
                                         <p>
                                             <strong></strong> {contato.telefone}
                                         </p>
                                         <p>
                                             <strong>Comentário:</strong> {contato.comentario}
                                         </p>
                                    
                                    <div>

                                        <button onClick={() => deletar(contato.id)}>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <span>Deletar</span>
                                        </button >

                                        
                                        <button onClick={() => editar(contato.id)}>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <span>Editar</span>
                                        </button >
        

                                    </div>
                                    
                                </div>
                               
                            </div>
                           
                        ))}
                        
                    </div>
                    <div>
                            <Link href="/contatos/cadastroCtt"  className={styles.divbutton1}>
                                <button type="submit" className={styles.botaocadastro}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <span>Editar</span>
                                </button >
                            </Link>
                        </div>
                    </div>

            </div>
            <Footer/>
        </div>
    );
}


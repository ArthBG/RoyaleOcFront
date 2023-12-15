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
    const [show, setShow] = useState(true);
    const [showInput, setShowInput] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const router = useRouter();
    const prosseguir = () => {
        setShowInput(true);
        setShow(false);
    }

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value); 
    }

    const verifyPassword = () => {
        if(contatos.length > 0) {
        if (passwordValue === 'contatooc') {
            prosseguir();
        } else {
            router.push('/contatos/cadastroCtt');
        }
    } else {
        router.push('/contatos/cadastroCtt');
    }
    }
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
        // Componente de cabeçalho
        <div className={styles.bg}>
            <Header />
            <main className={styles.main22}>
            {/* Seção de introdução */}
            
            <div className={styles.prosseguir} style={{ display: show ? 'block' : 'none' }} value={show}>
                <div className={styles.containerInputs}>
                <h1 className={styles.titulo}>DEVELOPERS AREA</h1>
            <input
                className={styles.inputSend}
                type="text"
                placeholder="Senha de acesso"
                value={passwordValue} 
                onChange={handlePasswordChange} 
            />
            <button className={styles.botao} onClick={verifyPassword}>
                Enviar
            </button>
                </div>
            </div>
            {/* Se o input for validado exibe */}
            <div className={styles.prosseguir} style={{ display: showInput ? 'block' : 'none' }} value={showInput}>
                <h1 className={styles.cadastrotitulo}>Recebidos:</h1>

                <Link href="/contatos/cadastroCtt">
                    <div className={styles.divbutton1}>
                        <button type="submit" className={styles.botaocadastro} >
                            Voltar
                        </button >
                    </div>
                </Link>
                <div>

                    <div className={styles.containerAll}>
                        <div className={styles.containerImg}>
                            <Image src={"/images/barbarocontato.png"} width={450} height={350} />
                        </div>
                        <div className={styles.containerForm}>
                            {contatos && contatos.map((contato) => (
                                <div key={contato.id}>
                                    <div className={styles.divContainsContactAll}>
                                    <div className={styles.divContainsContact}>
                                        {/*  Informações do comentario */}
                                        <div className={styles.divContact}> 
                                        <strong>Nome: </strong>
                                        <p>
                                            {contato.nome}
                                        </p>
                                        </div>
                                        <div className={styles.divContact}>
                                        <strong>E-mail:</strong>
                                        <p>
                                            {contato.email}
                                        </p>
                                        </div>
                                        <div className={styles.divContact}>
                                        <strong>Telefone: </strong>
                                        <p>
                                            {contato.telefone}
                                        </p>
                                        </div>
                                        <div className={styles.divContact}>
                                        <strong>Comentário:</strong>
                                        <p>
                                            {contato.comentario}
                                        </p>
                                        </div>
                                        </div>
                                        <div className={styles.btns}>

                                            <button className={styles.delete} onClick={() => deletar(contato.id)}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <span>Deletar</span>
                                            </button >


                                            <button className={styles.edit} onClick={() => editar(contato.id)}>
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
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}


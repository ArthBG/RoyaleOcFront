"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { useRouter } from 'next/navigation'

export default function updateForms({params}) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    let [telefone, setTelefone] = useState("");
    const [comentario, setComentario] = useState("");
    const [contatos, setContatos] = useState([]);

    const [errorNome, setErrorNome] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorTelefone, setErrorTelefone] = useState("");
    const [errorComentario, setErrorComentario] = useState("");
    const { id } = params;
    const router = useRouter();

        // Buscar a lista de membros quando o componente é montado.
        useEffect(() => {
            async function fetchContatos() {
                try {
                    // Realiza uma requisição GET para obter a lista de membros da API.
                    const response = await axios.get(`/api/contatos/${id}`);
                    const contato = response.data
                    setNome(contato.nome);
                    setEmail(contato.email);
                    setTelefone(contato.telefone);
                    setComentario(contato.comentario);

                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            if(id){
                fetchContatos()
            }
        }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nome == ''){
            setErrorNome("Preencha o campo!");
            setTimeout(() => {
                setErrorNome("");
            },3000);
            return;
        } else if (nome < 2){
            setErrorNome("O nome deve ter no mínimo 2 caracteres!");
            setTimeout(() => {
                setErrorNome("");
            },3000);
        }   if (!email.includes('@')){
            setErrorEmail("O email é inválido!");
            setTimeout(() => {
                setErrorEmail("");
            },3000);
            return;
        } else if (email == '') {
            setErrorEmail("Preencha o Campo!");
            setTimeout(() => {
                setErrorEmail("");
            },3000);
        } if (telefone == ''){
            setErrorTelefone("Preencha o campo!");
            setTimeout(() => {
                setErrorNome("");
            },3000);
            return;
        } else if (telefone < 10){
            setErrorTelefone("O telefone é inválido");
            setTimeout(() => {
                setErrorTelefone("");
            },3000);
        }


        try {
            telefone = Number(telefone);
            // Envia uma requisição POST para a API com os dados do novo membro.
            await axios.put(`/api/contatos/${id}`, { nome, email, telefone, comentario});
            router.push(`/contatos/${id}`)
            // Limpa os campos do formulário 
            setNome("");
            setEmail("");
            setTelefone("");
            setComentario("");
        } catch (error) {

            console.error("Error submitting data:", error);

            setMsg("Erro ao cadastrar membro. Por favor, preencha todos os campos corretamente.");
            // Exibe mensagem de erro

        }
    };




    return (
        <div>
            <Header />
            <div>
                <Link href="/contatos">
                    <button type="submit">
                        Voltar
                    </button >
                </Link>
                <form onSubmit={handleSubmit}>

                    <div>
                        <input
                            placeholder="Nome"
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                           
                        />
                        <p>{errorNome}</p>
                    </div>

                    <div>
                        <input
                            placeholder="Email"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                           
                        />
                        <p>{errorEmail}</p>
                    </div>

                    <div>
                        <input
                            placeholder="Telefone"
                            type="text"
                            maxLength={11}
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                           
                        />
                         <p>{errorTelefone}</p>
                    </div>

                    <div>
                        <input
                            placeholder="Comentário"
                            type="text"
                            maxLength={300}
                            id="comentario"
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                           
                        />
                         <p>{errorComentario}</p>
                    </div>

                    <button type="submit">
                        <div></div>
                        <div></div>
                        <div></div>
                        <span>Cadastrar</span>
                    </button >

                </form >
            </div>
            <Footer />
        </div>
    )
}
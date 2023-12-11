"use client";
// Importações required
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

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

        <div>
            <Header/>
            <h1>Contatos</h1>

            <Link href="/contatos/cadastroCtt">
                    <button type="submit">
                        Voltar
                    </button >
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
                            <Link href="/contatos/cadastroCtt">
                                <button type="submit">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <span>Cadastro</span>
                                </button >
                            </Link>
                        </div>
                    </div>

            </div>
            <Footer/>
        </div>
    );
}




// "use client";
// // Importações
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import Header from "../components/header/header";
// import Footer from "../components/footer/footer";

// export default function Page() {
//     // Estados para armazenar a lista de membros e dados adicionais.
//     const [contatos, setContatos] = useState([]);
//     const router = useRouter();

//     // Função para deletar um comentario.
//     const deletar = async (id) => {
//         const url = `/api/contatos/${id}`;
//         try {
//             await axios.delete(url);
//             setContatos(contatos.filter((contato) => contato.id !== id));
//         } catch (error) {
//             console.error("Error deleting contato", error);
//         }
//     };
//     console.log(contatos)


//     const update = (id) => {
//         router.push(`/contatos/${id}`);
//     };


//     useEffect(() => {
//         async function fetchContatos() {
//             try {
//                 // Atualiza os estados com a lista de membros e dados adicionais.
//                 const response = await axios.get("/api/contatos");
//                 setContatos(response.data.contatos);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         }

//         fetchContatos();
//     }, []);

//     console.log({ contatos })
//     // Renderização do componente.
//     return (

//         <div>
//             <Header />

//             <h1>comentario enviado com sucesso</h1>

//             <h1>Seus comentários</h1>





//             <div>
//                 <div>
//                     <div>
//                         {
//                             contatos && contatos.map((contato) => (
//                                 <div key={contato.id}>

//                                     <div>
//                                         {/*  Informações do comentario */}

//                                         <p>
//                                             <strong></strong> {contato.nome}
//                                         </p>
//                                         <p>
//                                             <strong>Idade:</strong> {contato.email}
//                                         </p>
//                                         <p>
//                                             <strong></strong> {contato.telefone}
//                                         </p>
//                                         <p>
//                                             <strong>Descrição:</strong> {contato.comentario}
//                                         </p>

//                                         <div>

//                                             <button onClick={() => deletar(contato.id)}>
//                                                 <div></div>
//                                                 <div></div>
//                                                 <div></div>
//                                                 <span>Deletar</span>
//                                             </button >

//                                         </div>

//                                     </div>

//                                 </div>
//                             ))}
//                     </div>
//                     <div>
//                         <Link href="/contatos/cadastroCtt">
//                             <button type="submit">
//                                 <div></div>
//                                 <div></div>
//                                 <div></div>
//                                 <span>Cadastro</span>
//                             </button >
//                         </Link>

//                         <Link href="/contatos/cadastroCtt">
//                             <button type="submit">
//                                 Voltar
//                             </button >
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }
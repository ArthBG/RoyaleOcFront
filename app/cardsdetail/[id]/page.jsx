"use client"
//importacoes
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';

// Componente funcional para exibir detalhes da carta
const CardDescription = ({ params }) => {
    // Estado para armazenar os dados da carta
    const [card, setCard] = useState([]);
    const { id } = params;

    // useEffect para buscar os dados da carta quando 'id' muda
    useEffect(() => {
        const cardsFetch = async () => {
            try {
                // Busca os dados da carta na API usando axios
                const response = await axios.get(`/api/cards/${id}`);
                // Atualiza o estado 'card' com os dados obtidos
                setCard(response.data);
            } catch (error) {
                throw error;
            }
        };
        // Chama a função 'cardsFetch' quando 'id' muda
        cardsFetch();
    }, [id]);

    // Estrutura para renderizar detalhes da carta usando React-Responsive-Carousel e React-Tabs
    return (
        <div className={styles.container}>
            <Tabs>
                <TabList>
                    <Tab>Detalhes</Tab>
                    <Tab>sobre</Tab>
                </TabList>

                <TabPanel>
                    <p className={styles.info}> {card.name ? card.name : "Não disponível"}</p>
                    <img src={card.image} alt={`Imagem da Carta ${card.name}`} />
                    <p className={styles.info}>Descrição: {card.description ? card.description : "Não disponível"}</p>


                    <Carousel showArrows={true}>
                        <div>
                            <img
                                src={"https://designdobom.com.br/wp-content/uploads/2018/09/imagem_para_sexta_51.jpg"} width={50} height={100} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                        <div>
                            <img src={"https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"} width={50} height={100} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                        <div>
                            <img src={"https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg?w=2000"} width={50} height={100} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                    </Carousel>
                </TabPanel>

                <TabPanel>

                    <div className={styles.infosCartas}>
                        <img src={card.image} alt={`Imagem da Carta ${card.name}`} />

                        {card.name && <p className={styles.info}> {card.name}</p>}

                        {card.hp && (
                            <div className={styles.cardinfo}>
                                <img src="https://3.bp.blogspot.com/-B5-R55pQwhg/Vqnjm_VreOI/AAAAAAAAlh0/efGRL8l45Yw/s1600/icone-informacoes-pontos-de-vida-hp-clash-royale.png" alt={`imagem pontos de vida da carta ${card.name}`} />
                                <p className={styles.info}>Pontos de Vida: {card.hp}</p>
                            </div>
                        )}
                        {card.damage && (
                            <div className={styles.cardinfo}>
                                <img src="https://4.bp.blogspot.com/-3KYGQA_xjJs/VqnjmN1W2GI/AAAAAAAAlhk/iHiWEGOTDrc/s1600/icone-informacoes-dano-clash-royale.png" alt={`imagem dano da carta ${card.name}`} />
                                <p className={styles.info}>Dano: {card.damage}</p>
                            </div>
                        )}
                        {card.target && (
                            <div className={styles.cardinfo}>
                                <img src="https://1.bp.blogspot.com/-yfN5L4q_hso/VqnjmM79khI/AAAAAAAAlhc/w-z1KNkeVFk/s1600/icone-informacoes-alvo-clash-royale.png" alt={`imagem alvos da carta ${card.name}`} />
                                <p className={styles.info}>Alvos: {card.target}</p>
                            </div>
                        )}
                        {card.range && (
                            <div className={styles.cardinfo}>
                                <img src="https://1.bp.blogspot.com/-P3qvudoFOq4/VqnjmEvSMyI/AAAAAAAAlhg/i2lnF3O33u4/s1600/icone-informacoes-alcance-clash-royale.png" alt={`imagem alcance da carta ${card.name}`} />
                                <p className={styles.info}>Alcance: {card.range}</p>
                            </div>
                        )}
                        {card.damagepersecond && (
                            <div className={styles.cardinfo}>
                                <img src="https://4.bp.blogspot.com/-1iuhkFFUgDs/VrJYlHnGJKI/AAAAAAAAlt8/cbRFvQ1m7Uk/s1600/icone-informacoes-dano-por-segundo-clash-royale.png" alt={`imagem dano por segundo da carta ${card.name}`} />
                                <p className={styles.info}>Dano por Segundo: {card.damagepersecond}</p>
                            </div>
                        )}
                        {card.impactspeed && (
                            <div className={styles.cardinfo}>
                                <img src="https://4.bp.blogspot.com/-6U6xolcsAkQ/Vqnjm5PYnYI/AAAAAAAAlh4/Sx6af8HTSdk/s1600/icone-informacoes-velocidade-de-dano-clash-royale.png" alt={`imagem velocidade de dano da carta ${card.name}`} />
                                <p className={styles.info}>Velocidade do Impacto: {card.impactspeed}</p>
                            </div>
                        )}
                        {card.speed && (
                            <div className={styles.cardinfo}>
                                <img src="https://4.bp.blogspot.com/-dlkPifI704Y/VrJXPKAVqmI/AAAAAAAAltw/tx8a9KDG5a0/s200/icone-velocidade-de-ataque-clash-royale.png" alt={`imagem de velocidade de ataque da carta ${card.name}`} />
                                <p className={styles.info}>Velocidade: {card.speed}</p>
                            </div>
                        )}
                        {card.damageondeath && (
                            <div className={styles.cardinfo}>
                                <img src="https://4.bp.blogspot.com/-3KYGQA_xjJs/VqnjmN1W2GI/AAAAAAAAlhk/iHiWEGOTDrc/s1600/icone-informacoes-dano-clash-royale.png" alt={`imagem dano da carta ${card.name}`} />
                                <p className={styles.info}>Dano na morte: {card.damageondeath}</p>
                            </div>
                        )}

                        {card.unities && (
                            <div className={styles.cardinfo}>
                                <img src="https://2.bp.blogspot.com/-e3BP1BYjCzI/VrJXPBH4WKI/AAAAAAAAlts/kGVTkjZF9zQ/s1600/icone-quantidade-clash-royale.png" alt={`imagem unidade da carta ${card.name}`} />
                                <p className={styles.info}>Unidades: {card.unities}</p>
                            </div>
                        )}
                        {card.radius && (
                            <div className={styles.cardinfo}>
                                <img src="https://1.bp.blogspot.com/-gYO2Z6Fkh6U/VrD1crbxFdI/AAAAAAAAlrE/8YoZynm9Tis/s200/icone-informacoes-raio-clash-royale.png" alt={`imagem raio da carta ${card.name}`} />
                                <p className={styles.info}>Raio: {card.radius}</p>
                            </div>
                        )}
                        {card.deploytime && (
                            <div className={styles.cardinfo}>
                                <img src="https://static.wikia.nocookie.net/clashroyale/images/2/21/DeployTime.png/revision/latest/scale-to-width-down/26?cb=20160619174333.png" alt={`imagem tempo de implantação da carta ${card.name}`} />
                                <p className={styles.info}>Tempo de Implantação: {card.deploytime}</p>
                            </div>
                        )}

                        {card.damageonarea && (
                            <div className={styles.cardinfo}>
                                <img src="https://cdn.statsroyale.com/images/attribs/areadamage.png" alt={`imagem dano em area da carta ${card.name}`} />
                                <p className={styles.info}>Dano em Area: {card.damageonarea}</p>
                            </div>
                        )}
                        {card.deploytime && (
                            <div className={styles.cardinfo}>
                                <img src="https://1.bp.blogspot.com/-OMAp4OqQVbE/VyiYzwZUcEI/AAAAAAAAow0/JfpWhtc62qUbVdD6YYemWm-T5ltCWZpAwCLcB/s1600/tempo-de-mobilizacao-clash-royale.png" alt={`imagem tempo de implantação da carta ${card.name}`} />
                                <p className={styles.info}>Tempo de Implantação: {card.deploytime}</p>
                            </div>
                        )}
                        {card.spawnspeed && (
                            <div className={styles.cardinfo}>
                                <img src="https://cdn.statsroyale.com/images/attribs/spawnspeed.png" alt={`imagem velocidade de surgimento da carta ${card.name}`} />
                                <p className={styles.info}>Velocidade de Surgimento: {card.spawnspeed}</p>
                            </div>
                        )}



                    </div>

                </TabPanel>
            </Tabs>



        </div>
    );
};

export default CardDescription;
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

const CardDescription = ({ params }) => {
    const [card, setCard] = useState([]);
    const { id } = params;

    useEffect(() => {
        const cardsFetch = async () => {
            try {
                const response = await axios.get(`/api/cards/${id}`);
                setCard(response.data);
            } catch (error) {
                throw error;
            }
        };

        cardsFetch();
    }, [id]);

    return (
        <div className={styles.container}>
            <Tabs>
                <TabList>
                    <Tab>Nome</Tab>
                    <Tab>Imagem</Tab>
                </TabList>

                <TabPanel>
                    <img src={card.image} alt={`Imagem da Carta ${card.name}`} />
                </TabPanel>
                <TabPanel>
                    <Carousel showArrows={true}>
                        <div>
                            <img src={"https://designdobom.com.br/wp-content/uploads/2018/09/imagem_para_sexta_51.jpg"} width={50} height={100} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                        <div>
                            <img src={"https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"} width={50} height={100} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                        <div>
                            <img src={"https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg?w=2000"} width={50} height={100} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                    </Carousel>

                </TabPanel>
            </Tabs>

            <div className={styles.infosCartas}>
                {card.name && <p className={styles.info}> {card.name}</p>}
                {card.hp && (
                    <>
                        <img src="https://3.bp.blogspot.com/-B5-R55pQwhg/Vqnjm_VreOI/AAAAAAAAlh0/efGRL8l45Yw/s1600/icone-informacoes-pontos-de-vida-hp-clash-royale.png" alt={`imagem pontos de vida da carta ${card.name}`} />
                        <p className={styles.info}>Pontos de Vida: {card.hp}</p>
                    </>
                )}
                {card.damage && (
                    <>
                        <img src="https://4.bp.blogspot.com/-3KYGQA_xjJs/VqnjmN1W2GI/AAAAAAAAlhk/iHiWEGOTDrc/s1600/icone-informacoes-dano-clash-royale.png" alt={`imagem dano da carta ${card.name}`} />
                        <p className={styles.info}>Dano: {card.damage}</p>
                    </>
                )}
                {card.target && (
                    <>
                        <img src="https://1.bp.blogspot.com/-yfN5L4q_hso/VqnjmM79khI/AAAAAAAAlhc/w-z1KNkeVFk/s1600/icone-informacoes-alvo-clash-royale.png" alt={`imagem alvos da carta ${card.name}`} />
                        <p className={styles.info}>Alvos: {card.target}</p>
                    </>
                )}
                {card.range && (
                    <>
                        <img src="https://1.bp.blogspot.com/-P3qvudoFOq4/VqnjmEvSMyI/AAAAAAAAlhg/i2lnF3O33u4/s1600/icone-informacoes-alcance-clash-royale.png" alt={`imagem alcance da carta ${card.name}`} />
                        <p className={styles.info}>Alcance: {card.range}</p>
                    </>
                )}
                {card.damagepersecond && (
                    <>
                        <img src="https://4.bp.blogspot.com/-1iuhkFFUgDs/VrJYlHnGJKI/AAAAAAAAlt8/cbRFvQ1m7Uk/s1600/icone-informacoes-dano-por-segundo-clash-royale.png" alt={`imagem dano por segundo da carta ${card.name}`} />
                        <p className={styles.info}>Dano por Segundo: {card.damagepersecond}</p>
                    </>
                )}
                {card.impactspeed && (
                    <>
                        <img src="https://4.bp.blogspot.com/-6U6xolcsAkQ/Vqnjm5PYnYI/AAAAAAAAlh4/Sx6af8HTSdk/s1600/icone-informacoes-velocidade-de-dano-clash-royale.png" alt={`imagem velocidade de dano da carta ${card.name}`} />
                        <p className={styles.info}>Velocidade do Impacto: {card.impactspeed}</p>
                    </>
                )}
                {card.speed && (
                    <>
                        <img src="https://4.bp.blogspot.com/-dlkPifI704Y/VrJXPKAVqmI/AAAAAAAAltw/tx8a9KDG5a0/s200/icone-velocidade-de-ataque-clash-royale.png" alt={`imagem de velocidade de ataque da carta ${card.name}`} />
                        <p className={styles.info}>Velocidade: {card.speed}</p>
                    </>
                )}
                {card.damageondeath && (
                    <>
                        <img src="https://4.bp.blogspot.com/-3KYGQA_xjJs/VqnjmN1W2GI/AAAAAAAAlhk/iHiWEGOTDrc/s1600/icone-informacoes-dano-clash-royale.png" alt={`imagem dano da carta ${card.name}`} />
                        <p className={styles.info}>Dano na morte: {card.damageondeath}</p>
                    </>
                )}

                {card.unities && (
                    <>
                        <img src="https://2.bp.blogspot.com/-e3BP1BYjCzI/VrJXPBH4WKI/AAAAAAAAlts/kGVTkjZF9zQ/s1600/icone-quantidade-clash-royale.png" alt={`imagem unidade da carta ${card.name}`} />
                        <p className={styles.info}>Unidades: {card.unities}</p>
                    </>
                )}
                {card.radius && (
                    <>
                     
                        <p className={styles.info}>Raio: {card.radius}</p>
                    </>
                )}
                {card.deploytime && (
                    <>
                        <img src="https://static.wikia.nocookie.net/clashroyale/images/2/21/DeployTime.png/revision/latest/scale-to-width-down/26?cb=20160619174333.png" alt={`imagem tempo de implantação da carta ${card.name}`} />
                        <p className={styles.info}>Tempo de Implantação: {card.deploytime}</p>
                    </>
                )}

                {card.damageonarea && (
                    <>
                        <img src="https://cdn.statsroyale.com/images/attribs/areadamage.png" alt={`imagem dano em area da carta ${card.name}`} />
                        <p className={styles.info}>Dano em Area: {card.damageonarea}</p>
                    </>
                )}
                {card.deploytime && (
                    <>
                        <img src="https://1.bp.blogspot.com/-OMAp4OqQVbE/VyiYzwZUcEI/AAAAAAAAow0/JfpWhtc62qUbVdD6YYemWm-T5ltCWZpAwCLcB/s1600/tempo-de-mobilizacao-clash-royale.png" alt={`imagem tempo de implantação da carta ${card.name}`} />
                        <p className={styles.info}>Tempo de Implantação: {card.deploytime}</p>
                    </>
                )}
                


            </div>

        </div>
    );
};

export default CardDescription;
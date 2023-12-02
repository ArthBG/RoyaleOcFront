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
                    <p className={styles.info}>{card.name ? card.name : 'Não disponível'}</p>

                </TabPanel>
                <TabPanel>
                    <Carousel showArrows={true}>
                        <div>
                            <img src={"https://designdobom.com.br/wp-content/uploads/2018/09/imagem_para_sexta_51.jpg"} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                        <div>
                            <img src={"https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                        <div>
                            <img src={"https://img.freepik.com/fotos-premium/o-ceu-da-paisagem-do-arco-iris-refletiu-a-imagem-de-fundo-da-natureza-da-agua-ai-gerou-a-arte_856480-1354.jpg?w=2000"} alt={`Imagem da Carta ${card.name}`} />
                        </div>
                    </Carousel>

                </TabPanel>
            </Tabs>

            <div className={styles.infosCartas}>
                <p className={styles.info}> {card.name ? card.name : "Não disponível"}</p>
                <img src={card.image} alt={`Imagem da Carta ${card.name}`} />




            </div>

        </div>
    );
};

export default CardDescription;
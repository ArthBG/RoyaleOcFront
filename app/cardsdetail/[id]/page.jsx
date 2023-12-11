"use client"
//importacoes
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import GameCharacter from '@/app/components/showCharacter/show';
import { RotatingLines } from 'react-loader-spinner'
import Footer from '@/app/components/footer/footer';
import Header from '@/app/components/header/header';
import Link from 'next/link';

// Componente funcional para exibir detalhes da carta
const CardDescription = ({ params }) => {
    // Estado para armazenar os dados da carta
    const [card, setCard] = useState([]);
    const { id } = params;
    // Estado para controlar o carregamento dos dados
    const [loading, setLoading] = useState(true);



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
            } finally {
                // Define o estado de carregamento para falso após a conclusão da requisição
                setLoading(false);
            }
        };
        // Chama a função 'cardsFetch' quando 'id' muda
        cardsFetch();
    }, [id]);

    // Estrutura para renderizar detalhes da carta usando React-Responsive-Carousel e React-Tabs
    return (
        <div className={styles.container}>

            <Header />
            <div className={styles.background}>
                {card.name && <p className={styles.name}>{card.name}</p>}
                <img className={styles.imgCard} width={250} height={250} src={card.image} alt={`Imagem da Carta ${card.name}`} />
                <div className={styles.containerTeT}>

                    <div className={styles.minicards}>
                        {card.rarity && (
                            <div className={styles.minicard}>
                                <div className={styles.fundoR}>
                                    <h2 className={styles.h2}>Raridade</h2>
                                </div>
                                <div className={styles.fundoInfo}>
                                    <p className={styles.p}>{card.rarity}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.minicards}>
                        {card.type && (
                            <div className={styles.minicard}>
                                <div className={styles.fundoR}>
                                    <h2 className={styles.h2}>Tipo</h2>
                                </div>
                                <div className={styles.fundoInfo}>
                                    <p className={styles.p}>{card.type}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <section className={styles.slider}>
                 
                        <input className={styles.ipt} name='slide' type="radio" />
                        <input className={styles.ipt} name='slide' type="radio" />
                        <input className={styles.ipt} name='slide' type="radio" />
                    

                    <div className={styles.sliderContent}>
                        <div className={styles.sliderItem}>
                            <div className={styles.gifcarr}>
                                <img className={styles.gif} src="https://media.tenor.com/dSX52n58RXsAAAAM/attack-clash-royale.gif" alt="gif" />
                            </div>
                        </div>
                        <div className={styles.sliderItem}>
                            <div className={styles.infosCartas}>

                                <div className={styles.cardDetails}>
                                </div>

                                {card.hp && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://3.bp.blogspot.com/-B5-R55pQwhg/Vqnjm_VreOI/AAAAAAAAlh0/efGRL8l45Yw/s1600/icone-informacoes-pontos-de-vida-hp-clash-royale.png" alt={`imagem pontos de vida da carta ${card.name}`} />
                                        <h2 className={styles.info}>Pontos de Vida </h2>
                                        <p className={styles.obj}>{card.hp}</p>
                                    </div>
                                )}

                                {card.damage && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://4.bp.blogspot.com/-3KYGQA_xjJs/VqnjmN1W2GI/AAAAAAAAlhk/iHiWEGOTDrc/s1600/icone-informacoes-dano-clash-royale.png" alt={`imagem dano da carta ${card.name}`} />
                                        <h2 className={styles.info}>Dano </h2>
                                        <p className={styles.obj}>{card.damage}</p>
                                    </div>

                                )}

                                {card.target && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://1.bp.blogspot.com/-yfN5L4q_hso/VqnjmM79khI/AAAAAAAAlhc/w-z1KNkeVFk/s1600/icone-informacoes-alvo-clash-royale.png" alt={`imagem alvos da carta ${card.name}`} />
                                        <h2 className={styles.info}>Alvos </h2>
                                        <p className={styles.obj}>{card.target}</p>
                                    </div>

                                )}

                                {card.range && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://1.bp.blogspot.com/-P3qvudoFOq4/VqnjmEvSMyI/AAAAAAAAlhg/i2lnF3O33u4/s1600/icone-informacoes-alcance-clash-royale.png" alt={`imagem alcance da carta ${card.name}`} />
                                        <h2 className={styles.info}>Alcance </h2>
                                        <p className={styles.obj}>{card.range}</p>
                                    </div>

                                )}

                                {card.damagepersecond && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://4.bp.blogspot.com/-1iuhkFFUgDs/VrJYlHnGJKI/AAAAAAAAlt8/cbRFvQ1m7Uk/s1600/icone-informacoes-dano-por-segundo-clash-royale.png" alt={`imagem dano por segundo da carta ${card.name}`} />

                                        <h2 className={styles.info}>Dano por Segundo </h2>
                                        <p className={styles.obj}>{card.damagepersecond}</p>
                                    </div>

                                )}

                                {card.impactspeed && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://4.bp.blogspot.com/-6U6xolcsAkQ/Vqnjm5PYnYI/AAAAAAAAlh4/Sx6af8HTSdk/s1600/icone-informacoes-velocidade-de-dano-clash-royale.png" alt={`imagem velocidade de dano da carta ${card.name}`} />

                                        <h2 className={styles.info}>Rapidez de Ataque </h2>
                                        <p className={styles.obj}>{card.impactspeed}</p>
                                    </div>

                                )}

                                {card.speed && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://4.bp.blogspot.com/-dlkPifI704Y/VrJXPKAVqmI/AAAAAAAAltw/tx8a9KDG5a0/s200/icone-velocidade-de-ataque-clash-royale.png" alt={`imagem de velocidade de ataque da carta ${card.name}`} />

                                        <h2 className={styles.info}>Velocidade </h2>
                                        <p className={styles.obj}>{card.speed}</p>
                                    </div>

                                )}

                                {card.damageondeath && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://cdn.statsroyale.com/images/attribs/deathdamage.png" alt={`imagem dano da carta ${card.name}`} />

                                        <h2 className={styles.info}>Dano na Morte </h2>
                                        <p className={styles.obj}>{card.damageondeath}</p>
                                    </div>

                                )}

                                {card.unities && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://2.bp.blogspot.com/-e3BP1BYjCzI/VrJXPBH4WKI/AAAAAAAAlts/kGVTkjZF9zQ/s1600/icone-quantidade-clash-royale.png" alt={`imagem unidade da carta ${card.name}`} />
                                        <h2 className={styles.info}>Unidades </h2>
                                        <p className={styles.obj}>{card.unities}</p>
                                    </div>

                                )}

                                {card.radius && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://1.bp.blogspot.com/-gYO2Z6Fkh6U/VrD1crbxFdI/AAAAAAAAlrE/8YoZynm9Tis/s200/icone-informacoes-raio-clash-royale.png" alt={`imagem raio da carta ${card.name}`} />

                                        <h2 className={styles.info}>Raio </h2>
                                        <p className={styles.obj}>{card.radius}</p>
                                    </div>

                                )}

                                {card.deploytime && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://1.bp.blogspot.com/-OMAp4OqQVbE/VyiYzwZUcEI/AAAAAAAAow0/JfpWhtc62qUbVdD6YYemWm-T5ltCWZpAwCLcB/s1600/tempo-de-mobilizacao-clash-royale.png" alt={`imagem tempo de implantação da carta ${card.name}`} />

                                        <h2 className={styles.info}>Implantação </h2>
                                        <p className={styles.obj}>{card.deploytime}</p>
                                    </div>

                                )}

                                {card.damageonarea && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://cdn.statsroyale.com/images/attribs/areadamage.png" alt={`imagem dano em área da carta ${card.name}`} />

                                        <h2 className={styles.info}>Dano em Área </h2>
                                        <p className={styles.obj}>{card.damageonarea}</p>
                                    </div>

                                )}

                                {card.spawnspeed && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="https://cdn.statsroyale.com/images/attribs/spawnspeed.png" alt={`imagem velocidade de surgimento da carta ${card.name}`} />

                                        <h2 className={styles.info}>Velocidade de Surgimento </h2>
                                        <p className={styles.obj}>{card.spawnspeed}</p>
                                    </div>

                                )}
                                {card.efecttime && (
                                    <div className={styles.cardinfo}>
                                        <img width={80} height={80} className={styles.imgIcon} src="" alt={`Imagem do Tempo de Efeito da carta ${card.name}`} />

                                        <h2 className={styles.info}>Tempo de Efeito</h2>
                                        <p className={styles.obj}>{card.efecttime}</p>
                                    </div>
                                )}
                                {card.arena && (
                                    <div className={styles.cardinfo}>

                                        <img width={80} height={80} className={styles.imgIcon} src="https://www.deckshop.pro/img/arena/arena_training.png" alt={`Imagem da Arena da carta ${card.name}`} />

                                        <h2 className={styles.info}>Arena</h2>
                                        <p className={styles.obj}>{card.arena}</p>
                                    </div>
                                )}
                                {card.freezetime && (
                                    <div className={styles.cardinfo}>

                                        <img width={80} height={80} className={styles.imgIcon} src="https://4.bp.blogspot.com/-Tc6HNClKcyI/WMroerfgi8I/AAAAAAAAyd8/fsn0yj7k-fEqWUG1X33Xa53iSehFI2GOACLcB/s1600/duracao-atordoamento-stun.png" alt={`Imagem do Tempo de Congelamento da carta ${card.name}`} />

                                        <h2 className={styles.info}> Congelamento</h2>
                                        <p className={styles.obj}>{card.freezetime}</p>
                                    </div>
                                )}
                                {card.damageontower && (
                                    <div className={styles.cardinfo}>

                                        <img width={80} height={80} className={styles.imgIcon} src="https://cdn.statsroyale.com/images/attribs/crowntowerdamage.png" alt={`Imagem do Dano na Torre da carta ${card.name}`} />

                                        <h2 className={styles.info}>Dano na Torre</h2>
                                        <p className={styles.obj}>{card.damageontower}</p>
                                    </div>
                                )}
                                {card.chargedamage && (
                                    <div className={styles.cardinfo}>

                                        <img width={80} height={80} className={styles.imgIcon} src="https://3.bp.blogspot.com/-fyad3zyp33E/WQnVBIX9cdI/AAAAAAAAzxY/r9_0QsD0YYcCRwSm4DDdZtmPj8ofsh1mwCLcB/s1600/alcance-de-habilidade.png" alt={`Imagem do Dano do Choque da carta ${card.name}`} />

                                        <h2 className={styles.info}>Dano de Carga</h2>
                                        <p className={styles.obj}>{card.chargedamage}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.sliderItem}>
                            <div className={styles.descricao}>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>


                </section>
            </div>



            {/* componente do personagem que aparece */}
            <GameCharacter />
            {/* loader */}
            {loading && (
                <RotatingLines
                    className={styles.loading}
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            )}
            < Footer />

        </div>

    );
};

export default CardDescription;
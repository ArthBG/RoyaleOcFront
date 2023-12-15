"use client"
//importacoes
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import GameCharacter from '@/app/components/showCharacter/show';
import { Rings } from 'react-loader-spinner';
import Footer from '@/app/components/footer/footer';
import Header from '@/app/components/header/header';
import Link from 'next/link';
import Image from 'next/image';

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
            <main className={styles.main22}>
            <div className={styles.background}>
                {loading ? (
                    <div className={styles.containerLoading}>
                        <Rings
                            height="300"
                            width="400"
                            color="#fff"
                            radius="6"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="rings-loading"
                        />
                    </div>
                ) : (
                    <>
                        {card.name && <p className={styles.name}>{card.name}</p>}
                        < img className={styles.imgCard} width={200} height={200} src={card.image} alt={`Imagem da Carta ${card.name}`} />
                        <div className={styles.containerTeT}>
                            <p className={styles.nivel}>Nível 10</p>

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


                            <div className={styles.sliderContent}>
                                <div className={styles.sliderItem}>
                                    <div className={styles.infosCartas}>

                                        <div className={styles.cardDetails}>
                                        </div>

                                        {card.hp && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/hp.png"} alt={`imagem pontos de vida da carta ${card.name}`} />
                                                <h2 className={styles.info}>Pontos de Vida </h2>
                                                <p className={styles.obj}>{card.hp}</p>
                                            </div>
                                        )}

                                        {card.damage && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/damage.png"} alt={`imagem dano da carta ${card.name}`} />
                                                <h2 className={styles.info}>Dano </h2>
                                                <p className={styles.obj}>{card.damage}</p>
                                            </div>

                                        )}

                                        {card.target && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/target.png"} alt={`imagem alvos da carta ${card.name}`} />
                                                <h2 className={styles.info}>Alvos </h2>
                                                <p className={styles.obj}>{card.target}</p>
                                            </div>

                                        )}

                                        {card.range && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/range.png"} alt={`imagem alcance da carta ${card.name}`} />
                                                <h2 className={styles.info}>Alcance </h2>
                                                <p className={styles.obj}>{card.range}</p>
                                            </div>

                                        )}

                                        {card.damagepersecond && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/damagepersecond.png"} alt={`imagem dano por segundo da carta ${card.name}`} />

                                                <h2 className={styles.info}>Dano por Segundo </h2>
                                                <p className={styles.obj}>{card.damagepersecond}</p>
                                            </div>

                                        )}

                                        {card.impactspeed && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/impactspeed.png"} alt={`imagem velocidade de dano da carta ${card.name}`} />

                                                <h2 className={styles.info}>Rapidez de Ataque </h2>
                                                <p className={styles.obj}>{card.impactspeed}</p>
                                            </div>

                                        )}

                                        {card.speed && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/speed.png"} alt={`imagem de velocidade de ataque da carta ${card.name}`} />

                                                <h2 className={styles.info}>Velocidade </h2>
                                                <p className={styles.obj}>{card.speed}</p>
                                            </div>

                                        )}

                                        {card.damageondeath && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/damageondeath.png"} alt={`imagem dano da carta ${card.name}`} />

                                                <h2 className={styles.info}>Dano de Morte </h2>
                                                <p className={styles.obj}>{card.damageondeath}</p>
                                            </div>

                                        )}

                                        {card.unities && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/unities.png"} alt={`imagem unidade da carta ${card.name}`} />
                                                <h2 className={styles.info}>Unidades </h2>
                                                <p className={styles.obj}>{card.unities}</p>
                                            </div>

                                        )}

                                        {card.radius && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/radius.png"} alt={`imagem raio da carta ${card.name}`} />

                                                <h2 className={styles.info}>Raio </h2>
                                                <p className={styles.obj}>{card.radius}</p>
                                            </div>

                                        )}

                                        {card.deploytime && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/deploytime.png"} alt={`imagem tempo de implantação da carta ${card.name}`} />

                                                <h2 className={styles.info}>Implantação </h2>
                                                <p className={styles.obj}>{card.deploytime}</p>
                                            </div>

                                        )}

                                        {card.damageonarea && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/damageonarea.png"} alt={`imagem dano em área da carta ${card.name}`} />

                                                <h2 className={styles.info}>Dano em Área </h2>
                                                <p className={styles.obj}>{card.damageonarea}</p>
                                            </div>

                                        )}

                                        {card.spawnspeed && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/deploytime.png"} alt={`imagem velocidade de surgimento da carta ${card.name}`} />

                                                <h2 className={styles.info}>Surgimento </h2>
                                                <p className={styles.obj}>{card.spawnspeed}</p>
                                            </div>

                                        )}
                                        {card.efecttime && (
                                            <div className={styles.cardinfo}>
                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/efecttime.png"} alt={`Imagem do Tempo de Efeito da carta ${card.name}`} />

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

                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/freezetime.png"} alt={`Imagem do Tempo de Congelamento da carta ${card.name}`} />

                                                <h2 className={styles.info}> Congelamento</h2>
                                                <p className={styles.obj}>{card.freezetime}</p>
                                            </div>
                                        )}
                                        {card.damageontower && (
                                            <div className={styles.cardinfo}>

                                                <img width={80} height={80} className={styles.imgIcon} src={"/images/damageontower.png"} alt={`Imagem do Dano na Torre da carta ${card.name}`} />

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

                    </>
                )}

            </div>

            <Link className={styles.link} href="/">
                <button type="submit" className={styles.home}>
                    <div className={styles.overlay}></div>
                    <div className={styles.overlay}></div>
                    <div className={styles.overlay}></div>
                    <span>Home</span>
                </button >
            </Link>
            {/* componente do personagem que aparece */}
            <GameCharacter />
            </main>
            <Footer />

        </div >
    );
};

export default CardDescription;
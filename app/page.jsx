"use client"
import Image from "next/image"
import Header from "./components/header/header"
import styles from "./page.module.css"
import Link from "next/link"
import Footer from "./components/footer/footer"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <main className={styles.backgroundimage}>
      <Header />
      <div className={styles.cards}>
        <div className={styles.divcard1}>
          <div className={styles.a2}>
            <h2 className={styles.titulo}>O que é Clash Royale:</h2>
            <p className={styles.font}>
              Clash Royale é um jogo de estratégia em tempo real da Supercell, onde jogadores enfrentam uns aos outros em batalhas usando cartas
              colecionáveis. O objetivo é destruir as torres do oponente enquanto defende as suas. A chave para o sucesso está na construção inteligente
              do deck, na gestão eficiente de elixir e na habilidade de adaptação durante as batalhas. Com uma comunidade competitiva e recursos sociais, o jogo oferece uma experiência dinâmica e envolvente,
              desafiando os jogadores a aprimorar suas táticas e alcançar a vitória na arena.
            </p>
          </div>
        </div>
        <div className={styles.divcard2}>
          <div className={styles.a3}>
            <h2 className={styles.titulo}>Curiosidades sobre a Supercell:</h2>
            <p className={styles.font}>
              A Supercell, renomada desenvolvedora finlandesa de jogos mobile, destaca-se por sua abordagem única no setor.
              Famosa pelos sucessos como Clash of Clans e Clash Royale, a empresa adota uma cultura empresarial descentralizada,
              permitindo liberdade criativa às equipes. Seu modelo de negócios inovador foca em poucos jogos altamente polidos, com suporte contínuo. A empresa valoriza
              o desenvolvimento colaborativo, a reinvenção constante e não hesita em descontinuar jogos para manter a inovação.
              A sede em Helsinque reflete o ambiente descontraído e criativo que impulsiona a Supercell.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena-01.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Campo de Treinamento</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena1.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Estádio Goblin </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena2.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Fosso dos Ossos</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena3.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Torneio Bárbaro</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena4.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Vale dos Feitiços</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena5.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Oficina do Construtor</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena6.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Parqinho da P.E.K.K.A</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena7.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Arena Real</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena8.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Pico Congelado</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena9.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Arena da Selva</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena10.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Montanha do Porco</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena11.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Eletrovale</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena12.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Cidade Assombrada </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena13.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Covil do Patifes</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena14.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Pico Sereno</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena15.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Mina do Mineiro</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena16.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>A cozinha do Executor</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena17.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Cripta Real</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena18.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Santuário Silencioso</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena19.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Spa de Dragões </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena20.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Campo de Treinamentos</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena21.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Festa Clash</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena22.png"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Panquecas</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena23.webp"} width={300} height={200} />
            </div>
            <Carousel.Caption>
              <h3>Arena Lendária</h3>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>

        <div className={styles.cards}>
          <div className={styles.divcard2}>
            <div className={styles.a3}>
              <h2 className={styles.titulo}>E-Sports e Torneios: </h2>
              <p className={styles.font}>
                A cena competitiva de Clash Royale é vibrante. Pode ser interessante falar sobre os
                jogadores profissionais, equipes, e os torneios mais recentes.Clash Royale tem uma série de
                torneios oficiais, organizados pela Supercell.
                Estes incluem a Clash Royale League (CRL), que é uma liga de equipes profissionais
                competindo em várias regiões ao redor do mundo. Discutir os destaques desses torneios,
                as equipes mais fortes e as jogadas incríveis pode ser bastante empolgante.
            <div className={styles.prince}>
              <Image className={styles.img} src={"/images/pricipe.gif"} width={300} height={200} />
            </div>
              </p>
            </div>
          </div>
          <div className={styles.divcard1}>
            <div className={styles.a2}>
              <h2 className={styles.titulo}>Dicas e Truques:</h2>
              <p className={styles.font}>
                <h6> Econômico de Elixir:</h6>

                Aprenda a gerenciar seu elixir de forma eficiente para maximizar suas jogadas.

                <h6>Controle de Ciclo de Cartas:</h6>

                Descubra como criar um ciclo de cartas rápido e eficiente para ter sempre a vantagem nas batalhas.

                <h6> Avaliação de Trocas:</h6>

                Saiba quando e como trocar suas cartas para obter uma vantagem estratégica sobre o oponente.

                <h6> Tática de Empurrão de Torres:</h6>

                Domine a técnica de empurrar as torres do adversário para obter uma vitória rápida e satisfatória.

              <div className={styles.gigaimg}>
                <Image className={styles.img} src={"/images/gigante.gif"} width={300} height={200} />
              </div>
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  )
}

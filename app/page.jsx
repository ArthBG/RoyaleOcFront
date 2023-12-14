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

  const seeMore = () => {
    window.scrollTo(0, 800);
  }

  return (
    <main className={styles.backgroundimage}>
      <Header />
      <div className={styles.divIntro4}>
        <div className={styles.divIntro1}>
        <h1 className={styles.title}>ROYALEOC</h1>
        <p className={styles.description}>
          Se você é fã de Clash Royale, aqui é o seu lugar! Aqui você encontra tudo sobre o jogo, desde dicas e truques até as arenas e cartas do jogo. Além disso, você pode encontrar informações sobre os torneios e campeonatos de Clash Royale. Seja bem-vindo ao Royaleoc!
        </p>
        {/* botao para descer até o meio da página */}
        <button className={styles.buttonSeemore} onClick={seeMore}>
          Explore ▶
        </button>
         </div>
        <div className={styles.divRender}>
        <Image className={styles.img} src={"/images/Crender.png"} width={400} height={500} />
        </div>
        </div>

      <div>
      <div className={styles.divAbout}>
      
      <div className={styles.divText}>
        <Image src={"/images/aminipekka.png" } width={450} height={500} />
        <div className={styles.divText2}>
              <h2 className={styles.titles}>Clash Royale</h2>
              <p className={styles.Techtugen}>Clash Royale é um jogo de estratégia freemium desenvolvido e publicado pela Supercell, empresa sediada em Helsinki, na Finlândia. O objetivo do jogo é destruir as torres inimigas usando cartas que poderão ser desbloqueadas ao longo do tempo. Algumas delas são trazidas de outro jogo da Supercell: Clash of Clans. Cada carta durante uma partida possui um preço de elixir, um recurso utilizado durante partidas, sendo acumulado ao longo do tempo a servir de energia para posicionar no campo de batalha as cartas selecionadas em menu. Clash Royale também possui um sistema de clãs, sentes grupos a que pessoas se juntam para conversar e jogarem juntos.</p>
             <div className={styles.divBtns}>
              <Link className={styles.a} href={'https://play.google.com/store/apps/details?id=com.supercell.clashroyale'} target="_blank">
                <Image src={"/images/googleplay.webp"} width={200} height={70} />
              </Link>
              <Link className={styles.a} href={'https://apps.apple.com/us/app/clash-royale/id1053012308'} target="_blank">
                <Image src={"/images/appstore.webp"} width={200} height={70} />
              </Link>
              </div>
    </div>
    </div>
    </div>
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
              <Image className={styles.img} src={"/images/arena2.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Fosso dos Ossos</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena3.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Torneio Bárbaro</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena4.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Vale dos Feitiços</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena5.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Oficina do Construtor</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena6.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Parqinho da P.E.K.K.A</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena7.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Arena Real</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena8.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Pico Congelado</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena9.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Arena da Selva</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena10.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Montanha do Porco</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena11.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Eletrovale</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena12.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Cidade Assombrada </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena13.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Covil do Patifes</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena14.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Pico Sereno</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena15.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Mina do Mineiro</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena16.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>A cozinha do Executor</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena17.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Cripta Real</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena18.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Santuário Silencioso</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena19.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Spa de Dragões </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena20.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Campo de Treinamentos</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena21.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Festa Clash</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena22.png"} width={600} height={400} />
            </div>
            <Carousel.Caption>
              <h3>Panquecas</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena23.webp"} width={600} height={400} />
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
              </p>
            <div className={styles.prince}>
              <Image className={styles.img} src={"/images/pricipe.gif"} width={300} height={200} />
            </div>
            </div>
          </div>
          <div className={styles.divcard1}>
            <div className={styles.a2}>
              <h2 className={styles.titulo}>Dicas e Truques:</h2>
              <div className={styles.gigaimg}>
                <Image className={styles.img} src={"/images/gigante.gif"} width={300} height={200} />
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  )
}

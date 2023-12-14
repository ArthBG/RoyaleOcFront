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
          <Image className={styles.imgP} src={"/images/Crender.png"}   width={400} height={450} />
        </div>
      </div>

      <div>
        <div className={styles.divAbout}>

          <div className={styles.divText}>
            <Image src={"/images/aminipekka.png"} width={350} height={400} />
            <div className={styles.divText2}>
              <h2 className={styles.titles}>Clash Royale</h2>
              <p className={styles.Techtugen}>Clash Royale é um jogo multiplayer em tempo real estrelado pelos Royales, seus personagens favoritos de Clash e muito, muito mais. Colete e melhore dezenas de cartas apresentando tropas, feitiços e defesas de Clash of Clans que você conhece e adora, além dos Royales: Princesas, Cavaleiros, Dragões Bebês e mais. Derrube o Rei inimigo e as Princesas de suas torres para derrotar seus oponentes e ganhar Troféus, Coroas e glória na Arena.</p>
              <div className={styles.divBtns}>
                <Link className={styles.a} href={'https://play.google.com/store/apps/details?id=com.supercell.clashroyale'} target="_blank">
                  <Image src={"/images/googleplay.webp"} width={200} height={70} layout="responsive" />
                </Link>
                <Link className={styles.a} href={'https://apps.apple.com/us/app/clash-royale/id1053012308'} target="_blank">
                  <Image src={"/images/appstore.webp"} width={200} height={70} layout="responsive" />
                </Link>
              </div>
            </div>
          </div>
        </div>
{/*         <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena-01.png"} width={600}
                height={400}
                layout="responsive" />
            </div>
            <Carousel.Caption>
              <h3>Campo de Treinamento</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena1.png"} width={600} height={400} layout="responsive" />
            </div>
            <Carousel.Caption>
              <h3>Estádio Goblin </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena2.png"} width={600} height={400} layout="responsive" />
            </div>
            <Carousel.Caption>
              <h3>Fosso dos Ossos</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena3.png"} width={600} height={400} layout="responsive" />
            </div>
            <Carousel.Caption>
              <h3>Torneio Bárbaro</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.divimgs}>
              <Image className={styles.img} src={"/images/arena4.png"} width={600} height={400} layout="responsive" />
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


        </Carousel> */}

        <div className={styles.divIntross}>
          <div className={styles.divIntro212}>
            <h1 className={styles.titles}>NOVA ATUALIZAÇÃO</h1>
            <Link className={styles.a} href={'/cards/news'}>
              <div className={styles.divIntro21}>
                <Image className={styles.img} src={"/images/newstuff.webp"} width={600} height={400} layout="responsive" />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.divcard1}>
          <div className={styles.divcard}>
            <div className={styles.a2}>
              <h2 className={styles.tituloall}>Acesse:</h2>
              <div className={styles.divall}>
                <div className={styles.cbmar}>
                  <Link className={styles.a} href={'/cards'}>
                    <Image className={styles.image} src={'/images/cartasclash.png'} width={100} height={100}  ></Image>
                  </Link>
                  <h1 className={styles.contact}>Cartas</h1>
                </div>
                <div className={styles.cbmar}>
                  <Link className={styles.a} href={'/membros'}>
                    <Image className={styles.image} src={'/images/sobrenosescudo.png'} width={170} height={150}  ></Image>
                  </Link>
                  <h1 className={styles.contact}>Sobre Nós</h1>
                </div>
                <div className={styles.cbmar}>

                  <Link className={styles.a} href={'/contatos/cadastroCtt'} target='_parent'>
                    <Image className={styles.image1} src={'/images/contatoscr.png'} width={100} height={100}  ></Image>
                  </Link>
                  <h1 className={styles.contact}>Contato</h1>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

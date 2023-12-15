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

  // Função para lidar com a seleção do índice
const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};

// Função para rolar até uma determinada posição na página
const seeMore = () => {
  window.scrollTo(0, 1000);
};

// Componente principal da página
return (
  <main className={styles.backgroundimage}>
    <Header />
    <main className={styles.main22}>
      {/* Seção de introdução */}
      <div className={styles.divIntro4}>
        <div className={styles.divIntro1}>
          {/* Título e descrição */}
          <h1 className={styles.title}>ROYALEOC</h1>
          <p className={styles.description}>
            Se você é fã de Clash Royale, aqui é o seu lugar! Aqui você encontra diversas informações sobre as cartas do jogo, notícias entre outros. Além disso, você pode encontrar informações detalhadas das cartas de Clash Royale. Seja bem-vindo ao Royaleoc!
          </p>
          {/* Botão para rolar até o meio da página */}
          <button className={styles.buttonSeemore} onClick={seeMore}>
            Explore ▶
          </button>
        </div>
        {/* Renderização de imagem */}
        <div className={styles.divRender}>
          <Image className={styles.imgP} src={"/images/Crender.png"} width={400} height={450} />
        </div>
      </div>

      {/* Seção "Sobre" */}
      <div>
        <div className={styles.divAbout}>
          <div className={styles.divText}>
            {/* Imagem e texto sobre Clash Royale */}
            <Image src={"/images/aminipekka.png"} width={350} height={400} />
            <div className={styles.divText2}>
              <h2 className={styles.titles}>Clash Royale</h2>
              <p className={styles.Techtugen}>Clash Royale é um jogo multiplayer em tempo real estrelado pelos Royales, seus personagens favoritos de Clash e muito, muito mais. Colete e melhore dezenas de cartas apresentando tropas, feitiços e defesas de Clash of Clans que você conhece e adora, além dos Royales: Princesas, Cavaleiros, Dragões Bebês e mais. Derrube o Rei inimigo e as Princesas de suas torres para derrotar seus oponentes e ganhar Troféus, Coroas e glória na Arena.</p>
              {/* Botões de download */}
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

        {/* Seção de novidades */}
        <div className={styles.divIntross}>
          {/* Divisão para cada novidade */}
          <div className={styles.divIntro212}>
            <h1 className={styles.titles}>NOVA ATUALIZAÇÃO !</h1>
            {/* Link para a página de notícias */}
            <Link className={styles.a} href={'/cards/news'}>
              <div className={styles.divIntro21}>
                <Image className={styles.img} src={"/images/newstuff.jpg"} width={560} height={300} layout="responsive" />
              </div>
            </Link>
          </div>

          <div className={styles.divIntro212}>
            <h1 className={styles.titles}>EVOLUÇÕES !</h1>
            {/* Link para a página de evoluções */}
            <Link className={styles.a} href={'/cards/newsevo'}>
              <div className={styles.divIntro21}>
                <Image className={styles.img} src={"/images/cardevo.jpg"} width={560} height={300} layout="responsive"/>
              </div>
            </Link>
          </div>
        </div>

        {/* Seção de acesso rápido */}
        <div className={styles.divcard1}>
          <div className={styles.divcard}>
            <div className={styles.a2}>
              <h2 className={styles.tituloall}>Acesse:</h2>
              {/* Links rápidos para diferentes seções */}
              <div className={styles.divall}>
                <div className={styles.cbmar}>
                  <Link className={styles.a} href={'/cards'}>
                    <Image className={styles.image} src={'/images/cartasclash.png'} width={100} height={100}  ></Image>
                  </Link>
                  <h1 className={styles.contact}>Cartas</h1>
                </div>
                <div className={styles.cbmar}>
                  <Link className={styles.a} href={'/membros'}>
                    <Image className={styles.image} src={'/images/sobrenosescudo.png'} width={170} height={100}  ></Image>
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
    </main>
    <Footer />
  </main>
);
}

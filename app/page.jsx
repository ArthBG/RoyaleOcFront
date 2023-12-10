"use client"
import Image from "next/image"
import Header from "./components/header/header"
import styles from "./page.module.css"
import Link from "next/link"
import Footer from "./components/footer/footer"
// npm install @coreui/react

export default function Home() {
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

      <Carousel className={styles.carrossel} width={400}>
       
        <div>
          <h2 className={styles.h2}>Estádio Goblin</h2>
          <div className={styles.divimg}>
          <img src={'/images/arena-1.png'}/>
          </div>
          <p className={styles.tituloarena}>Arena 1</p>
        </div>
        <div>
          <h2 className={styles.h2}>Fosso Dos Ossos</h2>
          <img src={'/images/arena-2.png'} />
          <p className={styles.tituloarena}>Arena 2</p>
        </div>
        <div>
          <h2 className={styles.h2} >Torneio Bárbaro</h2>
          <img src={'/images/arena-3.png'} />
          <p className={styles.tituloarena}>Arena 3</p>
        </div>
        <div>
          <h2  className={styles.h2}>Vale dos Feitiços</h2>
          <img src={'/images/arena-4.png'} />
          <p className={styles.tituloarena}>Arena 4</p>
        </div>
        <div>
          <h2  className={styles.h2}>Oficina do Construtor</h2>
          <img src={'/images/arena-5.png'} />
          <p className={styles.tituloarena}>Arena 5</p>
        </div>
        <div>
          <h2  className={styles.h2}>Parquinho da P.E.K.K.A</h2>
          <img src={'/images/arena-6.png'} />
          <p className={styles.tituloarena}>Arena 6</p>
        </div>
        <div>
          <h2  className={styles.h2}>Arena Real</h2>
          <img src={'/images/arena-7.png'} />
          <p className={styles.tituloarena}>Arena 7</p>
        </div>
        <div>
          <h2  className={styles.h2}>Pico Congelado</h2>
          <img src={'/images/arena-8.png'} />
          <p className={styles.tituloarena}>Arena 8</p>
        </div>

        <div>
          <h2  className={styles.h2}>Arena Da Selva</h2>
          <img src={'/images/arena-9.png'} />
          <p className={styles.tituloarena}>Arena 9</p>
        </div>
        <div>
          <h2  className={styles.h2}>Montanha do Porco</h2>
          <img src={'/images/arena-10.png'} />
          <p className={styles.tituloarena}>Arena 10</p>
        </div>
        <div>
          <h2  className={styles.h2}>Eletrovale</h2>
          <img src={'/images/arena-11.png'} />
          <p className={styles.tituloarena}>Arena 11</p>
        </div>
        <div>
          <h2  className={styles.h2}>Cidade Assombrada</h2>
          <img src={'/images/arena-12.png'} />
          <p className={styles.tituloarena}>Arena 12</p>
        </div>
        <div>
          <h2  className={styles.h2}>Covil dos Patifes</h2>
          <img src={'/images/arena-13.png'} />
          <p className={styles.tituloarena}>Arena 13</p>
        </div>
        <div>
          <h2  className={styles.h2}>Pico Sereno</h2>
          <img src={'/images/arena-14.png'} />
          <p className={styles.tituloarena}>Arena 14</p>
        </div>
        <div>
          <h2  className={styles.h2}>Mina do Mineiro</h2>
          <img src={'/images/arena-15.png'} />
          <p className={styles.tituloarena}>Arena 15</p>
        </div>
        <div>
          <h2  className={styles.h2}>A cozinha do Executor</h2>
          <img src={'/images/arena-16.png'} />
          <p className={styles.tituloarena}>Arena 16</p>
        </div>
        <div>
          <h2  className={styles.h2}>Cripta Real</h2>
          <img src={'/images/arena-17.png'} />
          <p className={styles.tituloarena}>Arena 17</p>
        </div>
        <div>
          <h2  className={styles.h2}>Santuário Silencioso</h2>
          <img src={'/images/arena-18.png'} />
          <p className={styles.tituloarena}>Arena 18</p>
        </div>
        <div>
          <h2  className={styles.h2}>Spa de Dragões </h2>
          <img src={'/images/arena-19.png'} />
          <p className={styles.tituloarena}>Arena 19</p>
        </div>
        <div>
          <h2  className={styles.h2}>Campo de Treinamento</h2>
          <img src={'/images/arena24.webp'}  />
          <p className={styles.tituloarenatop}>Arena 20</p>
        </div>
        <div>
          <h2  className={styles.h2}>Festa Clash</h2>
          <img src={'/images/arena21.webp'} />
          <p className={styles.tituloarenatop}>Arena 21</p>
        </div>
        <div>
          <h2  className={styles.h2}>Panquecas</h2>
          <img src={'/images/arena22.webp'}  />
          <p className={styles.tituloarenatop}>Arena 22</p>
        </div>
        <div>
          <h2  className={styles.h2}>Arena Lendária</h2>
          <img src={'/images/arena-20.png'} />
          <p className={styles.tituloarena23}>Arena 23</p>
        </div>
      </Carousel>


      <Footer />
    </main>
  )
}

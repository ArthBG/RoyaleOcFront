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


      <Footer />
    </main>
  )
}

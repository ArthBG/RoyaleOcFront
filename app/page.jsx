import Image from "next/image"
import Header from "./components/header/header"
import styles from "./page.module.css"
import Link from "next/link"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <main className={styles.backgroundimage}>
      <Header />
      <h1>Clash Royale</h1>
      <div className={styles.containerLogo}>
        <Image src={"/images/logoclashroyale.png"} width={300} height={200} />
      </div>
      <div className={styles.container}>
        <h2>O que é:</h2>
        <Image src={"/images/"} width={300} height={200} />
        <p>
          Clash Royale é um jogo eletrônico freemium desenvolvido e publicado
          pela Supercell, uma empresa da Finlândia. O jogo combina elementos de
          jogos de cartas colecionáveis, defesa de torre e multiplayer online de
          batalha. O jogo foi lançado globalmente em 2 de março de 2016.
        </p>

      </div>
      
      <Footer />
    </main>
  )
}

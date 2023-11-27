import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <main className={styles.backgroundimage}>
      <h1>Clash Royale</h1>
      <div className={styles.containerLogo}>
        <Image src={"/images/logoclashroyale.png"} width={300} height={200} />
      </div>
      <Footer />
    </main>
  )
}

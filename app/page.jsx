import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.backgroundimage}>
      <h1>Clash Royale</h1>
      <div className={styles.containerLogo}>
        <Image src={"/images/logoclashroyale.png"} width={300} height={200} />
      </div>
    </main>
  )
}

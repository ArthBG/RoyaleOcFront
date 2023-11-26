import Image from "next/image"
import styles from "../createcard/page.module.css"

export default function Home() {
  return (
    <main className={styles.backgroundimage}>
      <h1>Clash Royale</h1>
      <div className={styles.containerLogo}>
        <Image src={"/images/logoclashroyale.png"} width={300} height={200} />
      </div>
      <div className={styles.conatainerInputs}>
        <input className={styles.nameinput} type="text" placeholder="Nome da carta" />
        <select className={styles.select}>
            <option value= "1">1</option>
            <option value= "2">2</option>
            <option value= "3">3</option>
            <option value= "4">4</option>
            <option value= "5">5</option>
            <option value= "6">6</option>
            <option value= "7">7</option>
            <option value= "8">8</option>
            <option value= "9">9</option>
            <option value= "10">10</option>
        </select>
        <select className={styles.select}>
            <option value="comum">Comum</option>
            <option value="raro">Raro</option>
            <option value="epico">Épico</option>
            <option value="lendario">Lendário</option>
            <option value="campeao">Campeão</option>
        </select>
        <select className={styles.select}>
            <option value="tropa">Tropa</option>
            <option value="feitiço">Feitiço</option>
            <option value="construcao">Construção</option>
        </select>
        <input type="file" placeholder="Imagem da carta" />
        <input className={styles.descinput} type="text" placeholder="Descrição da sua carta" />
        <button className={styles.scbtnyellow}>Criar</button>
      </div>
    </main>
  )
}
"use client";
import Image from "next/image"
import { useState, useEffect } from "react"
import styles from "../createcard/page.module.css"

export default function Home() {
  const [cards, setCards] = useState([])
  const [name, setName] = useState("")
  const [level, setLevel] = useState("")
  const [rarity, setRarity] = useState("")
  const [type, setType] = useState("")
  const [elixir, setElixir] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
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
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <h2>Carta</h2>
          <div className={styles.containerCardLogo}>
            <Image src={"/images/logoclashroyale.png"} width={300} height={200} />
          </div>
          <div className={styles.containerCard}>
          <h3>nome{name} Nível {level}</h3>
            <div className={styles.containerHeader}>
              <div className={styles.cardImage}>
                {rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "1" ? <Image src={"/images/communCard1.png"} width={50} height={50} />
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "2" ? <Image src={"/images/communCard2.png"} width={50} height={50} />
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "3" ? <Image src={"/images/communCard3.png"} width={50} height={50} />
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "4" ? <Image src={"/images/communCard4.png"} width={50} height={50} />                
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "5" ? <Image src={"/images/communCard5.png"} width={50} height={50} />  
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "6" ? <Image src={"/images/communCard6.png"} width={50} height={50} />
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "7" ? <Image src={"/images/communCard7.png"} width={50} height={50} />
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "8" ? <Image src={"/images/communCard8.png"} width={50} height={50} />                
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "9" ? <Image src={"/images/communCard9.png"} width={50} height={50} />
                : (rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "10" ? <Image src={"/images/communCard10.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "1" ? <Image src={"/images/legendaryCard1.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "2" ? <Image src={"/images/legendaryCard2.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "3" ? <Image src={"/images/legendaryCard3.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "4" ? <Image src={"/images/legendaryCard4.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "5" ? <Image src={"/images/legendaryCard5.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "6" ? <Image src={"/images/legendaryCard6.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "7" ? <Image src={"/images/legendaryCard7.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "8" ? <Image src={"/images/legendaryCard8.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "9" ? <Image src={"/images/legendaryCard9.png"} width={50} height={50} />
                : (rarity === "lendario" && elixir === "10" ? <Image src={"/images/legendaryCard10.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "1" ? <Image src={"/images/championCard1.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "2" ? <Image src={"/images/championCard2.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "3" ? <Image src={"/images/championCard3.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "4" ? <Image src={"/images/championCard4.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "5" ? <Image src={"/images/championCard5.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "6" ? <Image src={"/images/championCard6.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "7" ? <Image src={"/images/championCard7.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "8" ? <Image src={"/images/championCard8.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "9" ? <Image src={"/images/championCard9.png"} width={50} height={50} />
                : (rarity === "campeao" && elixir === "10" ? <Image src={"/images/championCard10.png"} width={50} height={50} />
                : null)))))))))))))))))))))))))))))
                }
              </div>
            <div className={styles.headCard}>
              {rarity === "comum" ? <div className={styles.common}>
                <h3>Raridade:</h3>
                <h3>Comum</h3>
                <h3>Tipo:</h3>
                <h3>{type}</h3>
              </div> : null}
              {rarity === "raro" ? <div className={styles.rare}>
                <h3>Raridade:</h3>
                <h3>Raro</h3>
                <h3>Tipo:</h3>
                <h3>{type}</h3>
              </div> : null}
              {rarity === "epico" ? <div className={styles.epic}>
                <h3>Raridade:</h3>
                <h3>Épico</h3>
                <h3>Tipo:</h3>
                <h3>{type}</h3>
              </div> : null}
              {rarity === "lendario" ? <div className={styles.legendary}>
                <h3>Raridade:</h3>
                <h3>Lendário</h3>
                <h3>Tipo:</h3>
                <h3>{type}</h3>
              </div> : null}
              {rarity === "campeao" ? <div className={styles.champion}>
                <h3>Raridade:</h3>
                <h3>Campeão</h3>
                <h3>Tipo:</h3>
                <h3>{type}</h3>
              </div> : null}
              <h3>{description}</h3>
          </div>
       <div className={styles.containerPoints}>
          <div className={styles.containerPoint}>
            <div className={styles.point}>
              <h2>1</h2>
            </div>
            <div className={styles.point}>
              <h2>2</h2>
            </div>
            <div className={styles.point}>
              <h2>3</h2>
            </div>
            <div className={styles.point}>
              <h2>4</h2>
            </div>
            <div className={styles.point}>
              <h2>5</h2>
            </div>
            <div className={styles.point}>
              <h2>6</h2>
            </div>
            <div className={styles.point}>
              <h2>7</h2>
            </div>
            <div className={styles.point}>
              <h2>8</h2>
            </div>
            <div className={styles.point}>
              <h2>9</h2>
            </div>
            <div className={styles.point}>
              <h2>10</h2>
            </div>
          </div>
          </div>
       </div>    
        </div>
       </div>
      </div>
    </main>
  )
}
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

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeLevel = (event) => {
    setLevel(event.target.value)
  }

  const onChangeRarity = (event) => {
    setRarity(event.target.value)
  }

  const onChangeType = (event) => {
    setType(event.target.value)
  }

  const onChangeElixir = (event) => {
    setElixir(event.target.value)
  }

  const onChangeImage = (event) => {
    setImage(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }


  return (
    <main className={styles.backgroundimage}>
      <h1>Clash Royale</h1>
      <div className={styles.containerLogo}>
        <Image src={"/images/logoclashroyale.png"} width={300} height={200} />
      </div>
      <div className={styles.conatainerInputs}>
        <input className={styles.input} type="text" placeholder="Nome da sua carta" value={name} onChange={onChangeName} />
        <select className={styles.select} 
        value={level}
        onChange={onChangeLevel}
        >
          <option value="1">Nível 1</option>
          <option value="2">Nível 2</option>
          <option value="3">Nível 3</option>
          <option value="4">Nível 4</option>
          <option value="5">Nível 5</option>
          <option value="6">Nível 6</option>
          <option value="7">Nível 7</option>
          <option value="8">Nível 8</option>
          <option value="9">Nível 9</option>
          <option value="10">Nível 10</option>
          <option value="11">Nível 11</option>
          <option value="12">Nível 12</option>
          <option value="13">Nível 13</option>
          <option value="14">Nível 14</option>
          <option value="15">Nível 15</option>
        </select>
        <select className={styles.select}
        value={rarity}
        onChange={onChangeRarity}
        >
          <option value="comum">Comum</option>
          <option value="raro">Raro</option>
          <option value="epico">Épico</option>
          <option value="lendario">Lendário</option>
          <option value="campeao">Campeão</option>
        </select>

        <select className={styles.select}
        value={type}
        onChange={onChangeType}
        >
          <option value="tropa">Tropa</option>
          <option value="feitico">Feitiço</option>
          <option value="construcao">Construção</option>
        </select>

        <select className={styles.select}
        value={elixir}
        onChange={onChangeElixir}
        >
          <option value="1">1 Elixir</option>
          <option value="2">2 Elixir</option>
          <option value="3">3 Elixir</option>
          <option value="4">4 Elixir</option>
          <option value="5">5 Elixir</option>
          <option value="6">6 Elixir</option>
          <option value="7">7 Elixir</option>
          <option value="8">8 Elixir</option>
          <option value="9">9 Elixir</option>
          <option value="10">10 Elixir</option>
        </select>

        <input type="file" className={styles.file} value={image} onChange={onChangeImage} />
        <textarea className={styles.input} placeholder="Descrição da carta" value={description} onChange={onChangeDescription} />
        <button className={styles.scbtnyellow}>Salvar</button>
      </div>


      <div className={styles.containerCards}>
        <div className={styles.card}>
          <h2>Carta</h2>
          <div className={styles.containerCardLogo}>
            <Image src={"/images/logoclashroyale.png"} width={300} height={200} />
          </div>
          <div className={styles.containerCard}>
          <h2 className={styles.title}>nome{name} Nível {level}</h2>
            <div className={styles.containerHeader}>
              <div className={styles.cardImage}>
                {/* {rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "1" ? <Image src={"/images/communCard1.png"} width={50} height={50} />
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
                } */}
                <Image src={"/images/balao.png.png"} width={220} height={250} />
              </div>
            <div className={styles.headCard}>
              {rarity === "comum" ?     <div className={styles.fitrt}>
              <div className={styles.rarity}>
              <h3>Raridade:</h3>
              <h3>Comum</h3>
              </div>
              <div className={styles.type}>
                <h3>Tipo:</h3>
                <h3>{type}</h3>
              </div>
              </div> : 
              (rarity === "raro" ?     <div className={styles.fitrt}>
                <div className={styles.rarity}>
                  <h3>Raridade:</h3>
                  <h3>Raro</h3>
                  <div className={styles.type}>
                    <h3>Tipo:</h3>
                    <h3>{type}</h3>
                  </div>
                </div>
              </div> :
              rarity === "epico" ?     <div className={styles.fitrt}>
                <div className={styles.rarity}>
                  <h3>Raridade:</h3>
                  <h3>Épico</h3>
                  <div className={styles.type}>
                    <h3>Tipo:</h3>
                    <h3>{type}</h3>
                  </div>
                </div> 
              </div> :
              rarity === "lendario" ?     <div className={styles.fitrt}>
                <div className={styles.rarity}>
                  <h3>Raridade:</h3>
                  <h3>Lendário</h3>
                  <div className={styles.type}>
                    <h3>Tipo:</h3>
                    <h3>{type}</h3>
                  </div>
                </div>
              </div> :
              rarity === "campeao" ?     <div className={styles.fitrt}>
                <div className={styles.rarity}>
                  <h3>Raridade:</h3>
                  <h3>Campeão</h3>
                  <div className={styles.type}>
                    <h3>Tipo:</h3>
                    <h3>{type}</h3>
                  </div>
                </div>
              </div> : null
              )}
            <h3>{description}</h3>
              </div>
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
    </main>
  )
}
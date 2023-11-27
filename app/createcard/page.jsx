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

  // const onChangeImage = (e) => {
  //   const file = e.target.files[0];
  //   setImage(URL.createObjectURL(file));
  // }

  return (
    <main className={styles.backgroundimage}>
      <h1>Clash Royale</h1>
      <div className={styles.containerLogo}>
        <img src={"/images/logoclashroyale.png"} width={300} height={200} />
      </div>
      <div className={styles.conatainerInputs}>
        <input className={styles.input} type="text" placeholder="Nome da sua carta" value={name} onChange={e => setName(e.target.value)} />
        <select className={styles.select}
          value={level}
          onChange={e => setLevel(e.target.value)}
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
          onChange={e => setRarity(e.target.value)}
        >
          <option value="comum">Comum</option>
          <option value="raro">Raro</option>
          <option value="epico">Épico</option>
          <option value="lendario">Lendário</option>
          <option value="campeao">Campeão</option>
        </select>

        <select className={styles.select}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="tropa">Tropa</option>
          <option value="feitico">Feitiço</option>
          <option value="construcao">Construção</option>
        </select>

        <select className={styles.select}
          value={elixir}
          onChange={e => setElixir(e.target.value)}
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

        {/* <input type="file" className={styles.file} value={image} onChange={onChangeImage} /> */}
        <textarea className={styles.input} placeholder="Descrição da carta" value={description} onChange={e => setDescription(e.target.value)} />
        <button className={styles.scbtnyellow}>Salvar</button>
      </div>


      <div className={styles.containerCards}>
        <div className={styles.card}>
          <h2>Carta</h2>
          <div className={styles.containerCard}>
            <h2 className={styles.title}>{name} Nível {level}</h2>
            <div className={styles.containerHeader}>
              <div className={styles.cardImage}>
                {rarity === "comum" || rarity === "raro" || rarity === "epico" && elixir === "1" ? <img src={"/images/createcard/comum"} width={50} height={50} /> : null}



                {image ? <img src={image} width={300} height={200} /> : null }
              </div>
              <div className={styles.headCard}>
                {rarity === "comum" ?
                  <div className={styles.fitrt}>
                    <div className={styles.rarity}>
                      <h3>Raridade:</h3>
                      <h3>Comum</h3>
                    </div>
                    <div className={styles.type}>
                      <h3>Tipo:</h3>
                      <h3>{type}</h3>
                    </div>
                  </div> :
                  (rarity === "raro" ?
                    <div className={styles.fitrt}>
                      <div className={styles.rarity}>
                        <h3>Raridade:</h3>
                        <h3>Raro</h3>
                        <div className={styles.type}>
                          <h3>Tipo:</h3>
                          <h3>{type}</h3>
                        </div>
                      </div>
                    </div> :
                    rarity === "epico" ? <div className={styles.fitrt}>
                      <div className={styles.rarity}>
                        <h3>Raridade:</h3>
                        <h3>Épico</h3>
                        <div className={styles.type}>
                          <h3>Tipo:</h3>
                          <h3>{type}</h3>
                        </div>
                      </div>
                    </div> :
                      rarity === "lendario" ? <div className={styles.fitrt}>
                        <div className={styles.rarity}>
                          <h3>Raridade:</h3>
                          <h3>Lendário</h3>
                          <div className={styles.type}>
                            <h3>Tipo:</h3>
                            <h3>{type}</h3>
                          </div>
                        </div>
                      </div> :
                        rarity === "campeao" ? <div className={styles.fitrt}>
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
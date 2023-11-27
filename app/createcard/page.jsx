"use client";
import Image from "next/image"
import { useState, useEffect } from "react"
import styles from "../createcard/page.module.css"
import CardInfo from "../components/cardinfo/cardinfo";

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/api/cards", {
        name,
        level,
        rarity,
        type,
        elixir,
        image,
        description
      })
      setName("")
      setLevel("")
      setRarity("")
      setType("")
      setElixir("")
      setImage("")
      setDescription("")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

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
          <option value="">Selecione o nível</option>
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
          <option value="">Selecione a raridade</option>
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
          <option value="">Selecione o Tipo</option>
          <option value="tropa">Tropa</option>
          <option value="feitico">Feitiço</option>
          <option value="construcao">Construção</option>
        </select>

        <select className={styles.select}
          value={elixir}
          onChange={e => setElixir(e.target.value)}
        >
          <option value="">Selecione a quantidade de elixir</option>
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
        <button className={styles.scbtnyellow} onClick={handleSubmit}>Salvar</button>
      </div>


      <div className={styles.containerCard}>
        <CardInfo
          name={name}
          level={level}
          rarity={rarity}
          type={type}
          elixir={elixir}
          image={image}
          description={description}
        />
      </div>
    </main>
  )
}
"use client";
import Image from "next/image"
import ModalAtributes from "../../components/modalatributes/modalatributes";
import axios from "axios"
import { useState, useEffect } from "react"
import styles from "../createcard/page.module.css"
import CardInfo from "../../components/cardinfo/cardinfo";



export default function createCard() {
  const [cards, setCards] = useState([])
  const [name, setName] = useState("")
  const [level, setLevel] = useState("")
  const [rarity, setRarity] = useState("")
  const [type, setType] = useState("")
  const [elixir, setElixir] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [hp, setHp] = useState("")
  const [deploytime, setDeploytime] = useState("")
  const [shieldhp, setShieldhp] = useState("")
  const [damage, setDamage] = useState("")
  const [damagepersecond, setDamagepersecond] = useState("")
  const [rangeddamage, setRangeddamage] = useState("")
  const [damageondistance, setDamageondistance] = useState("")
  const [damageonarea, setDamageonarea] = useState("")
  const [damageonimpact, setDamageonimpact] = useState("")
  const [damageontower, setDamageontower] = useState("")
  const [chargedamage, setChargedamage] = useState("")
  const [damageondeath, setDamageondeath] = useState("")
  const [spawnspeed, setSpawnspeed] = useState("")
  const [duration, setDuration] = useState("")
  const [radius, setRadius] = useState("")
  const [width, setWidth] = useState("")
  const [efecttime, setEfecttime] = useState("")
  const [freezetime, setFreezetime] = useState("")
  const [unities, setUnities] = useState("")
  const [arena, setArena] = useState("")
  const [target, setTarget] = useState("")
  const [projectilerange, setProjectilerange] = useState("")
  const [range, setRange] = useState("")
  const [speed, setSpeed] = useState("")
  const [impactspeed, setImpactspeed] = useState("")
  const [id, setId] = useState("")


  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/cards", {
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

  const AtributesModal = () => {
    ModalAtributes({ type })
  }
  



  return (
    <main className={styles.backgroundimage}>
      <h1>Clash Royale</h1>
      <div className={styles.containerLogo}>
        <img src={"/images/logoclashroyale.png"} width={300} height={200} />
      </div>
      <div className={styles.conatainerInputs}>
        <input className={styles.input} type="text" maxLength={30} placeholder="Nome da sua carta" value={name} onChange={e => setName(e.target.value)} />
        <select className={styles.select}
          value={level}
          onChange={e => setLevel(e.target.value)}
        >
          <option value="">Selecione o nível</option>
          <option value={1}>Nível 1</option>
          <option value={2}>Nível 2</option>
          <option value={3}>Nível 3</option>
          <option value={4}>Nível 4</option>
          <option value={5}>Nível 5</option>
          <option value={6}>Nível 6</option>
          <option value={7}>Nível 7</option>
          <option value={8}>Nível 8</option>
          <option value={9}>Nível 9</option>
          <option value={10}>Nível 10</option>
          <option value={11}>Nível 11</option>
          <option value={12}>Nível 12</option>
          <option value={13}>Nível 13</option>
          <option value={14}>Nível 14</option>
          <option value={15}>Nível 15</option>
        </select>

        <select className={styles.select}
          value={rarity}
          onChange={e => setRarity(e.target.value)}
        >
          <option value="">Selecione a raridade</option>
          <option value="Comum">Comum</option>
          <option value="Raro">Raro</option>
          <option value="Épico">Épico</option>
          <option value="Lendário">Lendário</option>
          <option value="Campeão">Campeão</option>
        </select>

        <select className={styles.select}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="">Selecione o Tipo</option>
          <option value="Tropa">Tropa</option>
          <option value="Feitiço">Feitiço</option>
          <option value="Construção">Construção</option>
        </select>

        <select className={styles.select}
          value={elixir}
          onChange={e => setElixir(e.target.value)}
        >
          <option value="">Selecione a quantidade de elixir</option>
          <option value={1}>1 Elixir</option>
          <option value={2}>2 Elixir</option>
          <option value={3}>3 Elixir</option>
          <option value={4}>4 Elixir</option>
          <option value={5}>5 Elixir</option>
          <option value={6}>6 Elixir</option>
          <option value={7}>7 Elixir</option>
          <option value={8}>8 Elixir</option>
          <option value={9}>9 Elixir</option>
          <option value={10}>10 Elixir</option>
        </select>

        <input type = "file" className={styles.file} onChange={handleImage} />
        <textarea className={styles.input} placeholder="Descrição da carta" value={description} onChange={e => setDescription(e.target.value)} />
        <button className={styles.scbtnyellow} onClick={AtributesModal}>Adicionar atributos</button> 
        <button className={styles.scbtnyellow} onClick={handleSubmit}>Criar</button>
      </div>


      <div className={styles.containerCard}>
        <CardInfo
          name={name}
          image={image}
          type={type}
          rarity={rarity}
          elixir={elixir}
          hp={hp}
          deploytime={deploytime}
          shieldhp={shieldhp}
          description={description}
          damage={damage}
          damagepersecond={damagepersecond}
          rangeddamage={rangeddamage}
          damageondistance={damageondistance}
          damageonarea={damageonarea}
          damageonimpact={damageonimpact}
          damageontower={damageontower}
          chargedamage={chargedamage}
          damageondeath={damageondeath}
          spawnspeed={spawnspeed}
          duration={duration}
          radius={radius}
          width={width}
          efecttime={efecttime}
          freezetime={freezetime}
          unities={unities}
          arena={arena}
          target={target}
          projectilerange={projectilerange}
          range={range}
          speed={speed}
          impactspeed={impactspeed}
          id={id}
          level={level}
        />
      </div>
    </main>
  )
}
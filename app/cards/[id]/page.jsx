"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
  import Image from 'next/image';
import styles from '../createcard/page.module.css';
import { useRouter } from 'next/navigation';
import CardInfo from '@/app/components/cardinfo/cardinfo';
import CardInfoedit from '@/app/components/cardinfoedit/cardinfoedit';
import Header from '@/app/components/header/header';
// npm install react-icons --save

export default function updateCard({ params }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [rarity, setRarity] = useState("");
  const [elixir, setElixir] = useState("");
  const [hp, setHp] = useState("");
  const [deploytime, setDeploytime] = useState("");
  const [shieldhp, setShieldhp] = useState("");
  const [description, setDescription] = useState("");
  const [damage, setDamage] = useState("");
  const [damagepersecond, setDamagepersecond] = useState("");
  const [rangeddamage, setRangeddamage] = useState("");
  const [damageondistance, setDamageondistance] = useState("");
  const [damageonarea, setDamageonarea] = useState("");
  const [damageonimpact, setDamageonimpact] = useState("");
  const [damageontower, setDamageontower] = useState("");
  const [chargedamage, setChargedamage] = useState("");
  const [damageondeath, setDamageondeath] = useState("");
  const [spawnspeed, setSpawnspeed] = useState("");
  const [duration, setDuration] = useState("");
  const [radius, setRadius] = useState("");
  const [width, setWidth] = useState("");
  const [efecttime, setEfecttime] = useState("");
  const [freezetime, setFreezetime] = useState("");
  const [unities, setUnities] = useState("");
  const [arena, setArena] = useState("");
  const [target, setTarget] = useState("");
  const [projectilerange, setProjectilerange] = useState("");
  const [range, setRange] = useState("");
  const [speed, setSpeed] = useState("");
  const [impactspeed, setImpactspeed] = useState("");
  const [level, setLevel] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [show, setShow] = useState(true);

  const router = useRouter();
  const { id } = params;




  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/cards/${id}`);
        const card = response.data;
        console.log(card);
        setName(card.name);
        setImage(card.image);
        setType(card.type);
        setRarity(card.rarity);
        setElixir(card.elixir);
        setHp(card.hp);
        setDeploytime(card.deploytime);
        setShieldhp(card.shieldhp);
        setDescription(card.description);
        setDamage(card.damage);
        setDamagepersecond(card.damagepersecond);
        setRangeddamage(card.rangeddamage);
        setDamageondistance(card.damageondistance);
        setDamageonarea(card.damageonarea);
        setDamageonimpact(card.damageonimpact);
        setDamageontower(card.damageontower);
        setChargedamage(card.chargedamage);
        setDamageondeath(card.damageondeath);
        setSpawnspeed(card.spawnspeed);
        setDuration(card.duration);
        setRadius(card.radius);
        setWidth(card.width);
        setEfecttime(card.efecttime);
        setFreezetime(card.freezetime);
        setUnities(card.unities);
        setArena(card.arena);
        setTarget(card.target);
        setProjectilerange(card.projectilerange);
        setRange(card.range);
        setSpeed(card.speed);
        setImpactspeed(card.impactspeed);
        setLevel(card.level);

      } catch (error) {
        console.error(error);
      }
    }
    if (id) {
      fetchData();
    }
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/cards/${id}`, {
        name,
        image,
        type,
        rarity,
        elixir,
        hp,
        deploytime,
        shieldhp,
        description,
        damage,
        damagepersecond,
        rangeddamage,
        damageondistance,
        damageonarea,
        damageonimpact,
        damageontower,
        chargedamage,
        damageondeath,
        spawnspeed,
        duration,
        radius,
        width,
        efecttime,
        freezetime,
        unities,
        arena,
        target,
        projectilerange,
        range,
        speed,
        impactspeed
      }
      );
      router.push(`/cards/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file))
  }

  const AtributesModal = () => {
    ModalAtributes({ type })
  }
  const prosseguir = () => {
    setShowInput(true);
    setShow(false);
  }

  return (
    <main className={styles.backgroundimage}>
      <Header />
      <div className={styles.prosseguir} style={{ display: show ? 'block' : 'none' }} value={show}>
        <h1 className={styles.title}>Deseja editar a Carta?</h1>
        <div className={styles.containerButtonsp}>
          <button className={styles.scbtnyellow} onClick={prosseguir}>Sim</button>
          <button className={styles.scbtnyellow} onClick={() => router.push(`/cards`)}>Não</button>
        </div>
        <div className={styles.containerImageS}>
          <Image src={require(`/public/images/hog_thinking.png`)} className={styles.image} width={270} height={210} alt="Corredor pensativo" />
        </div>
      </div>
      <div style={{ display: showInput ? 'block' : 'none' }} value={showInput} >
        <div className={styles.conatainerInputs}>
          <button className={styles.scbtnyellow} onClick={() => router.push(`/cards`)}>Voltar</button>
          
          <label htmlFor="name">Nome</label>
          <input className={styles.input} type="text" maxLength={30} placeholder="Nome da sua carta" value={name} onChange={e => setName(e.target.value)} />
          
          <label htmlFor="level">Nível</label>
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


          <label htmlFor="rarity">Raridade</label> 
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

          <label htmlFor="type">Tipo</label>
          <select className={styles.select}
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="">Selecione o Tipo</option>
            <option value="Tropa">Tropa</option>
            <option value="Feitiço">Feitiço</option>
            <option value="Construção">Construção</option>
          </select>

          <label htmlFor="elixir">Elixir</label>
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
          <label htmlFor="hp">Pontos de vida</label>
          <input id="hp" className={styles.input} type="number" value={hp} onChange={e => setHp(e.target.value)}/>
          <label htmlFor="deploytime">Tempo de implantação</label>
          <input id="deploytime" className={styles.input} type="number" value={deploytime} onChange={e => setDeploytime(e.target.value)}/>
          <label htmlFor="damage">Dano</label>
          <input id="damage" className={styles.input} type="number" value={damage} onChange={e => setDamage(e.target.value)} />
          <label htmlFor="damagepersecond">Dano por segundo</label>
          <input id="damagepersecond" className={styles.input} type="number" value={damagepersecond} onChange={e => setDamagepersecond(e.target.value)} />
          <label htmlFor="rangeddamage">Dano a distância</label>
          <input id="rangeddamage" className={styles.input} type="number" value={rangeddamage} onChange={e => setRangeddamage(e.target.value)} />
          <label htmlFor="damageondistance">Dano a distância</label>
          <input id="damageondistance" className={styles.input} type="number" value={damageondistance} onChange={e => setDamageondistance(e.target.value)} />
          <label htmlFor="damageonarea">Dano em área</label>
          <input id="damageonarea" className={styles.input} type="number" value={damageonarea} onChange={e => setDamageonarea(e.target.value)} />
          <label htmlFor="damageonimpact">Dano no impacto</label>
          <input id="damageonimpact" className={styles.input} type="number" value={damageonimpact} onChange={e => setDamageonimpact(e.target.value)} />
          <label htmlFor="damageontower">Dano na torre</label>
          <input id="damageontower" className={styles.input} type="number" value={damageontower} onChange={e => setDamageontower(e.target.value)} />
          <label htmlFor="chargedamage">Dano carregado</label>
          <input id="chargedamage" className={styles.input} type="number" value={chargedamage} onChange={e => setChargedamage(e.target.value)} />
          <label htmlFor="damageondeath">Dano na morte</label>
          <input id="damageondeath" className={styles.input} type="number" value={damageondeath} onChange={e => setDamageondeath(e.target.value)} />
          <label htmlFor="spawnspeed">Velocidade de geração</label>
          <input id="spawnspeed" className={styles.input} type="number" value={spawnspeed} onChange={e => setSpawnspeed(e.target.value)} />
          <label htmlFor="duration">Duração</label>
          <input id="duration" className={styles.input} type="number" value={duration} onChange={e => setDuration(e.target.value)} />
          <label htmlFor="radius">Raio</label>
          <input id="radius" className={styles.input} type="number" value={radius} onChange={e => setRadius(e.target.value)} />
          <label htmlFor="width">Largura</label>
          <input id="width" className={styles.input} type="number" value={width} onChange={e => setWidth(e.target.value)} />
          <label htmlFor="efecttime">Tempo de efeito</label>
          <input id="efecttime" className={styles.input} type="number" value={efecttime} onChange={e => setEfecttime(e.target.value)} />
          <label htmlFor="freezetime">Tempo de congelamento</label>
          <input id="freezetime" className={styles.input} type="number" value={freezetime} onChange={e => setFreezetime(e.target.value)} />
          <label htmlFor="unities">Unidades</label>
          <input id="unities" className={styles.input} type="number" value={unities} onChange={e => setUnities(e.target.value)} />
          <label htmlFor="arena">Arena</label>
          <input id="arena" className={styles.input} type="number" value={arena} onChange={e => setArena(e.target.value)} />
          <label htmlFor="target">Alvo</label>
          <input id="target" className={styles.input} type="number" value={target} onChange={e => setTarget(e.target.value)} />
          <label htmlFor="projectilerange">Alcance do projetil</label>
          <input id="projectilerange" className={styles.input} type="number" value={projectilerange} onChange={e => setProjectilerange(e.target.value)} />
          <label htmlFor="range">Alcance</label>
          <input id="range" className={styles.input} type="number" value={range} onChange={e => setRange(e.target.value)} />
          <label htmlFor="speed">Velocidade</label>
          <input id="speed" className={styles.input} type="number" value={speed} onChange={e => setSpeed(e.target.value)} />
          <label htmlFor="impactspeed">Velocidade de impacto</label>
          <input id="impactspeed" className={styles.input} type="number" value={impactspeed} onChange={e => setImpactspeed(e.target.value)} />
          <label className={styles.label} htmlFor="file">Selecione uma imagem</label>
          <input className={styles.file} type="file" id="file" onChange={handleImage} />
          <textarea className={styles.input} placeholder="Descrição da carta" value={description} onChange={e => setDescription(e.target.value)} />
          <button className={styles.scbtnyellow} onClick={AtributesModal}>Adicionar atributos</button>
          <button className={styles.scbtnyellow} onClick={handleSubmit}>Editar</button>
        </div>
        <div className={styles.containerCardInfo}>
          <CardInfoedit
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
            level={level}
          />
        </div>
      </div>
    </main>
  )
}
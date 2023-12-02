"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ModalAtributes from '@/app/components/modalatributes/modalatributes';
import Image from 'next/image';
import styles from '../createcard/page.module.css';
import { useRouter } from 'next/navigation';
import CardInfo from '@/app/components/cardinfo/cardinfo';
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
              const formData = new FormData();
              formData.append('name', name);
              formData.append('image', image);
              formData.append('type', type);
              formData.append('rarity', rarity);
              formData.append('elixir', elixir);
              formData.append('hp', hp);
              formData.append('deploytime', deploytime);
              formData.append('shieldhp', shieldhp);
              formData.append('description', description);
              formData.append('damage', damage);
              formData.append('damagepersecond', damagepersecond);
              formData.append('rangeddamage', rangeddamage);
              formData.append('damageondistance', damageondistance);
              formData.append('damageonarea', damageonarea);
              formData.append('damageonimpact', damageonimpact);
              formData.append('damageontower', damageontower);
              formData.append('chargedamage', chargedamage);
              formData.append('damageondeath', damageondeath);
              formData.append('spawnspeed', spawnspeed);
              formData.append('duration', duration);
              formData.append('radius', radius);
              formData.append('width', width);
              formData.append('efecttime', efecttime);
              formData.append('freezetime', freezetime);
              formData.append('unities', unities);
              formData.append('arena', arena);
              formData.append('target', target);
              formData.append('projectilerange', projectilerange);
              formData.append('range', range);
              formData.append('speed', speed);
              formData.append('impactspeed', impactspeed);
              formData.append('level', level);
              const response = await axios.put(`/api/cards/${id}`, formData);
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
        <div className={styles.prosseguir} style={{ display: show ? 'block' : 'none'}} value={show}>
          <h1 className={styles.title}>Deseja editar a Carta?</h1>
          <div className={styles.containerButtonsp}>
          <button className={styles.scbtnyellow} onClick={prosseguir}>Sim</button>
          <button className={styles.scbtnyellow} onClick={() => router.push(`/cards`)}>Não</button>
          </div>
          <div className={styles.containerImageS}>
          <Image src={require(`/public/images/hog_thinking.png`)} className={styles.image} width={270} height={210} alt="Corredor pensativo" />
          </div>
        </div>
        <div style={{ display: showInput ? 'block' : 'none'}} value={showInput} >
        <div className={styles.conatainerInputs}>
        <button className={styles.scbtnyellow} onClick={() => router.push(`/cards`)}>Voltar</button>
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
        {hp ? <input className={styles.input} type="number" placeholder="Pontos de vida" value={hp} onChange={e => setHp(e.target.value)} /> : null}
        {deploytime ? <input className={styles.input} type="number" placeholder="Tempo de implantação" value={deploytime} onChange={e => setDeploytime(e.target.value)} /> : null}
        {shieldhp ? <input className={styles.input} type="number" placeholder="Pontos de vida do escudo" value={shieldhp} onChange={e => setShieldhp(e.target.value)} /> : null}
        {damage ? <input className={styles.input} type="number" placeholder="Dano" value={damage} onChange={e => setDamage(e.target.value)} /> : null}
        {damagepersecond ? <input className={styles.input} type="number" placeholder="Dano por segundo" value={damagepersecond} onChange={e => setDamagepersecond(e.target.value)} /> : null}
        {rangeddamage ? <input className={styles.input} type="number" placeholder="Dano a distância" value={rangeddamage} onChange={e => setRangeddamage(e.target.value)} /> : null}
        {damageondistance ? <input className={styles.input} type="number" placeholder="Dano a distância" value={damageondistance} onChange={e => setDamageondistance(e.target.value)} /> : null}
        {damageonarea ? <input className={styles.input} type="number" placeholder="Dano em área" value={damageonarea} onChange={e => setDamageonarea(e.target.value)} /> : null}
        {damageonimpact ? <input className={styles.input} type="number" placeholder="Dano no impacto" value={damageonimpact} onChange={e => setDamageonimpact(e.target.value)} /> : null}
        {damageontower ? <input className={styles.input} type="number" placeholder="Dano na torre" value={damageontower} onChange={e => setDamageontower(e.target.value)} /> : null}
        {chargedamage ? <input className={styles.input} type="number" placeholder="Dano carregado" value={chargedamage} onChange={e => setChargedamage(e.target.value)} /> : null}
        {damageondeath ? <input className={styles.input} type="number" placeholder="Dano na morte" value={damageondeath} onChange={e => setDamageondeath(e.target.value)} /> : null}
        {spawnspeed ? <input className={styles.input} type="number" placeholder="Velocidade de surgimento" value={spawnspeed} onChange={e => setSpawnspeed(e.target.value)} /> : null}
        {duration ? <input className={styles.input} type="number" placeholder="Duração" value={duration} onChange={e => setDuration(e.target.value)} /> : null}
        {radius ? <input className={styles.input} type="number" placeholder="Raio" value={radius} onChange={e => setRadius(e.target.value)} /> : null}
        {width ? <input className={styles.input} type="number" placeholder="Largura" value={width} onChange={e => setWidth(e.target.value)} /> : null}
        {efecttime ? <input className={styles.input} type="number" placeholder="Tempo de efeito" value={efecttime} onChange={e => setEfecttime(e.target.value)} /> : null}
        {freezetime ? <input className={styles.input} type="number" placeholder="Tempo de congelamento" value={freezetime} onChange={e => setFreezetime(e.target.value)} /> : null}
        {unities ? <input className={styles.input} type="number" placeholder="Unidades" value={unities} onChange={e => setUnities(e.target.value)} /> : null}
        {arena ? <input className={styles.input} type="text" placeholder="Arena" value={arena} onChange={e => setArena(e.target.value)} /> : null}
        {target ? <input className={styles.input} type="text" placeholder="Alvo" value={target} onChange={e => setTarget(e.target.value)} /> : null}
        {projectilerange ? <input className={styles.input} type="number" placeholder="Alcance do projetil" value={projectilerange} onChange={e => setProjectilerange(e.target.value)} /> : null}
        {range ? <input className={styles.input} type="text" placeholder="Alcance" value={range} onChange={e => setRange(e.target.value)} /> : null}
        {speed ? <input className={styles.input} type="text" placeholder="Velocidade" value={speed} onChange={e => setSpeed(e.target.value)} /> : null}
        {impactspeed ? <input className={styles.input} type="text" placeholder="Velocidade de impacto" value={impactspeed} onChange={e => setImpactspeed(e.target.value)} /> : null}
        <label className={styles.label} htmlFor="file">Selecione uma imagem</label>
        <input className={styles.file} type="file" id="file" onChange={handleImage} />
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
        level={level}
      />
      </div>
    </div>
    </main>
    )
}
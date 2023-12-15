"use client";
import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import styles3 from "@/app/components/cardinfo/cardinfo.module.css";
import axios from 'axios';
import Image from 'next/image';
import styles from '../createcard/page.module.css';
import { useRouter } from 'next/navigation';
import CardInfo from '@/app/components/cardinfo/cardinfo';
import CardInfoedit from '@/app/components/cardinfoedit/cardinfoedit';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
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
  const [imageupdated, setImageUpdated] = useState("");
  const [show, setShow] = useState(true);
  const [iscreated, setIsCreated] = useState("");
  const [change, setChange] = useState("");
   const [atributes, setAtributes] = useState([]);
   const [errorA, setErrorA] = useState("");
 
  const router = useRouter();
  const divRef = useRef(null);
  const { id } = params;

  console.log({ iscreated })
  const scrollToUp = () => {
    window.scrollTo(0, 0);
}


// Função para validar a quantidade de atributos
 const validateAtributesQuantity = () => {
   let hasError = false;
   if(atributes.length > 10){
     setErrorA("Você adicionou mais de 10 atributos!")
     setTimeout(() => {
       setErrorA("")
     }, 3000)
     hasError = true;
   }
   if (hasError) {
     return false;
 } else {
     setErrorA("");
     return true; 
 }

 }

 // Função para lidar com a seleção nos states
 const handleHpChange = (event) => {
  setHp(event.target.value);
  updateAttributesByStatesChanges(); 
};

  const handleDeploytimeChange = (event) => {
    setDeploytime(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleShieldhpChange = (event) => {
    setShieldhp(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDamageChange = (event) => {
    setDamage(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDamagepersecondChange = (event) => {
    setDamagepersecond(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleRangeddamageChange = (event) => {
    setRangeddamage(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDamageondistanceChange = (event) => {
    setDamageondistance(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDamageonareaChange = (event) => {
    setDamageonarea(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDamageonimpactChange = (event) => {
    setDamageonimpact(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDamageontowerChange = (event) => {
    setDamageontower(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleChargedamageChange = (event) => {
    setChargedamage(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDamageondeathChange = (event) => {
    setDamageondeath(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleSpawnspeedChange = (event) => {
    setSpawnspeed(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleEfecttimeChange = (event) => {
    setEfecttime(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleFreezetimeChange = (event) => {
    setFreezetime(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleUnitiesChange = (event) => {
    setUnities(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleArenaChange = (event) => {
    setArena(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
    updateAttributesByStatesChanges();
  };
  
  const handleProjectilerangeChange = (event) => {
    setProjectilerange(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleRangeChange = (event) => {
    setRange(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
    updateAttributesByStatesChanges();
  };

  const handleImpactspeedChange = (event) => {
    setImpactspeed(event.target.value);
    updateAttributesByStatesChanges();
  };

// Função para atualizar os atributos de acordo com as mudanças nos states
 const updateAttributesByStatesChanges = () => {
    let newAttributes = [];
    if(hp) newAttributes.push(hp);
    if(deploytime) newAttributes.push(deploytime);
    if(shieldhp) newAttributes.push(shieldhp);
    if(damage) newAttributes.push(damage);   
    if(damagepersecond) newAttributes.push(damagepersecond);
    if(rangeddamage) newAttributes.push(rangeddamage);
    if(damageondistance) newAttributes.push(damageondistance);
    if(damageonarea) newAttributes.push(damageonarea);
    if(damageonimpact) newAttributes.push(damageonimpact);
    if(damageontower) newAttributes.push(damageontower);
    if(chargedamage) newAttributes.push(chargedamage);
    if(damageondeath) newAttributes.push(damageondeath);
    if(spawnspeed) newAttributes.push(spawnspeed);
    if(duration) newAttributes.push(duration);
    if(radius) newAttributes.push(radius);
    if(width) newAttributes.push(width);
    if(efecttime) newAttributes.push(efecttime);
    if(freezetime) newAttributes.push(freezetime);
    if(unities) newAttributes.push(unities);
    if(target) newAttributes.push(target);
    if(projectilerange) newAttributes.push(projectilerange);
    if(range) newAttributes.push(range);
    if(speed) newAttributes.push(speed);
    if(impactspeed) newAttributes.push(impactspeed);
    setAtributes(newAttributes);
  }

// Função para atualizar os atributos de acordo com as mudanças no useeffect
 const updateAttributes = (card) => {
  const newAttributes = [];
  
  // Verificar cada atributo e adicionar à lista de novos atributos se não estiver vazio
  if (card.hp) newAttributes.push(card.hp);
  if (card.deploytime) newAttributes.push(card.deploytime);
  if (card.shieldhp) newAttributes.push(card.shieldhp);
  if (card.damage) newAttributes.push(card.damage);
  if (card.damagepersecond) newAttributes.push(card.damagepersecond);
  if (card.rangeddamage) newAttributes.push(card.rangeddamage);
  if (card.damageondistance) newAttributes.push(card.damageondistance);
  if (card.damageonarea) newAttributes.push(card.damageonarea);
  if (card.damageonimpact) newAttributes.push(card.damageonimpact);
  if (card.damageontower) newAttributes.push(card.damageontower);
  if (card.chargedamage) newAttributes.push(card.chargedamage);
  if (card.damageondeath) newAttributes.push(card.damageondeath);
  if (card.spawnspeed) newAttributes.push(card.spawnspeed);
  if (card.duration) newAttributes.push(card.duration);
  if (card.radius) newAttributes.push(card.radius);
  if (card.width) newAttributes.push(card.width);
  if (card.efecttime) newAttributes.push(card.efecttime);
  if (card.freezetime) newAttributes.push(card.freezetime);
  if (card.unities) newAttributes.push(card.unities);
  if (card.target) newAttributes.push(card.target);
  if (card.projectilerange) newAttributes.push(card.projectilerange);
  if (card.range) newAttributes.push(card.range);
  if (card.speed) newAttributes.push(card.speed);
  if (card.impactspeed) newAttributes.push(card.impactspeed);

  setAtributes(newAttributes);
};

const scrollToDown = () => {
    window.scrollTo(0, 1000000);
}
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/cards/${id}`);
        const card = response.data;
        console.log(card);
        setName(card.name);
        setImageUpdated(card.image);
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
        setRangeddamage(card.rangeddamage);
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
        setIsCreated(card.iscreated)
        updateAttributes(card);

        console.log(card)
      } catch (error) {
        console.error(error);
      }
    }
    if (id) {
      fetchData();
    }
  }, [id]);
   console.log({ atributes })
  const handleSubmit = async (e) => {
    e.preventDefault();

     const isValid = validateAtributesQuantity();
     if (isValid) {
    createImageOfaDiv();
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
      clearAll();
      router.push(`/cards`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
     }
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    setImageUpdated(URL.createObjectURL(file))
    setChange("Sim")
  }

  const clearAll = () => {
    setName("");
    setImage("");
    setType("");
    setRarity("");
    setElixir("");
    setHp("");
    setDeploytime("");
    setShieldhp("");
    setDescription("");
    setDamage("");
    setDamagepersecond("");
    setRangeddamage("");
    setDamageondistance("");
    setDamageonarea("");
    setDamageonimpact("");
    setDamageontower("");
    setChargedamage("");
    setDamageondeath("");
    setSpawnspeed("");
    setDuration("");
    setRadius("");
    setWidth("");
    setEfecttime("");
    setFreezetime("");
    setUnities("");
    setArena("");
    setTarget("");
    setProjectilerange("");
    setRange("");
    setSpeed("");
    setImpactspeed("");
    setLevel("");

  }




  const createImageOfaDiv = async () => {
    const div = divRef.current;

    if (div) {
      try {
        const canvas = await html2canvas(div, { useCORS: true });

        if (canvas) {

          const dataURL = canvas.toDataURL('image/JPEG');
          setImage(dataURL);
          setIsCreated("Sim")
        } else {
          console.error('Canvas vazio ou não foi criado corretamente');
        }
      } catch (error) {
        console.error('Erro ao criar a imagem:', error);
      }
    }
  };

  const prosseguir = () => {
    setShowInput(true);
    setShow(false);
  }

  return (
    <main className={styles.backgroundimage}>
      <Header />
      <main className={styles.main22}>
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
      <div className={styles.containerScrolls}>
                <button onClick={scrollToUp}>
                    <IoIosArrowUp />
                </button>
                <button onClick={scrollToDown}>
                    <IoIosArrowDown />
                </button>
            </div>
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
      {iscreated == "Criado" ? (
        null ) :
        <>
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
          </>
  }

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

          {iscreated == "Criado" || iscreated == "Sim" ? (
            <>
              <label htmlFor="elixir">Elixir</label>
              <select className={styles.select} value={elixir} onChange={e => setElixir(e.target.value)}>
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
            </>
          ) : (
            null
          )}
          <label htmlFor="hp">Pontos de vida</label>
          <input id="hp" className={styles.input} type="number" value={hp} onChange={handleHpChange} />
          <label htmlFor="deploytime">Tempo de implantação</label>
          <input id="deploytime" className={styles.input} type="text" value={deploytime} onChange={handleDeploytimeChange} />
          <label htmlFor="damage">Dano</label>
          <input id="damage" className={styles.input} type="text" value={damage} onChange={handleDamageChange} />
          <label htmlFor="damagepersecond">Dano por segundo</label>
          <input id="damagepersecond" className={styles.input} type="text" value={damagepersecond} onChange={handleDamagepersecondChange} />
          <label htmlFor="damageondistance">Dano a distância</label>
          <input id="damageondistance" className={styles.input} type="text" value={damageondistance} onChange={handleDamageondistanceChange} />
          <label htmlFor="damageonarea">Dano em área</label>
          <input id="damageonarea" className={styles.input} type="text" value={damageonarea} onChange={handleDamageonareaChange} />
          <label htmlFor="damageonimpact">Dano no impacto</label>
          <input id="damageonimpact" className={styles.input} type="text" value={damageonimpact} onChange={handleDamageonimpactChange} />
          <label htmlFor="damageontower">Dano na torre</label>
          <input id="damageontower" className={styles.input} type="text" value={damageontower} onChange={handleDamageontowerChange} />
          <label htmlFor="chargedamage">Dano carregado</label>
          <input id="chargedamage" className={styles.input} type="text" value={chargedamage} onChange={handleChargedamageChange} />
          <label htmlFor="damageondeath">Dano na morte</label>
          <input id="damageondeath" className={styles.input} type="text" value={damageondeath} onChange={handleDamageondeathChange} />
          <label htmlFor="rangeddamage">Dano a distância</label>
          <input id="rangeddamage" className={styles.input} type="text" value={rangeddamage} onChange={handleRangeddamageChange} />
          <label htmlFor="shieldhp">Vida do escudo</label>
          <input id="shieldhp" className={styles.input} type="text" value={shieldhp} onChange={handleShieldhpChange} />
          <label htmlFor="spawnspeed">Velocidade de geração</label>
          <input id="spawnspeed" className={styles.input} type="text" value={spawnspeed} onChange={handleSpawnspeedChange} />
          <label htmlFor="duration">Duração</label>
          <input id="duration" className={styles.input} type="text" value={duration} onChange={handleDurationChange} />
          <label htmlFor="radius">Raio</label>
          <input id="radius" className={styles.input} type="text" value={radius} onChange={handleRadiusChange} />
          <label htmlFor="width">Largura</label>
          <input id="width" className={styles.input} type="text" value={width} onChange={handleWidthChange} />
          <label htmlFor="efecttime">Tempo de efeito</label>
          <input id="efecttime" className={styles.input} type="text" value={efecttime} onChange={handleEfecttimeChange} />
          <label htmlFor="freezetime">Tempo de congelamento</label>
          <input id="freezetime" className={styles.input} type="text" value={freezetime} onChange={handleFreezetimeChange} />
          <label htmlFor="unities">Unidades</label>
          <input id="unities" className={styles.input} type="text" value={unities} onChange={handleUnitiesChange} />
          <label htmlFor="arena">Arena</label>
          <input id="arena" className={styles.input} type="text" value={arena} onChange={handleArenaChange} />
          <label htmlFor="target">Alvo</label>
          <input id="target" className={styles.input} type="text" value={target} onChange={handleTargetChange} />
          <label htmlFor="projectilerange">Alcance do projetil</label>
          <input id="projectilerange" className={styles.input} type="text" value={projectilerange} onChange={handleProjectilerangeChange} />
          <label htmlFor="range">Alcance</label>
          <input id="range" className={styles.input} type="text" value={range} onChange={handleRangeChange} />
          <label htmlFor="speed">Velocidade</label>
          <input id="speed" className={styles.input} type="text" value={speed} onChange={handleSpeedChange} />
          <label htmlFor="impactspeed">Velocidade de impacto</label>
          <input id="impactspeed" className={styles.input} type="text" value={impactspeed} onChange={handleImpactspeedChange} />
          {iscreated == "Criado" || iscreated == "Sim" ? (
          <label htmlFor="fileInput" className={styles.customFileInput}>
          ESCOLHA UMA IMAGEM DOS SEUS ARQUIVOS
          📂
          <input type="file" id="fileInput" className={styles.file} onChange={handleImage} />
        </label>
          ) : null}
          <textarea className={styles.input} placeholder="Descrição da carta" value={description} onChange={e => setDescription(e.target.value)} />
          <p className={styles.error}>{errorA}</p> 
          <button className={styles.scbtnyellow} onClick={handleSubmit}>Editar</button>
        </div>
        <div className={styles.containerCards201} ref={divRef} >
          <div className={styles.containerCards21}>
            {
              iscreated == "Criado" || iscreated == "Sim" ? (
                createImageOfaDiv(),
                elixir == "1" && rarity == "Comum" || elixir == "1" && rarity == "Raro" || elixir == "1" && rarity == "Épico" ? (
                  <div className={styles3.imagecomming} style={{
                    backgroundImage: `url(${imageupdated})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "250px 290px",
                    borderRadius: "40px",
                    backgroundPositionY: "-21px",
                    backgroundPositionX: "-11px",
                    backgroundPosition: "center",
                  }}>
                    <div className={styles3.oi}>
                      <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                      <Image src={"/images/createcard/communCard1.png"} className={styles3.oi2} width={63} height={63} />
                    </div>
                  </div>
                ) : (
                  elixir == "2" && rarity == "Comum" || elixir == "2" && rarity == "Raro" || elixir == "2" && rarity == "Épico" ? (
                    createImageOfaDiv(),
                    <div className={styles3.imagecomming} style={{
                      backgroundImage: `url(${imageupdated})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "250px 295px",
                      borderRadius: "40px",
                      backgroundPositionY: "-21px",
                      backgroundPositionX: "-11px",
                      backgroundPosition: "center",
                    }}>
                      <div className={styles3.oi}>
                        <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                        <Image src={"/images/createcard/communCard2.png"} className={styles3.oi2} width={63} height={63} />
                      </div>
                    </div>
                  ) : (
                    elixir == "3" && rarity == "Comum" || elixir == "3" && rarity == "Raro" || elixir == "3" && rarity == "Épico" ? (
                      createImageOfaDiv(),
                      <div className={styles3.imagecomming} style={{
                        backgroundImage: `url(${imageupdated})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "250px 295px",
                        borderRadius: "40px",
                        backgroundPositionY: "-21px",
                        backgroundPositionX: "-11px",
                        backgroundPosition: "center",
                      }}>
                        <div className={styles3.oi}>
                          <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                          <Image src={"/images/createcard/communCard3.png"} className={styles3.oi2} width={63} height={63} />
                        </div>
                      </div>
                    ) : (
                      elixir == "4" && rarity == "Comum" || elixir == "4" && rarity == "Raro" || elixir == "4" && rarity == "Épico" ? (
                        createImageOfaDiv(),
                        <div className={styles3.imagecomming} style={{
                          backgroundImage: `url(${imageupdated})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "250px 295px",
                          borderRadius: "40px",
                          backgroundPositionY: "-21px",
                          backgroundPositionX: "-11px",
                          backgroundPosition: "center",
                        }}>
                          <div className={styles3.oi}>
                            <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                            <Image src={"/images/createcard/communCard4.png"} className={styles3.oi2} width={63} height={63} />
                          </div>
                        </div>
                      ) : (
                        elixir == "5" && rarity == "Comum" || elixir == "5" && rarity == "Raro" || elixir == "5" && rarity == "Épico" ? (
                          createImageOfaDiv(),
                          <div className={styles3.imagecomming} style={{
                            backgroundImage: `url(${imageupdated})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "250px 295px",
                            borderRadius: "40px",
                            backgroundPositionY: "-21px",
                            backgroundPositionX: "-11px",
                            backgroundPosition: "center",
                          }}>
                            <div className={styles3.oi}>
                              <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                              <Image src={"/images/createcard/communCard5.png"} className={styles3.oi2} width={63} height={63} />
                            </div>
                          </div>
                        ) : (
                          elixir == "6" && rarity == "Comum" || elixir == "6" && rarity == "Raro" || elixir == "6" && rarity == "Épico" ? (
                            createImageOfaDiv(),
                            <div className={styles3.imagecomming} style={{
                              backgroundImage: `url(${imageupdated})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "250px 295px",
                              borderRadius: "40px",
                              backgroundPositionY: "-21px",
                              backgroundPositionX: "-11px",
                              backgroundPosition: "center",
                            }}>
                              <div className={styles3.oi}>
                                <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                                <Image src={"/images/createcard/communCard6.png"} className={styles3.oi2} width={63} height={63} />
                              </div>
                            </div>
                          ) : (
                            elixir == "7" && rarity == "Comum" || elixir == "7" && rarity == "Raro" || elixir == "7" && rarity == "Épico" ? (
                              createImageOfaDiv(),
                              <div className={styles3.imagecomming} style={{
                                backgroundImage: `url(${imageupdated})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "250px 295px",
                                borderRadius: "40px",
                                backgroundPositionY: "-21px",
                                backgroundPositionX: "-11px",
                                backgroundPosition: "center",
                              }}>
                                <div className={styles3.oi}>
                                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                                  <Image src={"/images/createcard/communCard7.png"} className={styles3.oi2} width={63} height={63} />
                                </div>
                              </div>
                            ) : (
                              elixir == "8" && rarity == "Comum" || elixir == "8" && rarity == "Raro" || elixir == "8" && rarity == "Épico" ? (
                                createImageOfaDiv(),
                                <div className={styles3.imagecomming} style={{
                                  backgroundImage: `url(${imageupdated})`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "250px 295px",
                                  borderRadius: "40px",
                                  backgroundPositionY: "-21px",
                                  backgroundPositionX: "-11px",
                                  backgroundPosition: "center",
                                }}>
                                  <div className={styles3.oi}>
                                    <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                                    <Image src={"/images/createcard/communCard8.png"} className={styles3.oi2} width={63} height={63} />
                                  </div>
                                </div>
                              ) : (
                                elixir == "9" && rarity == "Comum" || elixir == "9" && rarity == "Raro" || elixir == "9" && rarity == "Épico" ? (
                                  createImageOfaDiv(),
                                  <div className={styles3.imagecomming} style={{
                                    backgroundImage: `url(${imageupdated})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "250px 295px",
                                    borderRadius: "40px",
                                    backgroundPositionY: "-21px",
                                    backgroundPositionX: "-11px",
                                    backgroundPosition: "center",
                                  }}>
                                    <div className={styles3.oi}>
                                      <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                                      <Image src={"/images/createcard/communCard9.png"} className={styles3.oi2} width={63} height={63} />
                                    </div>
                                  </div>
                                ) : (
                                  elixir == "10" && rarity == "Comum" || elixir == "10" && rarity == "Raro" || elixir == "10" && rarity == "Épico" ? (
                                    createImageOfaDiv(),
                                    <div className={styles3.imagecomming} style={{
                                      backgroundImage: `url(${imageupdated})`,
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "250px 295px",
                                      borderRadius: "40px",
                                      backgroundPositionY: "-21px",
                                      backgroundPositionX: "-11px",
                                      backgroundPosition: "center",
                                    }}>
                                      <div className={styles3.oi}>
                                        <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                                        <Image src={"/images/createcard/communCard10.png"} className={styles3.oi2} width={63} height={63} />
                                      </div>
                                    </div>
                                  ) : (
                                    elixir == "1" && rarity == "Lendário" ? (
                                      createImageOfaDiv(),
                                      <div className={styles3.imagecomming} style={{
                                        backgroundImage: `url(${imageupdated})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "220px 215px",
                                        borderBottomLeftRadius: "180px",
                                        borderBottomRightRadius: "180px",
                                        borderTopLeftRadius: "100px",
                                        borderTopRightRadius: "170px",
                                        backgroundPositionY: "20px",
                                        backgroundPositionX: "center",
                                        backgroundPosition: "center",
                                      }}>
                                        <div className={styles3.oi}>
                                          <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                          <Image src={"/images/createcard/communCard1.png"} className={styles3.oi2} width={63} height={63} />
                                        </div>
                                      </div>
                                    ) : (
                                      elixir == "2" && rarity == "Lendário" ? (
                                        createImageOfaDiv(),
                                        <div className={styles3.imagecomming} style={{
                                          backgroundImage: `url(${imageupdated})`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "220px 215px",
                                          borderBottomLeftRadius: "180px",
                                          borderBottomRightRadius: "180px",
                                          borderTopLeftRadius: "100px",
                                          borderTopRightRadius: "170px",
                                          backgroundPositionY: "20px",
                                          backgroundPositionX: "center",
                                          backgroundPosition: "center",
                                        }}>
                                          <div className={styles3.oi}>
                                            <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                            <Image src={"/images/createcard/communCard2.png"} className={styles3.oi2} width={63} height={63} />
                                          </div>
                                        </div>
                                      ) : (
                                        elixir == "3" && rarity == "Lendário" ? (
                                          createImageOfaDiv(),
                                          <div className={styles3.imagecomming} style={{
                                            backgroundImage: `url(${imageupdated})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "220px 215px",
                                            borderBottomLeftRadius: "180px",
                                            borderBottomRightRadius: "180px",
                                            borderTopLeftRadius: "100px",
                                            borderTopRightRadius: "170px",
                                            backgroundPositionY: "20px",
                                            backgroundPositionX: "center",
                                            backgroundPosition: "center",
                                          }}>
                                            <div className={styles3.oi}>
                                              <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                              <Image src={"/images/createcard/communCard3.png"} className={styles3.oi2} width={63} height={63} />
                                            </div>
                                          </div>
                                        ) : (
                                          elixir == "4" && rarity == "Lendário" ? (
                                            createImageOfaDiv(),
                                            <div className={styles3.imagecomming} style={{
                                              backgroundImage: `url(${imageupdated})`,
                                              backgroundRepeat: "no-repeat",
                                              backgroundSize: "220px 215px",
                                              borderBottomLeftRadius: "180px",
                                              borderBottomRightRadius: "180px",
                                              borderTopLeftRadius: "100px",
                                              borderTopRightRadius: "170px",
                                              backgroundPositionY: "20px",
                                              backgroundPositionX: "center",
                                              backgroundPosition: "center",
                                            }}>
                                              <div className={styles3.oi}>
                                                <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                <Image src={"/images/createcard/communCard4.png"} className={styles3.oi2} width={63} height={63} />
                                              </div>
                                            </div>
                                          ) : (
                                            elixir == "5" && rarity == "Lendário" ? (
                                              createImageOfaDiv(),
                                              <div className={styles3.imagecomming} style={{
                                                backgroundImage: `url(${imageupdated})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "220px 215px",
                                                borderBottomLeftRadius: "180px",
                                                borderBottomRightRadius: "180px",
                                                borderTopLeftRadius: "100px",
                                                borderTopRightRadius: "170px",
                                                backgroundPositionY: "20px",
                                                backgroundPositionX: "center",
                                                backgroundPosition: "center",
                                              }}>
                                                <div className={styles3.oi}>
                                                  <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                  <Image src={"/images/createcard/communCard5.png"} className={styles3.oi2} width={63} height={63} />
                                                </div>
                                              </div>
                                            ) : (
                                              elixir == "6" && rarity == "Lendário" ? (
                                                createImageOfaDiv(),
                                                <div className={styles3.imagecomming} style={{
                                                  backgroundImage: `url(${imageupdated})`,
                                                  backgroundRepeat: "no-repeat",
                                                  backgroundSize: "220px 215px",
                                                  borderBottomLeftRadius: "180px",
                                                  borderBottomRightRadius: "180px",
                                                  borderTopLeftRadius: "100px",
                                                  borderTopRightRadius: "170px",
                                                  backgroundPositionY: "20px",
                                                  backgroundPositionX: "center",
                                                  backgroundPosition: "center",
                                                }}>
                                                  <div className={styles3.oi}>
                                                    <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                    <Image src={"/images/createcard/communCard6.png"} className={styles3.oi2} width={63} height={63} />
                                                  </div>
                                                </div>
                                              ) : (
                                                elixir == "7" && rarity == "Lendário" ? (
                                                  createImageOfaDiv(),

                                                  <div className={styles3.imagecomming} style={{
                                                    backgroundImage: `url(${imageupdated})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "220px 215px",
                                                    borderBottomLeftRadius: "180px",
                                                    borderBottomRightRadius: "180px",
                                                    borderTopLeftRadius: "100px",
                                                    borderTopRightRadius: "170px",
                                                    backgroundPositionY: "20px",
                                                    backgroundPositionX: "center",
                                                    backgroundPosition: "center",
                                                  }}>
                                                    <div className={styles3.oi}>
                                                      <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                      <Image src={"/images/createcard/communCard7.png"} className={styles3.oi2} width={63} height={63} />
                                                    </div>
                                                  </div>
                                                ) : (
                                                  elixir == "8" && rarity == "Lendário" ? (
                                                    createImageOfaDiv(),
                                                    <div className={styles3.imagecomming} style={{
                                                      backgroundImage: `url(${imageupdated})`,
                                                      backgroundRepeat: "no-repeat",
                                                      backgroundSize: "220px 215px",
                                                      borderBottomLeftRadius: "180px",
                                                      borderBottomRightRadius: "180px",
                                                      borderTopLeftRadius: "100px",
                                                      borderTopRightRadius: "170px",
                                                      backgroundPositionY: "20px",
                                                      backgroundPositionX: "center",
                                                      backgroundPosition: "center",
                                                    }}>
                                                      <div className={styles3.oi}>
                                                        <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                        <Image src={"/images/createcard/communCard8.png"} className={styles3.oi2} width={63} height={63} />
                                                      </div>
                                                    </div>
                                                  ) : (
                                                    elixir == "9" && rarity == "Lendário" ? (
                                                      createImageOfaDiv(),
                                                      <div className={styles3.imagecomming} style={{
                                                        backgroundImage: `url(${imageupdated})`,
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundSize: "220px 215px",
                                                        borderBottomLeftRadius: "180px",
                                                        borderBottomRightRadius: "180px",
                                                        borderTopLeftRadius: "100px",
                                                        borderTopRightRadius: "170px",
                                                        backgroundPositionY: "20px",
                                                        backgroundPositionX: "center",
                                                        backgroundPosition: "center",
                                                      }}>
                                                        <div className={styles3.oi}>
                                                          <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                          <Image src={"/images/createcard/communCard9.png"} className={styles3.oi2} width={63} height={63} />
                                                        </div>
                                                      </div>
                                                    ) : (
                                                      elixir == "10" && rarity == "Lendário" ? (
                                                        createImageOfaDiv(),

                                                        <div className={styles3.imagecomming} style={{
                                                          backgroundImage: `url(${imageupdated})`,
                                                          backgroundRepeat: "no-repeat",
                                                          backgroundSize: "220px 215px",
                                                          borderBottomLeftRadius: "180px",
                                                          borderBottomRightRadius: "180px",
                                                          borderTopLeftRadius: "100px",
                                                          borderTopRightRadius: "170px",
                                                          backgroundPositionY: "20px",
                                                          backgroundPositionX: "center",
                                                          backgroundPosition: "center",
                                                        }}>
                                                          <div className={styles3.oi}>
                                                            <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                            <Image src={"/images/createcard/communCard10.png"} className={styles3.oi2} width={63} height={63} />
                                                          </div>
                                                        </div>
                                                      ) : (
                                                        elixir == "1" && rarity == "Campeão" ? (
                                                          createImageOfaDiv(),
                                                          <div className={styles3.imagecomming} style={{
                                                            backgroundImage: `url(${imageupdated})`,
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundSize: "230px 246px",
                                                            borderRadius: "40px",
                                                            backgroundPositionY: "3px",
                                                            backgroundPositionX: "center",
                                                            backgroundPosition: "center",
                                                          }}>
                                                            <div className={styles3.oi}>
                                                              <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                              <Image src={"/images/createcard/communCard1.png"} className={styles3.oi2} width={63} height={63} />
                                                            </div>
                                                          </div>
                                                        ) : (
                                                          elixir == "2" && rarity == "Lendário" ? (
                                                            createImageOfaDiv(),
                                                            <div className={styles3.imagecomming} style={{
                                                              backgroundImage: `url(${imageupdated})`,
                                                              backgroundRepeat: "no-repeat",
                                                              backgroundSize: "220px 215px",
                                                              borderBottomLeftRadius: "180px",
                                                              borderBottomRightRadius: "180px",
                                                              borderTopLeftRadius: "100px",
                                                              borderTopRightRadius: "170px",
                                                              backgroundPositionY: "20px",
                                                              backgroundPositionX: "center",
                                                              backgroundPosition: "center",
                                                            }}>
                                                              <div className={styles3.oi}>
                                                                <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                <Image src={"/images/createcard/communCard2.png"} className={styles3.oi2} width={63} height={63} />
                                                              </div>
                                                            </div>
                                                          ) : (
                                                            elixir == "3" && rarity == "Lendário" ? (
                                                              createImageOfaDiv(),


                                                              <div className={styles3.imagecomming} style={{
                                                                backgroundImage: `url(${imageupdated})`,
                                                                backgroundRepeat: "no-repeat",
                                                                backgroundSize: "220px 215px",
                                                                borderBottomLeftRadius: "180px",
                                                                borderBottomRightRadius: "180px",
                                                                borderTopLeftRadius: "100px",
                                                                borderTopRightRadius: "170px",
                                                                backgroundPositionY: "20px",
                                                                backgroundPositionX: "center",
                                                                backgroundPosition: "center",
                                                              }}>
                                                                <div className={styles3.oi}>
                                                                  <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                  <Image src={"/images/createcard/communCard3.png"} className={styles3.oi2} width={63} height={63} />
                                                                </div>
                                                              </div>
                                                            ) : (
                                                              elixir == "4" && rarity == "Lendário" ? (
                                                                createImageOfaDiv(),


                                                                <div className={styles3.imagecomming} style={{
                                                                  backgroundImage: `url(${imageupdated})`,
                                                                  backgroundRepeat: "no-repeat",
                                                                  backgroundSize: "220px 215px",
                                                                  borderBottomLeftRadius: "180px",
                                                                  borderBottomRightRadius: "180px",
                                                                  borderTopLeftRadius: "100px",
                                                                  borderTopRightRadius: "170px",
                                                                  backgroundPositionY: "20px",
                                                                  backgroundPositionX: "center",
                                                                  backgroundPosition: "center",
                                                                }}>
                                                                  <div className={styles3.oi}>
                                                                    <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                    <Image src={"/images/createcard/communCard4.png"} className={styles3.oi2} width={63} height={63} />
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                elixir == "5" && rarity == "Lendário" ? (
                                                                  createImageOfaDiv(),


                                                                  <div className={styles3.imagecomming} style={{
                                                                    backgroundImage: `url(${imageupdated})`,
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "220px 215px",
                                                                    borderBottomLeftRadius: "180px",
                                                                    borderBottomRightRadius: "180px",
                                                                    borderTopLeftRadius: "100px",
                                                                    borderTopRightRadius: "170px",
                                                                    backgroundPositionY: "20px",
                                                                    backgroundPositionX: "center",
                                                                    backgroundPosition: "center",
                                                                  }}>
                                                                    <div className={styles3.oi}>
                                                                      <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                      <Image src={"/images/createcard/communCard5.png"} className={styles3.oi2} width={63} height={63} />
                                                                    </div>
                                                                  </div>
                                                                ) : (
                                                                  elixir == "6" && rarity == "Lendário" ? (
                                                                    createImageOfaDiv(),


                                                                    <div className={styles3.imagecomming} style={{
                                                                      backgroundImage: `url(${imageupdated})`,
                                                                      backgroundRepeat: "no-repeat",
                                                                      backgroundSize: "220px 215px",
                                                                      borderBottomLeftRadius: "180px",
                                                                      borderBottomRightRadius: "180px",
                                                                      borderTopLeftRadius: "100px",
                                                                      borderTopRightRadius: "170px",
                                                                      backgroundPositionY: "20px",
                                                                      backgroundPositionX: "center",
                                                                      backgroundPosition: "center",
                                                                    }}>
                                                                      <div className={styles3.oi}>
                                                                        <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                        <Image src={"/images/createcard/communCard6.png"} className={styles3.oi2} width={63} height={63} />
                                                                      </div>
                                                                    </div>
                                                                  ) : (
                                                                    elixir == "7" && rarity == "Lendário" ? (
                                                                      createImageOfaDiv(),


                                                                      <div className={styles3.imagecomming} style={{
                                                                        backgroundImage: `url(${imageupdated})`,
                                                                        backgroundRepeat: "no-repeat",
                                                                        backgroundSize: "220px 215px",
                                                                        borderBottomLeftRadius: "180px",
                                                                        borderBottomRightRadius: "180px",
                                                                        borderTopLeftRadius: "100px",
                                                                        borderTopRightRadius: "170px",
                                                                        backgroundPositionY: "20px",
                                                                        backgroundPositionX: "center",
                                                                        backgroundPosition: "center",
                                                                      }}>
                                                                        <div className={styles3.oi}>
                                                                          <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                          <Image src={"/images/createcard/communCard7.png"} className={styles3.oi2} width={63} height={63} />
                                                                        </div>
                                                                      </div>
                                                                    ) : (
                                                                      elixir == "8" && rarity == "Lendário" ? (
                                                                        createImageOfaDiv(),


                                                                        <div className={styles3.imagecomming} style={{
                                                                          backgroundImage: `url(${imageupdated})`,
                                                                          backgroundRepeat: "no-repeat",
                                                                          backgroundSize: "220px 215px",
                                                                          borderBottomLeftRadius: "180px",
                                                                          borderBottomRightRadius: "180px",
                                                                          borderTopLeftRadius: "100px",
                                                                          borderTopRightRadius: "170px",
                                                                          backgroundPositionY: "20px",
                                                                          backgroundPositionX: "center",
                                                                          backgroundPosition: "center",
                                                                        }}>
                                                                          <div className={styles3.oi}>
                                                                            <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                            <Image src={"/images/createcard/communCard8.png"} className={styles3.oi2} width={63} height={63} />
                                                                          </div>
                                                                        </div>
                                                                      ) : (
                                                                        elixir == "9" && rarity == "Lendário" ? (
                                                                          createImageOfaDiv(),


                                                                          <div className={styles3.imagecomming} style={{
                                                                            backgroundImage: `url(${imageupdated})`,
                                                                            backgroundRepeat: "no-repeat",
                                                                            backgroundSize: "220px 215px",
                                                                            borderBottomLeftRadius: "180px",
                                                                            borderBottomRightRadius: "180px",
                                                                            borderTopLeftRadius: "100px",
                                                                            borderTopRightRadius: "170px",
                                                                            backgroundPositionY: "20px",
                                                                            backgroundPositionX: "center",
                                                                            backgroundPosition: "center",
                                                                          }}>
                                                                            <div className={styles3.oi}>
                                                                              <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                              <Image src={"/images/createcard/communCard9.png"} className={styles3.oi2} width={63} height={63} />
                                                                            </div>
                                                                          </div>
                                                                        ) : (
                                                                          elixir == "10" && rarity == "Lendário" ? (
                                                                            createImageOfaDiv(),


                                                                            <div className={styles3.imagecomming} style={{
                                                                              backgroundImage: `url(${imageupdated})`,
                                                                              backgroundRepeat: "no-repeat",
                                                                              backgroundSize: "220px 215px",
                                                                              borderBottomLeftRadius: "180px",
                                                                              borderBottomRightRadius: "180px",
                                                                              borderTopLeftRadius: "100px",
                                                                              borderTopRightRadius: "170px",
                                                                              backgroundPositionY: "20px",
                                                                              backgroundPositionX: "center",
                                                                              backgroundPosition: "center",
                                                                            }}>
                                                                              <div className={styles3.oi}>
                                                                                <Image src={"/images/createcard/legendary.png"} className={styles3.oi0} width={230} height={256} />
                                                                                <Image src={"/images/createcard/communCard10.png"} className={styles3.oi2} width={63} height={63} />
                                                                              </div>
                                                                            </div>
                                                                          ) : (
                                                                            elixir == "1" && rarity == "Campeão" ? (
                                                                              createImageOfaDiv(),

                                                                              <div className={styles3.imagecomming} style={{
                                                                                backgroundImage: `url(${imageupdated})`,
                                                                                backgroundRepeat: "no-repeat",
                                                                                backgroundSize: "220px 210px",
                                                                                borderBottomLeftRadius: "190px",
                                                                                borderBottomRightRadius: "190px",
                                                                                borderTopLeftRadius: "137px",
                                                                                borderTopRightRadius: "160px",
                                                                                backgroundPositionY: "25px",
                                                                                backgroundPositionX: "center",
                                                                                backgroundPosition: "center",
                                                                              }}>
                                                                                <div className={styles3.oi}>
                                                                                  <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                  <Image src={"/images/createcard/communCard1.png"} className={styles3.oi2} width={63} height={63} />
                                                                                </div>
                                                                              </div>
                                                                            ) : (
                                                                              elixir == "2" && rarity == "Campeão" ? (
                                                                                createImageOfaDiv(),
                                                                                <div className={styles3.imagecomming} style={{
                                                                                  backgroundImage: `url(${imageupdated})`,
                                                                                  backgroundRepeat: "no-repeat",
                                                                                  backgroundSize: "220px 210px",
                                                                                  borderBottomLeftRadius: "190px",
                                                                                  borderBottomRightRadius: "190px",
                                                                                  borderTopLeftRadius: "137px",
                                                                                  borderTopRightRadius: "160px",
                                                                                  backgroundPositionY: "25px",
                                                                                  backgroundPositionX: "center",
                                                                                  backgroundPosition: "center",
                                                                                }}>
                                                                                  <div className={styles3.oi}>
                                                                                    <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                    <Image src={"/images/createcard/communCard2.png"} className={styles3.oi2} width={63} height={63} />
                                                                                  </div>
                                                                                </div>
                                                                              ) : (
                                                                                elixir == "3" && rarity == "Campeão" ? (
                                                                                  createImageOfaDiv(),

                                                                                  <div className={styles3.imagecomming} style={{
                                                                                    backgroundImage: `url(${imageupdated})`,
                                                                                    backgroundRepeat: "no-repeat",
                                                                                    backgroundSize: "220px 210px",
                                                                                    borderBottomLeftRadius: "190px",
                                                                                    borderBottomRightRadius: "190px",
                                                                                    borderTopLeftRadius: "137px",
                                                                                    borderTopRightRadius: "160px",
                                                                                    backgroundPositionY: "25px",
                                                                                    backgroundPositionX: "center",
                                                                                    backgroundPosition: "center",
                                                                                  }}>
                                                                                    <div className={styles3.oi}>
                                                                                      <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                      <Image src={"/images/createcard/communCard3.png"} className={styles3.oi2} width={63} height={63} />
                                                                                    </div>
                                                                                  </div>
                                                                                ) : (
                                                                                  elixir == "4" && rarity == "Campeão" ? (
                                                                                    createImageOfaDiv(),

                                                                                    <div className={styles3.imagecomming} style={{
                                                                                      backgroundImage: `url(${imageupdated})`,
                                                                                      backgroundRepeat: "no-repeat",
                                                                                      backgroundSize: "220px 210px",
                                                                                      borderBottomLeftRadius: "190px",
                                                                                      borderBottomRightRadius: "190px",
                                                                                      borderTopLeftRadius: "137px",
                                                                                      borderTopRightRadius: "160px",
                                                                                      backgroundPositionY: "25px",
                                                                                      backgroundPositionX: "center",
                                                                                      backgroundPosition: "center",
                                                                                    }}>
                                                                                      <div className={styles3.oi}>
                                                                                        <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                        <Image src={"/images/createcard/communCard4.png"} className={styles3.oi2} width={63} height={63} />
                                                                                      </div>
                                                                                    </div>
                                                                                  ) : (
                                                                                    elixir == "5" && rarity == "Campeão" ? (
                                                                                      createImageOfaDiv(),

                                                                                      <div className={styles3.imagecomming} style={{
                                                                                        backgroundImage: `url(${imageupdated})`,
                                                                                        backgroundRepeat: "no-repeat",
                                                                                        backgroundSize: "220px 210px",
                                                                                        borderBottomLeftRadius: "190px",
                                                                                        borderBottomRightRadius: "190px",
                                                                                        borderTopLeftRadius: "137px",
                                                                                        borderTopRightRadius: "160px",
                                                                                        backgroundPositionY: "25px",
                                                                                        backgroundPositionX: "center",
                                                                                        backgroundPosition: "center",
                                                                                      }}>
                                                                                        <div className={styles3.oi}>
                                                                                          <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                          <Image src={"/images/createcard/communCard5.png"} className={styles3.oi2} width={63} height={63} />
                                                                                        </div>
                                                                                      </div>
                                                                                    ) : (
                                                                                      elixir == "6" && rarity == "Campeão" ? (
                                                                                        createImageOfaDiv(),

                                                                                        <div className={styles3.imagecomming} style={{
                                                                                          backgroundImage: `url(${imageupdated})`,
                                                                                          backgroundRepeat: "no-repeat",
                                                                                          backgroundSize: "220px 210px",
                                                                                          borderBottomLeftRadius: "190px",
                                                                                          borderBottomRightRadius: "190px",
                                                                                          borderTopLeftRadius: "137px",
                                                                                          borderTopRightRadius: "160px",
                                                                                          backgroundPositionY: "25px",
                                                                                          backgroundPositionX: "center",
                                                                                          backgroundPosition: "center",
                                                                                        }}>
                                                                                          <div className={styles3.oi}>
                                                                                            <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                            <Image src={"/images/createcard/communCard6.png"} className={styles3.oi2} width={63} height={63} />
                                                                                          </div>
                                                                                        </div>
                                                                                      ) : (
                                                                                        elixir == "7" && rarity == "Campeão" ? (
                                                                                          createImageOfaDiv(),

                                                                                          <div className={styles3.imagecomming} style={{
                                                                                            backgroundImage: `url(${imageupdated})`,
                                                                                            backgroundRepeat: "no-repeat",
                                                                                            backgroundSize: "220px 210px",
                                                                                            borderBottomLeftRadius: "190px",
                                                                                            borderBottomRightRadius: "190px",
                                                                                            borderTopLeftRadius: "137px",
                                                                                            borderTopRightRadius: "160px",
                                                                                            backgroundPositionY: "25px",
                                                                                            backgroundPositionX: "center",
                                                                                            backgroundPosition: "center",
                                                                                          }}>
                                                                                            <div className={styles3.oi}>
                                                                                              <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                              <Image src={"/images/createcard/communCard7.png"} className={styles3.oi2} width={63} height={63} />
                                                                                            </div>
                                                                                          </div>
                                                                                        ) : (
                                                                                          elixir == "8" && rarity == "Campeão" ? (
                                                                                            createImageOfaDiv(),

                                                                                            <div className={styles3.imagecomming} style={{
                                                                                              backgroundImage: `url(${imageupdated})`,
                                                                                              backgroundRepeat: "no-repeat",
                                                                                              backgroundSize: "220px 210px",
                                                                                              borderBottomLeftRadius: "190px",
                                                                                              borderBottomRightRadius: "190px",
                                                                                              borderTopLeftRadius: "137px",
                                                                                              borderTopRightRadius: "160px",
                                                                                              backgroundPositionY: "25px",
                                                                                              backgroundPositionX: "center",
                                                                                              backgroundPosition: "center",
                                                                                            }}>
                                                                                              <div className={styles3.oi}>
                                                                                                <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                                <Image src={"/images/createcard/communCard8.png"} className={styles3.oi2} width={63} height={63} />
                                                                                              </div>
                                                                                            </div>
                                                                                          ) : (
                                                                                            elixir == "9" && rarity == "Campeão" ? (
                                                                                              createImageOfaDiv(),

                                                                                              <div className={styles3.imagecomming} style={{
                                                                                                backgroundImage: `url(${imageupdated})`,
                                                                                                backgroundRepeat: "no-repeat",
                                                                                                backgroundSize: "220px 210px",
                                                                                                borderBottomLeftRadius: "190px",
                                                                                                borderBottomRightRadius: "190px",
                                                                                                borderTopLeftRadius: "137px",
                                                                                                borderTopRightRadius: "160px",
                                                                                                backgroundPositionY: "25px",
                                                                                                backgroundPositionX: "center",
                                                                                                backgroundPosition: "center",
                                                                                              }}>
                                                                                                <div className={styles3.oi}>
                                                                                                  <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                                  <Image src={"/images/createcard/communCard9.png"} className={styles3.oi2} width={63} height={63} />
                                                                                                </div>
                                                                                              </div>
                                                                                            ) : (
                                                                                              elixir == "10" && rarity == "Campeão" ? (
                                                                                                createImageOfaDiv(),

                                                                                                <div className={styles3.imagecomming} style={{
                                                                                                  backgroundImage: `url(${imageupdated})`,
                                                                                                  backgroundRepeat: "no-repeat",
                                                                                                  backgroundSize: "220px 210px",
                                                                                                  borderBottomLeftRadius: "190px",
                                                                                                  borderBottomRightRadius: "190px",
                                                                                                  borderTopLeftRadius: "137px",
                                                                                                  borderTopRightRadius: "160px",
                                                                                                  backgroundPositionY: "25px",
                                                                                                  backgroundPositionX: "center",
                                                                                                  backgroundPosition: "center",
                                                                                                }}>
                                                                                                  <div className={styles3.oi}>
                                                                                                    <Image src={"/images/createcard/champion.png"} className={styles3.oi0} width={230} height={256} />
                                                                                                    <Image src={"/images/createcard/communCard10.png"} className={styles3.oi2} width={63} height={63} />
                                                                                                  </div>
                                                                                                </div>
                                                                                              ) : (
                                                                                                null
                                                                                              )
                                                                                            )))))))))))))))))))))))))))))))))))))))) :
                null
            }
          </div>
        </div>
        <div className={styles.containerCardInfo}>
          <CardInfoedit
            name={name}
            image={imageupdated}
            imageupdated={image}
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
            change={change}
          />
        </div>
      </div>
      </main>
      <Footer />
    </main>
  )
}
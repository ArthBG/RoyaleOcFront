"use client";
import axios from 'axios';
import html2canvas from 'html2canvas';
import Image from "next/image"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRef, useState, useEffect } from "react"
import styles from "../createcard/page.module.css"
import CardInfo from "../../components/cardinfo/cardinfo";
import SelectTroop from "@/app/components/selectatributes/tropa/select";
import SelectConstruction from "@/app/components/selectatributes/construction/select";
import SelectSpell from "@/app/components/selectatributes/spelll/select";
import Header from "@/app/components/header/header";
import styles3 from "@/app/components/cardinfo/cardinfo.module.css";
// npm install html2canvas


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function createCard() {
  const divRef = useRef(null);
  const [cards, setCards] = useState([])
  const [name, setName] = useState("")
  const [level, setLevel] = useState("")
  const [rarity, setRarity] = useState("")
  const [type, setType] = useState("")
  const [elixir, setElixir] = useState("")
  const [image, setImage] = useState("")
  const [imageupdated, setImageUpdated] = useState("")
  const [description, setDescription] = useState("")
  const [hp, setHp] = useState('')
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
  const [open, setOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [atributes, setAtributes] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputvalue, setInputValue] = useState('');
  const [divUpdatedImage, setDivUpdatedImage] = useState("");



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleImage = (e) => {
    const file = e.target.files[0]
    setImageUpdated(URL.createObjectURL(file))
  }

  const addAtributes = () => {
    const valueAndName = {
      value: inputvalue,
      name: selectedOption
    }


    setAtributes(valueAndName)
    setItens(valueAndName);
    setInputValue("")
  }

  const createImageOfaDiv = async () => {
    const div = divRef.current;

    if (div) {
      try {
        const canvas = await html2canvas(div, { useCORS: true });

        // Verifica se o canvas foi criado corretamente
        if (canvas) {
          // Converte o canvas para uma imagem Data URL
          const dataURL = canvas.toDataURL('image/JPEG');
          setImage(dataURL); // Define o Data URL no estado
        } else {
          console.error('Canvas vazio ou não foi criado corretamente');
        }
      } catch (error) {
        console.error('Erro ao criar a imagem:', error);
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(atributes);

    try {
      const response = await axios.post("/api/cards", {
        name,
        level,
        rarity,
        type,
        elixir,
        image,
        description,
        hp,
        deploytime,
        shieldhp,
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
        impactspeed,
      })
      console.log(response.data)
      setName("")
      setLevel("")
      setRarity("")
      setType("")
      setElixir("")
      setImage("")
      setImageUpdated("")
      setDescription("")
      setHp("")
      setDeploytime("")
      setShieldhp("")
      setDamage("")
      setDamagepersecond("")
      setRangeddamage("")
      setDamageondistance("")
      setDamageonarea("")
      setDamageonimpact("")
      setDamageontower("")
      setChargedamage("")
      setDamageondeath("")
      setSpawnspeed("")
      setDuration("")
      setRadius("")
      setWidth("")
      setEfecttime("")
      setFreezetime("")
      setUnities("")
      setArena("")
      setTarget("")
      setProjectilerange("")
      setRange("")
      setSpeed("")
      setImpactspeed("")
    } catch (error) {
      console.log(error)
    }
  }






  const options = [
    {
      title: 'Selecione um atributo',
      label: 'Selecione um atributo',
      imageSrc: ''
    },
    {
      title: 'Pontos de Vida',
      label: 'Pontos de Vida',
      imageSrc: '/images/hp.png'
    },
    { title: 'Dano', label: 'Dano', imageSrc: '/images/damage.png' },
    { title: 'Dano por segundo', label: 'Dano por segundo', imageSrc: '/images/damagepersecond.png' },
    { title: 'Dano a distância', label: 'Dano a distância', imageSrc: '/images/damageondistance.png' },
    { title: 'Dano em área', label: 'Dano em área', imageSrc: '/images/damageonarea.png' },
    { title: 'Dano no impacto', label: 'Dano no impacto', imageSrc: '/images/damage.png' },
    { title: 'Dano na torre', label: 'Dano na torre', imageSrc: '/images/damageontower.png' },
    { title: 'Dano carregado', label: 'Dano carregado', imageSrc: '/images/damageondistance.png' },
    { title: 'Dano na morte', label: 'Dano na morte', imageSrc: '/images/damageondeath.png' },
    { title: 'Velocidade de mobilização', label: 'Velocidade de mobilização', imageSrc: '/images/deploytime.png' },
    { title: 'Duração', label: 'Duração', imageSrc: '/images/lifetime.png' },
    { title: 'Tempo de congelamento', label: 'Tempo de congelamento', imageSrc: '/images/freezetime.png' },
    { title: 'Unidades', label: 'Unidades', imageSrc: '/images/unities.png' },
    { title: 'Alvo', label: 'Alvo', imageSrc: '/images/target.png' },
    { title: 'Alcance do projétil', label: 'Alcance do projétil', imageSrc: '/images/radius.png' },
    { title: 'Alcance', label: 'Alcance', imageSrc: '/images/range.png' },
    { title: 'Velocidade', label: 'Velocidade', imageSrc: '/images/speed.png' },
    { title: 'Velocidade de impacto', label: 'Velocidade de impacto', imageSrc: '/images/impactspeed.png' },
    { title: 'Pontos de vida do escudo', label: 'Vida do escudo', imageSrc: '/images/shieldhp.png' },
  ];



  const setItens = (atributes) => {

    if (atributes.name == "Pontos de Vida") {
      setHp(Number(atributes.value))
    }

    if (atributes.name == "Dano") {
      setDamage(Number(atributes.value))
    }

    if (atributes.name == "Dano por segundo") {
      setDamagepersecond(Number(atributes.value))
    }

    if (atributes.name == "Dano a distância") {
      setDamageondistance(Number(atributes.value))
    }

    if (atributes.name == "Dano em área") {
      setDamageonarea(Number(atributes.value))
    }

    if (atributes.name == "Dano no impacto") {
      setDamageonimpact(Number(atributes.value))
    }

    if (atributes.name == "Dano na torre") {
      setDamageontower(Number(atributes.value))
    }

    if (atributes.name == "Dano carregado") {
      setChargedamage(Number(atributes.value))
    }

    if (atributes.name == "Dano na morte") {
      setDamageondeath(Number(atributes.value))
    }

    if (atributes.name == "Velocidade de mobilização") {
      setDeploytime(Number(atributes.value))
    }

    if (atributes.name == "Duração") {
      setDuration(atributes.value)
    }

    if (atributes.name == "Tempo de congelamento") {
      setFreezetime(Number(atributes.value))
    }

    if (atributes.name == "Unidades") {
      setUnities(Number(atributes.value))
    }

    if (atributes.name == "Alvo") {
      setTarget(atributes.value)
    }

    if (atributes.name == "Alcance do projétil") {
      setProjectilerange(Number(atributes.value))
    }

    if (atributes.name == "Alcance") {
      setRange(atributes.value)
    }

    if (atributes.name == "Velocidade") {
      setSpeed(atributes.value)
    }

    if (atributes.name == "Velocidade de impacto") {
      setImpactspeed(atributes.value)
    }

  }

  console.log({ image })
  return (
    <main className={styles.backgroundimage}>
      <Header />

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

        <input type="file" className={styles.file} onChange={handleImage} />
        <textarea className={styles.input} placeholder="Descrição da carta" value={description} onChange={e => setDescription(e.target.value)} />
        <button className={styles.scbtnyellow} onClick={handleSubmit}>Criar</button>
        {
          type == "Tropa" ? (
            <div className={styles.shabuya}>
              <button className={styles.scbtnyellow2} onClick={handleOpen}>Adicionar Atributos</button>
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button onClick={handleClose}> X </button>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Atributos para tropas
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
                      {
                        options.map((option) => {
                          return (
                            <option value={option.title}>
                              <img src={option.imageSrc} alt={option.label} />
                              {option.label}
                            </option>
                          );
                        })
                      }
                    </select>


                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input type="text" value={inputvalue} onChange={(e) => setInputValue(e.target.value)} placeholder="Valor do atributo" />
                  </Typography>
                  <div>
                    <button onClick={addAtributes}>Adicionar atributo</button>
                  </div>
                </Box>
              </Modal>
            </div>
          ) : (
            null
          )
        }
      </div>


      <div className={styles.containerCard}>
        <div className={styles3.containerCards20} ref={divRef} >
        <div className={styles3.containerCards2}>
            {
            elixir == "1" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico"  ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard1.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "2" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard2.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "3" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard3.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "4" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard4.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "5" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard5.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "6" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard6.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "7" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard7.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "8" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
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
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard8.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
            elixir == "9" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
              createImageOfaDiv(),
              <div className={styles3.imagecomming} style={{
                backgroundImage: `url(${imageupdated})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "230px 246px",
                borderRadius: "40px",
                backgroundPosition: "center",
              }}>
                <div className={styles3.oi}>
                  <Image src={"/images/createcard/normal.png"} className={styles3.oi0} width={230} height={256} />
                  <Image src={"/images/createcard/communCard9.png"} className={styles3.oi2} width={63} height={63} />
                </div>
              </div>
            ) : (
              elixir == "10" && rarity == "Comum" || rarity == "Raro" || rarity == "Épico" ? (
                createImageOfaDiv(),
                <div className={styles3.imagecomming} style={{
                  backgroundImage: `url(${imageupdated})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "230px 246px",
                  borderRadius: "40px",
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
                    backgroundSize: "230px 246px",
                    borderRadius: "40px",
                    backgroundPositionY: "3px",
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
                      backgroundSize: "230px 246px",
                      borderRadius: "40px",
                      backgroundPositionY: "3px",
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
                        backgroundSize: "230px 246px",
                        borderRadius: "40px",
                        backgroundPositionY: "3px",
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
                          backgroundSize: "230px 246px",
                          borderRadius: "40px",
                          backgroundPositionY: "3px",
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
                            backgroundSize: "230px 246px",
                            borderRadius: "40px",
                            backgroundPositionY: "3px",
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
                              backgroundSize: "230px 246px",
                              borderRadius: "40px",
                              backgroundPositionY: "3px",
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
                                backgroundSize: "230px 246px",
                                borderRadius: "40px",
                                backgroundPositionY: "3px",
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
                                  backgroundSize: "230px 246px",
                                  borderRadius: "40px",
                                  backgroundPositionY: "3px",
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
                                    backgroundSize: "230px 246px",
                                    borderRadius: "40px",
                                    backgroundPositionY: "3px",
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
                                      backgroundSize: "230px 246px",
                                      borderRadius: "40px",
                                      backgroundPositionY: "3px",
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
                                      elixir == "2" && rarity == "Campeão" ? (
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
                                            <Image src={"/images/createcard/communCard2.png"} className={styles3.oi2} width={63} height={63} />
                                          </div>
                                        </div>
                                      ) : (
                                        elixir == "3" && rarity == "Campeão" ? (
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
                                              <Image src={"/images/createcard/communCard3.png"} className={styles3.oi2} width={63} height={63} />
                                            </div>
                                          </div>
                                        ) : (
                                          elixir == "4" && rarity == "Campeão" ? (
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
                                                <Image src={"/images/createcard/communCard4.png"} className={styles3.oi2} width={63} height={63} />
                                              </div>
                                            </div>
                                          ) : (
                                            elixir == "5" && rarity == "Campeão" ? (
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
                                                  <Image src={"/images/createcard/communCard5.png"} className={styles3.oi2} width={63} height={63} />
                                                </div>
                                              </div>
                                            ) : (
                                              elixir == "6" && rarity == "Campeão" ? (
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
                                                    <Image src={"/images/createcard/communCard6.png"} className={styles3.oi2} width={63} height={63} />
                                                  </div>
                                                </div>
                                              ) : (
                                                elixir == "7" && rarity == "Campeão" ? (
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
                                                      <Image src={"/images/createcard/communCard7.png"} className={styles3.oi2} width={63} height={63} />
                                                    </div>
                                                  </div>
                                                ) : (
                                                  elixir == "8" && rarity == "Campeão" ? (
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
                                                        <Image src={"/images/createcard/communCard8.png"} className={styles3.oi2} width={63} height={63} />
                                                      </div>
                                                    </div>
                                                  ) : (
                                                    elixir == "9" && rarity == "Campeão" ? (
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
                                                          <Image src={"/images/createcard/communCard9.png"} className={styles3.oi2} width={63} height={63} />
                                                        </div>
                                                      </div>
                                                    ) : (
                                                      elixir == "10" && rarity == "Campeão" ? (
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
                                                            <Image src={"/images/createcard/communCard10.png"} className={styles3.oi2} width={63} height={63} />
                                                          </div>
                                                        </div>
                                                      ) : (
                                                        null 
                                                      )
                                                    )))))))))))))))))))))))))))))

            }

        </div>
        </div>
        {/* <CardInfo
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
        /> */}
      </div>

    </main>
  )
}
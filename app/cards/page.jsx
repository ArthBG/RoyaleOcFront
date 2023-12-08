"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/header';
import axios from 'axios';
import style from './page.module.css';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import CardInfo from '../components/cardinfo/cardinfo';
// npm install react-icons --save
// Todas as funções devem ser comentadas

function cardspage() {
    const [cardsData, setCardsData] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRarity, setSelectedRarity] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedElixir, setSelectedElixir] = useState("");
    const [selectedSorting, setSelectedSorting] = useState("");
    const [orderbyname, setOrderByName] = useState('');
    const [orderbyelixir, setOrderByElixir] = useState('');
    const [orderbyrarity, setOrderByRarity] = useState('');
    const router = useRouter();

    console.log(selectedRarity);

    useEffect(() => {
        async function fetchData() {
            try {
                let queryParams = '';
                if (search) {
                    queryParams += `name=${search}&`;
                }
                if (selectedRarity) {
                    queryParams += `rarity=${selectedRarity}&`;
                }
                if (selectedType) {
                    queryParams += `type=${selectedType}&`;
                }
                if (selectedElixir) {
                    queryParams += `elixir=${selectedElixir}&`;
                }
               
                if (queryParams.length > 0) {
                    queryParams = queryParams.slice(0, -1);
                }
                const response = await axios.get(`/api/cards?${queryParams}`);
                setCardsData(response.data.cards);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [selectedRarity, selectedType, selectedElixir, search]);


    console.log(cardsData);

    // const handleSorting = (e) => {
    //     const selectedSorting = e.target.value;
      
    //     if (selectedSorting == "name") {
    //       setOrderByName(orderbyname == 'asc');
    //       setOrderByElixir('');
    //       setOrderByRarity('');
    //     } else if (selectedSorting == "elixir") {
    //       setOrderByElixir(orderbyelixir == 'asc');
    //       setOrderByName('');
    //       setOrderByRarity('');
    //     } else if (selectedSorting == "rarity") {
    //       setOrderByRarity(orderbyrarity == 'asc');
    //       setOrderByName('');
    //       setOrderByElixir('');
    //     }
    //     setSelectedSorting(selectedSorting);
    //   };
      


    function clearFilters() {
        setSelectedRarity("");
        setSelectedType("");
        setSelectedElixir("");
        setSearch(""); 
    }
    const editCard = (id) => {
        router.push(`/cards/${id}`);
    }


    const deleteCard = async (id) => {
        const url = `/api/cards/${id}`;
        try {
            await axios.delete(url);
            setCardsData(cardsData.filter((card) => card.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className={style.mainBg}>
            <Header />
            <h1 className={style.title}>RoyaleOcto</h1>
                <div className={style.containerSearch}>
                    <input type="text" placeholder="Pesquisar Cartas" className={style.search} value={search} onChange={(e) => setSearch(e.target.value)} />
                    <FiSearch className={style.icon} />
                </div>
            <div className={style.containerFilters}>
                {/* <select className={style.select} value={selectedSorting} onChange={handleSorting}>
                    <option value="">Ordenar por:</option>
                    <option value="name">Nome</option>
                    <option value="elixir">Elixir</option>
                    <option value="rarity">Raridade</option>
                </select> */}
                <select className={style.select} value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="">Tipo:</option>
                    <option value='Tropa'>Tropa</option>
                    <option value='Construção'>Construção</option>
                    <option value='Feitiço'>Feitiço</option>
                </select>
                <select className={style.select} value={selectedRarity} onChange={(e) => setSelectedRarity(e.target.value)}>
                    <option value="">Raridade:</option>
                    <option value="Comum">Comum</option>
                    <option value="Raro">Raro</option>
                    <option value="Épico">Épico</option>
                    <option value="Lendário">Lendário</option>
                    <option value="Campeão">Campeão</option>
                </select>
                <select className={style.select} value={selectedElixir} onChange={(e) => setSelectedElixir(e.target.value)}>
                    <option value="">Elixir:</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
                <button className={style.scbtnred} onClick={() => clearFilters("teste")}>Redefinir Filtros</button>
            </div>

            <div className={style.containerCard}>
                { //map percorre o array e retorna um novo array com ordem de elixir crescente
                    cardsData.sort((a, b) => a.elixir - b.elixir).map((card) => ( 
                    <div key={card.id} >
                        <div className={style.card}>
                            <div className={style.containerButtons}>
                                <div className={style.containerS}>
                                    <button className={style.buttonEdit}>
                                        <img src={"/images/info.png"} width={31} height={29} onClick={() => editCard(card.id)} />
                                    </button>
                                    <button className={style.buttonDelete}>
                                        <img src={"/images/excluir.png"} width={34} height={30} onClick={() => deleteCard(card.id)} />
                                    </button>
                                </div>
                            </div>
                            <Link className={style.linkremove} href={`/cardsdetail/${card.id}`}>
                                <div className={style.containerImage}>
                                    <img src={card.image} width={110} height={125} />
                                </div>
                            </Link>
                            <p className={style.cardName}>{card.name}</p>

                        </div>
                    </div>
                ))
                }
            </div>

        </main>

    )
}

export default cardspage
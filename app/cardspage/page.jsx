"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './page.module.css';

const itemsPerPage = 10;
function page() {
    const [cardsData, setCardsData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try{
            const response = await axios.get("/api/cards");
            setCardsData(response.data.cards);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }
    , []);
    console.log("Primeiro vazio e depois o Hello");
    console.log(cardsData);
    
    return (
        <main>
            <h1>Card List</h1>
            <div className={style.containerCard}>
            {
                cardsData.map((card) => (
                        <div key={card.id} >
                            <div className={style.card}>              
                             <h2 className={style.cardName}>{card.name}</h2>
                            <img src={card.image} width={200} height={195}/>
                            {card.type ? <p className={style.cardName}>{card.type}</p> : null}
                        </div>
                        </div>
                    ))
            }
            </div>

        </main>

    )
}

export default page
"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
            {
                cardsData.map((card) => (
                        <div key={card.id}>
                            <h2>{card.name}</h2>
                            <img src={card.image} />
                            {card.type ? <p>{card.type}</p> : null}
                        </div>
                    ))
            }

        </main>

    )
}

export default page
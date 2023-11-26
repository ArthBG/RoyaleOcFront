"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const itemsPerPage = 10;
function page() {
    const [cardsData, setCardsData] = useState([]);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await axios.get('/api/cards');
                const data = response.data;
                setData(data);
                setTotalPages(Math.ceil(data.length / itemsPerPage));
                const cards = data.slice(0, itemsPerPage);
                setCardsData(cards);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCards();
    }
        , []);

    console.log(cardsData);
    
    return (
        <main>
            <h1>Card List</h1>
            {
                cardsData.map((card) => (
                    card.map((card, index) => (
                        <div key={index}>
                            <h2>{card.name}</h2>
                            <img src={card.image} />
                            <p>{card.description}</p>
                            {card.type ? <p>{card.type}</p> : null}

                        </div>
                    ))
                ))
            }

        </main>

    )
}

export default page
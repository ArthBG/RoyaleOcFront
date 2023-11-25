"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const itemsPerPage = 10;
function page() {
    const [cardsData, setCardsData] = useState(null);
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


    return (
        <main>
            <h1>Card List</h1>
            {
                cardsData && cardsData.map((card, index) => (
                    <div key={index}>
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                    </div>
                ))
            }

        </main>

    )
}

export default page
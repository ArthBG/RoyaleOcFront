"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function page() {
    const [cardsData, setCardsData] = useState([]);


  return (
    <main>
        <h1>Card List</h1>
            {cardsData && cardsData.map((card) => (
                <div key={card.name}>
                    <h2>{card.image}</h2>
                    <p>{card.description}</p>
                </div>
            ))}
        
    </main>

  )
}

export default page
"use client"
//importacoes
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

// detalhes da carta
const cardDescription = ({ params }) => {
    const [card, setCard] = useState([]);
    const { id } = params;

    useEffect(() => {
        const cardsFetch = async () => {
            try {
                const response = await axios.get(`/api/cards/${id}`);
                setCard(response.data);
            } catch (error) {
                throw error;
            }
        };

        cardsFetch();
    }, [id]);

    return (
        <div className={styles.containerPai}>

            <div className={styles.back2}>
               <p> {card.name ? card.name : "Não disponível"}</p>
                <img src={card.image} alt={`Imagem da Carta ${card.name}`} />

                <p>Tipo de Carta: {card.type ? card.type : "Não disponível"}</p>
                <p>Raridade: {card.rarity ? card.rarity : "Não disponível"}</p>
                <p>Elixir: {card.elixir ? card.elixir : "Não disponível"}</p>
                <p>Pontos de Vida: {card.hp ? card.hp : "Não disponível"}</p>
                <p>Tempo de Geração: {card.deploytime ? card.deploytime : "Não disponível"}</p>
                <p>Pontos de Escudo: {card.shieldhp ? card.shieldhp : "Não disponível"}</p>
                <p>Descrição: {card.description ? card.description : "Não disponível"}</p>
                <p>Dano: {card.damage ? card.damage : "Não disponível"}</p>
                <p>Dano por Segundo: {card.damagepersecond ? card.damagepersecond : "Não disponível"}</p>
                <p>Dano à Distância: {card.damageondistance ? card.damageondistance : "Não disponível"}</p>
                <p>Dano em Área: {card.damageonarea ? card.damageonarea : "Não disponível"}</p>
                <p>Dano no Impacto: {card.damageonimpact ? card.damageonimpact : "Não disponível"}</p>
                <p>Dano na Torre: {card.damageontower ? card.damageontower : "Não disponível"}</p>
                <p>Dano da Carga: {card.chargedamage ? card.chargedamage : "Não disponível"}</p>
                <p>Dano de Morte: {card.damageondeath ? card.damageondeath : "Não disponível"}</p>
                <p>Velocidade de Invocação: {card.spawnspeed ? card.spawnspeed : "Não disponível"}</p>
                <p>Duração: {card.duration ? card.duration : "Não disponível"}</p>
                <p>Raio: {card.radius ? card.radius : "Não disponível"}</p>
                <p>Largura: {card.width ? card.width : "Não disponível"}</p>
                <p>Tempo de Efeito: {card.efecttime ? card.efecttime : "Não disponível"}</p>
                <p>Tempo de Congelamento: {card.freezetime ? card.freezetime : "Não disponível"}</p>
                <p>Quantidade de Unidades: {card.unities ? card.unities : "Não disponível"}</p>
                <p>Arena: {card.arena ? card.arena : "Não disponível"}</p>
                <p>Alvos: {card.target ? card.target : "Não disponível"}</p>
                <p>Alcance do Projétil: {card.projectilerange ? card.projectilerange : "Não disponível"}</p>
                <p>Alcance: {card.range ? card.range : "Não disponível"}</p>
                <p>Velocidade: {card.speed ? card.speed : "Não disponível"}</p>
                <p>Velocidade do Impacto: {card.impactspeed ? card.impactspeed : "Não disponível"}</p>



            </div>

        </div>
    );
};

export default cardDescription;
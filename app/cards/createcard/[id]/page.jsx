"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../page.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
// npm install react-icons --save

export default function updateCard({ params }) {
    const [cardsData, setCardsData] = useState([]);
    const router = useRouter();
    const { id } = params;
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [rarity, setRarity] = useState("");
    const [type, setType] = useState("");
    const [elixir, setElixir] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/api/cards/${id}`);
                setCardsData(response.data.card);
                setName(response.data.card.name);
                setLevel(response.data.card.level);
                setRarity(response.data.card.rarity);
                setType(response.data.card.type);
                setElixir(response.data.card.elixir);
                setImage(response.data.card.image);
                setDescription(response.data.card.description);
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
            const response = await axios.put(`/api/cards/${id}`, {
                name,
                level,
                rarity,
                type,
                elixir,
                image,
                description
            });
            router.push(`/cards/${id}`);
            setName("");
            setLevel("");
            setRarity("");
            setType("");
            setElixir("");
            setImage("");
            setDescription("");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    }

    return (
        <main>
            <div className={style.containerButtons}>
                <Link href="/cardspage/page">
                    <button className={style.scbtnyellow}>Voltar</button>
                </Link>
            </div>
        {id ?
            <form onSubmit={handleSubmit}>
                <div className={style.container}>
                    <div className={style.containerCard}>
                        <div className={style.card}>
                            <div className={style.containerButtons}>
                                <h2 className={style.cardName}>{cardsData.name}</h2>
                                <div className={style.containerS}>
                                    <img src={"/images/info.png"} width={37} height={35} className={style.buttonEdit} />
                                    <img src={"/images/excluir.png"} width={40} height={36} className={style.buttonDelete} />
                                </div>
                            </div>
                            <img src={cardsData.image} width={200} height={195} />
                            <p className={style.cardName}>{cardsData.type}</p>
                        </div>
                    </div>
                    <div className={style.containerInputs}>
                        <div className={style.containerInput}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={style.containerInput}>
                            <label htmlFor="level">Level</label>
                            <input type="text" name="level" value={level} onChange={(e) => setLevel(e.target.value)} />
                        </div>
                        <div className={style.containerInput}>
                            <label htmlFor="rarity">Rarity</label>
                            <input type="text" name="rarity" value={rarity} onChange={(e) => setRarity(e.target.value)} />
                        </div>
                        <div className={style.containerInput}>
                            <label htmlFor="type">Type</label>
                            <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div className={style.containerInput}>
                            <label htmlFor="elixir">Elixir</label>
                            <input type="text" name="elixir" value={elixir} onChange={(e) => setElixir(e.target.value)} />
                        </div>
                        <div className={style.containerInput}>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" onChange={handleImage} />
                        </div>
                        <div className={style.containerInput}>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>
                </div>
                <button className={style.scbtnyellow} type="submit">Atualizar</button>
            </form>
            : <p>Carregando...</p>
        }
        </main>
    )
}
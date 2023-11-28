import Image from "next/image"
import styles from "./cardinfo.module.css"
export default function CardInfo({ name, level, rarity, type, elixir, image, description }) {
    console.log(name, level, rarity, type, elixir, image, description);
    return (
        <div className={styles.CardInfo} >
            <h1 className={styles.cardName}>{name} Nível {level}</h1>
            <div className={styles.containerCards}>
                <div className={styles.containerImage}>
                  {
                    rarity == "Comum" && elixir == "1" ?
                    <div>
                    <Image className={styles.imagecomming}src={image} width={250} height={310} />
                    <Image src={"/images/createcard/communCard1.png"} width={240} height={300} />
                    </div>
                    :
                    (rarity == "Comum" && elixir == "2" ?
                    <div>
                    <Image className={styles.imagecomming}src={image} width={250} height={310} />
                    <Image src={"/images/createcard/communCard2.png"} width={240} height={300} />
                    </div>
                    :
                     (rarity == "Comum" && elixir == "3" ?
                     <div>
                     <Image className={styles.imagecomming}src={image} width={250} height={310} />
                     <Image src={"/images/createcard/communCard3.png"} width={240} height={300} />
                     </div>
                     :
                     (rarity == "Comum" && elixir == "4" ?
                     <div>
                     <Image className={styles.imagecomming}src={image} width={250} height={310} />
                     <Image src={"/images/createcard/communCard4.png"} width={240} height={300} />
                    </div>
                     :
                     (rarity == "Comum" && elixir == "5" ?
                     <div>
                    <Image className={styles.imagecomming}src={image} width={250} height={310} />
                     <Image src={"/images/createcard/communCard5.png"} width={240} height={300} />
                     </div>
                     :
                        (rarity == "Comum" && elixir == "6" ?
                        <div>
                             <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard6.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "Comum" && elixir == "7" ?
                        <div>
                        <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard7.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "Comum" && elixir == "8" ?
                        <div>
                        <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard8.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "Comum" && elixir == "9" ?
                        <div>
                        <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard9.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "Comum" && elixir == "10" ?
                        <Image src={"/images/createcard/communCard10.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "1" ?
                        <Image src={"/images/createcard/communCard1.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "2" ?
                        <Image src={"/images/createcard/communCard2.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "3" ?
                        <Image src={"/images/createcard/communCard3.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "4" ?
                        <Image src={"/images/createcard/communCard4.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "5" ?
                        <Image src={"/images/createcard/communCard5.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "6" ?
                        <Image src={"/images/createcard/communCard6.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "7" ?
                        <Image src={"/images/createcard/communCard7.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "8" ?
                        <Image src={"/images/createcard/communCard8.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "9" ?
                        <Image src={"/images/createcard/communCard9.png"} width={240} height={300} />
                        :
                        (rarity == "Raro" && elixir == "10" ?
                        <Image src={"/images/createcard/communCard10.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "1" ?
                        <Image src={"/images/createcard/communCard1.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "2" ?
                        <Image src={"/images/createcard/communCard2.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "3" ?
                        <Image src={"/images/createcard/communCard3.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "4" ?
                        <Image src={"/images/createcard/communCard4.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "5" ?
                        <Image src={"/images/createCard5.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "6" ?
                        <Image src={"/images/createcard/communCard6.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "7" ?
                        <Image src={"/images/createcard/communCard7.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "8" ?
                        <Image src={"/images/createcard/communCard8.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "9" ?
                        <Image src={"/images/createcard/communCard9.png"} width={240} height={300} />
                        :
                        (rarity =="Épico" && elixir == "10" ?
                        <Image src={"/images/createcard/communCard10.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "1" ?
                        <Image src={"/images/createcard/legendaryCard1.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "2" ?
                        <Image src={"/images/createcard/legendaryCard2.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "3" ?
                        <Image src={"/images/createcard/legendaryCard3.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "4" ?
                        <Image src={"/images/createcard/legendaryCard4.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "5" ?
                        <Image src={"/images/createcard/legendaryCard5.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "6" ?
                        <Image src={"/images/createcard/legendaryCard6.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "7" ?
                        <Image src={"/images/createcard/legendaryCard7.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "8" ?
                        <Image src={"/images/createcard/legendaryCard8.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "9" ?
                        <Image src={"/images/createcard/legendaryCard9.png"} width={240} height={300} />
                        :
                        (rarity =="Lendário" && elixir == "10" ?
                        <Image src={"/images/createcard/legendaryCard10.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "1" ?
                        <Image src={"/images/createcard/championCard1.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "2" ?
                        <Image src={"/images/createcard/championCard2.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "3" ?
                        <Image src={"/images/createcard/championCard3.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "4" ?
                        <Image src={"/images/createcard/championCard4.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "5" ?
                        <Image src={"/images/createcard/championCard5.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "6" ?
                        <Image src={"/images/createcard/championCard6.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "7" ?
                        <Image src={"/images/createcard/championCard7.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "8" ?
                        <Image src={"/images/createcard/championCard8.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "9" ?
                        <Image src={"/images/createcard/championCard9.png"} width={240} height={300} />
                        :
                        (rarity =="Campeão" && elixir == "10" ?
                        <Image src={"/images/createcard/championCard10.png"} width={240} height={300} />
                        :
                        !elixir ?
                         <image src={image} width={250} height={310} />
                        :
                        null
                        )))))))))))))))))))))))))))))))))))))))))))))))))
                        }                      
                           
                </div>
                {
                    rarity == "Comum" && type == "Tropa" ?
                        <div className={styles.communtropa}>
                            <Image src={"/images/Comumtropa.png"} width={400} height={100} />
                            {description}
                        </div>
                        :
                        (rarity == "Comum" && type == "Feitiço" ?
                            <div className={styles.communfeitico}>
                                <Image src={"/images/Comumfeiti.png"} width={400} height={100} />
                                <div className={styles.desc}>
                                    {description}
                                </div>
                            </div>
                            :
                            (rarity == "Comum" && type == "Construção" ?
                                <div className={styles.communconstrucao}>
                                    <Image src={"/images/Comumconst.png"} width={400} height={100} />
                                    <div className={styles.desc}>
                                        {description}
                                    </div>
                                </div>
                                :
                                (rarity == "Raro" && type == "Tropa" ?
                                    <div className={styles.rarotropa}>
                                        <Image src={"/images/raratropa.png"} width={400} height={100} />
                                        <div className={styles.desc}>
                                            {description}
                                        </div>
                                    </div>
                                    :
                                    (rarity == "Raro" && type == "Feitiço" ?
                                        <div className={styles.rarofeitico}>
                                            <Image src={"/images/rarafeiti.png"} width={400} height={100} />
                                            <div className={styles.desc}>
                                                {description}
                                            </div>
                                        </div>
                                        :
                                        (rarity == "Raro" && type == "Construção" ?
                                            <div className={styles.raroconstrucao}>
                                                <Image src={"/images/raraconst.png"} width={400} height={100} />
                                                <div className={styles.desc}>
                                                    {description}
                                                </div>
                                            </div>
                                            :
                                            (rarity == "Épico" && type == "Tropa" ?
                                                <div className={styles.epicotropa}>
                                                    <Image src={"/images/epicatropa.png"} width={400} height={100} />
                                                    <div className={styles.desc}>
                                                        {description}
                                                    </div>
                                                </div>
                                                :
                                                (rarity == "Épico" && type == "Feitiço" ?
                                                    <div className={styles.epicofeitico}>
                                                        <Image src={"/images/epicafeiti.png"} width={400} height={100} />
                                                        <div className={styles.desc}>
                                                            {description}
                                                        </div>
                                                    </div>
                                                    :
                                                    (rarity == "Épico" && type == "Construção" ?
                                                        <div className={styles.epicoconstrucao}>
                                                            <Image src={"/images/epicaconst.png"} width={400} height={100} />
                                                            <div className={styles.desc}>
                                                                {description}
                                                            </div>
                                                        </div>
                                                        :
                                                        (rarity == "Lendário" && type == "Tropa" ?
                                                            <div className={styles.lendariotropa}>
                                                                <Image src={"/images/lendariatropa.png"} width={450} height={100} />
                                                                <div className={styles.desc}>
                                                                    {description}
                                                                </div>
                                                            </div>
                                                            :
                                                            (rarity == "Lendário" && type == "Feitiço" ?
                                                                <div className={styles.lendariofeitico}>
                                                                    <Image src={"/images/lendariafeiti.png"} width={450} height={100} />
                                                                    <div className={styles.desc}>
                                                                        {description}
                                                                    </div>
                                                                </div>
                                                                :
                                                                (rarity == "Lendário" && type == "Construção" ?
                                                                    <div className={styles.lendarioconstrucao}>
                                                                        <Image src={"/images/lendariaconst.png"} width={450} height={95} />
                                                                        <div className={styles.desc}>
                                                                            {description}
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    (rarity == "Campeão" && type == "Tropa" ?
                                                                        <div className={styles.campeaotropa}>
                                                                            <Image src={"/images/campeaotropa.png"} width={450} height={100} />
                                                                            <div className={styles.desc}>
                                                                                {description}
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        (rarity == "Campeão" && type == "Feitiço" ?
                                                                            <div className={styles.campeaofeitico}>
                                                                                <Image src={"/images/campeaofeiti.png"} width={450} height={100} />
                                                                                <div className={styles.desc}>
                                                                                    {description}
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            (rarity == "Campeão" && type == "Construção" ?
                                                                                <div className={styles.campeaoconstrucao}>
                                                                                    <Image src={"/images/campeaoconst.png"} width={450} height={100} />
                                                                                    <div className={styles.desc}>
                                                                                        {description}
                                                                                    </div>
                                                                                </div>
                                                                                :
                                                                    null
                                                                ))))))))))))))
                }
            </div>

        </div>
    )
}
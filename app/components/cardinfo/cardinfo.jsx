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
                    rarity == "comum" && elixir == "1" ?
                    <div>
                    <Image className={styles.imagecomming}src={image} width={250} height={310} />
                    <Image src={"/images/createcard/communCard1.png"} width={240} height={300} />
                    </div>
                    :
                    (rarity == "comum" && elixir == "2" ?
                    <div>
                    <Image className={styles.imagecomming}src={image} width={250} height={310} />
                    <Image src={"/images/createcard/communCard2.png"} width={240} height={300} />
                    </div>
                    :
                     (rarity == "comum" && elixir == "3" ?
                     <div>
                     <Image className={styles.imagecomming}src={image} width={250} height={310} />
                     <Image src={"/images/createcard/communCard3.png"} width={240} height={300} />
                     </div>
                     :
                     (rarity == "comum" && elixir == "4" ?
                     <div>
                     <Image className={styles.imagecomming}src={image} width={250} height={310} />
                     <Image src={"/images/createcard/communCard4.png"} width={240} height={300} />
                    </div>
                     :
                     (rarity == "comum" && elixir == "5" ?
                     <div>
                    <Image className={styles.imagecomming}src={image} width={250} height={310} />
                     <Image src={"/images/createcard/communCard5.png"} width={240} height={300} />
                     </div>
                     :
                        (rarity == "comum" && elixir == "6" ?
                        <div>
                             <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard6.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "comum" && elixir == "7" ?
                        <div>
                        <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard7.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "comum" && elixir == "8" ?
                        <div>
                             <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard8.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "comum" && elixir == "9" ?
                        <div>
                        <Image className={styles.imagecomming}src={image} width={250} height={310} />
                        <Image src={"/images/createcard/communCard9.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "comum" && elixir == "10" ?
                        <Image src={"/images/createcard/communCard10.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "1" ?
                        <Image src={"/images/createcard/communCard1.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "2" ?
                        <Image src={"/images/createcard/communCard2.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "3" ?
                        <Image src={"/images/createcard/communCard3.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "4" ?
                        <Image src={"/images/createcard/communCard4.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "5" ?
                        <Image src={"/images/createcard/communCard5.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "6" ?
                        <Image src={"/images/createcard/communCard6.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "7" ?
                        <Image src={"/images/createcard/communCard7.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "8" ?
                        <Image src={"/images/createcard/communCard8.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "9" ?
                        <Image src={"/images/createcard/communCard9.png"} width={240} height={300} />
                        :
                        (rarity == "raro" && elixir == "10" ?
                        <Image src={"/images/createcard/communCard10.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "1" ?
                        <Image src={"/images/createcard/communCard1.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "2" ?
                        <Image src={"/images/createcard/communCard2.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "3" ?
                        <Image src={"/images/createcard/communCard3.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "4" ?
                        <Image src={"/images/createcard/communCard4.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "5" ?
                        <Image src={"/images/createCard5.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "6" ?
                        <Image src={"/images/createcard/communCard6.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "7" ?
                        <Image src={"/images/createcard/communCard7.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "8" ?
                        <Image src={"/images/createcard/communCard8.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "9" ?
                        <Image src={"/images/createcard/communCard9.png"} width={240} height={300} />
                        :
                        (rarity =="epico" && elixir == "10" ?
                        <Image src={"/images/createcard/communCard10.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "1" ?
                        <Image src={"/images/createcard/legendaryCard1.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "2" ?
                        <Image src={"/images/createcard/legendaryCard2.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "3" ?
                        <Image src={"/images/createcard/legendaryCard3.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "4" ?
                        <Image src={"/images/createcard/legendaryCard4.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "5" ?
                        <Image src={"/images/createcard/legendaryCard5.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "6" ?
                        <Image src={"/images/createcard/legendaryCard6.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "7" ?
                        <Image src={"/images/createcard/legendaryCard7.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "8" ?
                        <Image src={"/images/createcard/legendaryCard8.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "9" ?
                        <Image src={"/images/createcard/legendaryCard9.png"} width={240} height={300} />
                        :
                        (rarity =="lendario" && elixir == "10" ?
                        <Image src={"/images/createcard/legendaryCard10.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "1" ?
                        <Image src={"/images/createcard/championCard1.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "2" ?
                        <Image src={"/images/createcard/championCard2.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "3" ?
                        <Image src={"/images/createcard/championCard3.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "4" ?
                        <Image src={"/images/createcard/championCard4.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "5" ?
                        <Image src={"/images/createcard/championCard5.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "6" ?
                        <Image src={"/images/createcard/championCard6.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "7" ?
                        <Image src={"/images/createcard/championCard7.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "8" ?
                        <Image src={"/images/createcard/championCard8.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "9" ?
                        <Image src={"/images/createcard/championCard9.png"} width={240} height={300} />
                        :
                        (rarity =="campeao" && elixir == "10" ?
                        <Image src={"/images/createcard/championCard10.png"} width={240} height={300} />
                        :
                        null
                        )))))))))))))))))))))))))))))))))))))))))))))))))
                        }                      
                           
                </div>
                {
                    rarity == "comum" && type == "tropa" ?
                        <div className={styles.communtropa}>
                            <Image src={"/images/comumtropa.png"} width={500} height={100} />
                            {description}
                        </div>
                        :
                        (rarity == "comum" && type == "feitico" ?
                            <div className={styles.communfeitico}>
                                <Image src={"/images/comumfeiti.png"} width={500} height={100} />
                                <div className={styles.desc}>
                                    {description}
                                </div>
                            </div>
                            :
                            (rarity == "comum" && type == "construcao" ?
                                <div className={styles.communconstrucao}>
                                    <Image src={"/images/comumconst.png"} width={500} height={100} />
                                    <div className={styles.desc}>
                                        {description}
                                    </div>
                                </div>
                                :
                                (rarity == "raro" && type == "tropa" ?
                                    <div className={styles.rarotropa}>
                                        <Image src={"/images/raratropa.png"} width={500} height={100} />
                                        <div className={styles.desc}>
                                            {description}
                                        </div>
                                    </div>
                                    :
                                    (rarity == "raro" && type == "feitico" ?
                                        <div className={styles.rarofeitico}>
                                            <Image src={"/images/rarafeiti.png"} width={500} height={100} />
                                            <div className={styles.desc}>
                                                {description}
                                            </div>
                                        </div>
                                        :
                                        (rarity == "raro" && type == "construcao" ?
                                            <div className={styles.raroconstrucao}>
                                                <Image src={"/images/raraconst.png"} width={500} height={100} />
                                                <div className={styles.desc}>
                                                    {description}
                                                </div>
                                            </div>
                                            :
                                            (rarity == "epico" && type == "tropa" ?
                                                <div className={styles.epicotropa}>
                                                    <Image src={"/images/epicatropa.png"} width={500} height={100} />
                                                    <div className={styles.desc}>
                                                        {description}
                                                    </div>
                                                </div>
                                                :
                                                (rarity == "epico" && type == "feitico" ?
                                                    <div className={styles.epicofeitico}>
                                                        <Image src={"/images/epicafeiti.png"} width={500} height={100} />
                                                        <div className={styles.desc}>
                                                            {description}
                                                        </div>
                                                    </div>
                                                    :
                                                    (rarity == "epico" && type == "construcao" ?
                                                        <div className={styles.epicoconstrucao}>
                                                            <Image src={"/images/epicaconst.png"} width={500} height={100} />
                                                            <div className={styles.desc}>
                                                                {description}
                                                            </div>
                                                        </div>
                                                        :
                                                        (rarity == "lendario" && type == "tropa" ?
                                                            <div className={styles.lendariotropa}>
                                                                <Image src={"/images/lendariatropa.png"} width={500} height={100} />
                                                                <div className={styles.desc}>
                                                                    {description}
                                                                </div>
                                                            </div>
                                                            :
                                                            (rarity == "lendario" && type == "feitico" ?
                                                                <div className={styles.lendariofeitico}>
                                                                    <Image src={"/images/lendariafeiti.png"} width={500} height={100} />
                                                                    <div className={styles.desc}>
                                                                        {description}
                                                                    </div>
                                                                </div>
                                                                :
                                                                (rarity == "lendario" && type == "construcao" ?
                                                                    <div className={styles.lendarioconstrucao}>
                                                                        <Image src={"/images/lendariaconst.png"} width={500} height={100} />
                                                                        <div className={styles.desc}>
                                                                            {description}
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    null
                                                                )))))))))))
                }
            </div>

        </div>
    )
}
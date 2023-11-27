import Image from "next/image"
import styles from "./cardinfo.module.css"
export default function CardInfo({ name, level, rarity, type, elixir, image, description }) {
    return (
        <div className={styles.CardInfo} >
            <div>
                {
                    rarity == "comum" && type == "tropa" ?
                    <div className={styles.communtropa}>
                    <Image src={"/images/comumtropa.png"} width={100} height={100} />
                    </div>
                    :
                    (rarity == "comum" && type == "feitico" ?
                    <div className={styles.communfeitico}>
                        <Image src={"/images/comumfeiti.png"} width={100} height={100} />
                    </div>    
                        :
                    (rarity == "comum" && type == "construcao" ?
                    <div className={styles.communconstrucao}>
                        <Image src={"/images/comumconst.png"} width={100} height={100} />
                    </div>    
                        :
                    (rarity == "raro" && type == "tropa" ?
                    <div className={styles.rarotropa}>
                        <Image src={"/images/rarotropa.png"} width={100} height={100} />
                    </div>
                        :   
                    (rarity == "raro" && type == "feitico" ?
                    <div className={styles.rarofeitico}>
                        <Image src={"/images/rarofeiti.png"} width={100} height={100} />
                    </div>    
                        :
                    (rarity == "raro" && type == "construcao" ?
                    <div className={styles.raroconstrucao}>
                        <Image src={"/images/raroconst.png"} width={100} height={100} />
                        </div>
                        :
                    (rarity == "epico" && type == "tropa" ?
                    <div className={styles.epicotropa}>
                        <Image src={"/images/epicatropa.png"} width={100} height={100} />
                    </div>
                        :
                     (rarity == "epico" && type == "feitico" ?
                     <div className={styles.epicofeitico}>
                        <Image src={"/images/epicafeiti.png"} width={100} height={100} />
                        </div>
                        :
                    (rarity == "epico" && type == "construcao" ?
                    <div className={styles.epicoconstrucao}>
                        <Image src={"/images/epicconst.png"} width={100} height={100} />
                        </div>
                        :
                    (rarity == "lendario" && type == "tropa" ?
                    <div className={styles.lendariotropa}>
                        <Image src={"/images/lendariatropa.png"} width={100} height={100} />
                        </div>
                        :
                    (rarity == "lendario" && type == "feitico" ?
                    <div className={styles.lendariofeitico}>
                        <Image src={"/images/lendariafeiti.png"} width={100} height={100} />
                        </div>
                        :
                    (rarity == "lendario" && type == "construcao" ?
                    <div className={styles.lendarioconstrucao}>
                        <Image src={"/images/lendariaconst.png"} width={100} height={100} />
                        </div>
                        :   
                        null
                        )))))))))))
                    }
            </div>
        </div>
    )
}
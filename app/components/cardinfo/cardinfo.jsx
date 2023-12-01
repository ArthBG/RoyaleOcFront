import Image from "next/image"
import styles from "./cardinfo.module.css";
import Link from "next/link";
export default function CardInfo({ name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed, id, level }) {
    return (
        <div className={styles.CardInfo} >
            
            <h1 className={styles.cardName}>{name} Nível {level}</h1>
            <div className={styles.containerCards}>
                <div className={styles.containerImage}>
                  
                { image && typeof image == 'object' ? (
                   <Image
                     className={styles.imagecomming}
                     src={URL.createObjectURL(image)}
                     width={250}
                     height={310}
                   />
                 ) : 
                    rarity == "Comum" && elixir == "1" ?
                    <div>
                    <Image src={"/images/createcard/communCard1.png"} width={240} height={300} />
                    </div>
                    :
                (image && typeof image === 'object' ? (
                 <Image
                   className={styles.imagecomming}
                   src={URL.createObjectURL(image)}
                   width={250}
                   height={310}
                 />
               ) : 
                    (rarity == "Comum" && elixir == "2" ?
                    <div>
                    <Image src={"/images/createcard/communCard2.png"} width={240} height={300} />
                    </div>
                    :
                    (image && typeof image === 'object' ? (
                        <Image
                          className={styles.imagecomming}
                          src={URL.createObjectURL(image)}
                          width={250}
                          height={310}
                        />
                      ) : 
                     (rarity == "Comum" && elixir == "3" ?
                     <div>
                         {image && typeof image === 'object' ? (
                     <Image
                       className={styles.imagecomming}
                       src={URL.createObjectURL(image)}
                       width={250}
                       height={310}
                     />
                   ) : null}
                     <Image src={"/images/createcard/communCard3.png"} width={240} height={300} />
                     </div>
                     :
                     (rarity == "Comum" && elixir == "4" ?
                     <div>
                         {image && typeof image === 'object' ? (
                     <Image
                       className={styles.imagecomming}
                       src={URL.createObjectURL(image)}
                       width={250}
                       height={310}
                     />
                   ) : null}
                     <Image src={"/images/createcard/communCard4.png"} width={240} height={300} />
                    </div>
                     :
                     (rarity == "Comum" && elixir == "5" ?
                     <div>
                         {image && typeof image === 'object' ? (
                      <Image
                        className={styles.imagecomming}
                        src={URL.createObjectURL(image)}
                        width={250}
                        height={310}
                      />
                    ) : null}
                     <Image src={"/images/createcard/communCard5.png"} width={240} height={300} />
                     </div>
                     :
                        (rarity == "Comum" && elixir == "6" ?
                        <div>
                            {image && typeof image === 'object' ? (
                <Image
                  className={styles.imagecomming}
                  src={URL.createObjectURL(image)}
                  width={250}
                  height={310}
                />
              ) : null}
                        <Image src={"/images/createcard/communCard6.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "Comum" && elixir == "7" ?
                        <div>
                            {image && typeof image === 'object' ? (
                     <Image
                       className={styles.imagecomming}
                       src={URL.createObjectURL(image)}
                       width={250}
                       height={310}
                     />
                   ) : null}
                        <Image src={"/images/createcard/communCard7.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "Comum" && elixir == "8" ?
                        <div>
                            {image && typeof image === 'object' ? (
                     <Image
                       className={styles.imagecomming}
                       src={URL.createObjectURL(image)}
                       width={250}
                       height={310}
                     />
                   ) : null}
                        <Image src={"/images/createcard/communCard8.png"} width={240} height={300} />
                        </div>
                        :
                        (rarity == "Comum" && elixir == "9" ?
                        <div>
                    {image && typeof image === 'object' ? (
                     <Image
                       className={styles.imagecomming}
                       src={URL.createObjectURL(image)}
                       width={250}
                       height={310}
                     />
                   ) : null}
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
                         <Image src={image} width={250} height={310} />
                        :
                        null
                        )))))))))))))))))))))))))))))))))))))))))))))))))))
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
            <div className={styles.atributesCondition}>
                {hp ? <div className={styles.hp}>
                    <Image src={"/images/hp.png"} width={60} height={60} />
                    <div className={styles.desc}>
                        {hp}
                    </div>
                </div> : null}
                {
                    deploytime ? <div className={styles.deploytime}>
                        <Image src={"/images/deploytime.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {deploytime}
                        </div>
                    </div> : null
                }
                {
                    shieldhp ? <div className={styles.shieldhp}>
                        <Image src={"/images/shieldhp.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {shieldhp}
                        </div>
                    </div> : null
                }
                {
                    damage ? <div className={styles.damage}>
                        <Image src={"/images/damage.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {damage}
                        </div>
                    </div> : null
                }
                {
                    damagepersecond ? <div className={styles.damagepersecond}>
                        <Image src={"/images/damagepersecond.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {damagepersecond}
                        </div>
                    </div> : null
                }
                {
                    rangeddamage ? <div className={styles.rangeddamage}>
                        <Image src={"/images/rangeddamage.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {rangeddamage}
                        </div>
                    </div> : null
                }
                {
                    damageondistance ? <div className={styles.damageondistance}>
                        <Image src={"/images/damageondistance.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {damageondistance}
                        </div>
                    </div> : null
                }
                {
                    damageonarea ? <div className={styles.damageonarea}>
                        <Image src={"/images/damageonarea.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {damageonarea}
                        </div>
                    </div> : null
                }
                {
                    damageonimpact ? <div className={styles.damageonimpact}>
                        <Image src={"/images/damageonimpact.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {damageonimpact}
                        </div>
                    </div> : null
                }
                {
                    damageontower ? <div className={styles.damageontower}>
                        <Image src={"/images/damageontower.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {damageontower}
                        </div>
                    </div> : null
                }
                {
                    chargedamage ? <div className={styles.chargedamage}>
                        <Image src={"/images/chargedamage.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {chargedamage}
                        </div>
                    </div> : null
                }
                {
                    damageondeath ? <div className={styles.damageondeath}>
                        <Image src={"/images/damageondeath.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {damageondeath}
                        </div>
                    </div> : null
                }
                {
                    spawnspeed ? <div className={styles.spawnspeed}>
                        <Image src={"/images/spawnspeed.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {spawnspeed}
                        </div>
                    </div> : null
                }
                {
                    duration ? <div className={styles.duration}>
                        <Image src={"/images/duration.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {duration}
                        </div>
                    </div> : null
                }
                {
                    radius ? <div className={styles.radius}>
                        <Image src={"/images/radius.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {radius}
                        </div>
                    </div> : null
                }
                {
                    width ? <div className={styles.width}>
                        <Image src={"/images/width.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {width}
                        </div>
                    </div> : null
                }
                {
                    efecttime ? <div className={styles.efecttime}>
                        <Image src={"/images/efecttime.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {efecttime}
                        </div>
                    </div> : null
                }
                {
                    freezetime ? <div className={styles.freezetime}>
                        <Image src={"/images/freezetime.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {freezetime}
                        </div>
                    </div> : null
                }
                {
                    unities ? <div className={styles.unities}>
                        <Image src={"/images/unities.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {unities}
                        </div>
                    </div> : null
                }
                {
                    arena ? <div className={styles.arena}>
                        <Image src={"/images/arena.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {arena}
                        </div>
                    </div> : null
                }
                {
                    target ? <div className={styles.target}>
                        <Image src={"/images/target.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {target}
                        </div>
                    </div> : null
                }
                {
                    projectilerange ? <div className={styles.projectilerange}>
                        <Image src={"/images/projectilerange.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {projectilerange}
                        </div>
                    </div> : null
                }
                {
                    range ? <div className={styles.range}>
                        <Image src={"/images/range.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {range}
                        </div>
                    </div> : null
                }
                {
                    speed ? <div className={styles.speed}>
                        <Image src={"/images/speed.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {speed}
                        </div>
                    </div> : null
                }
                {
                    impactspeed ? <div className={styles.impactspeed}>
                        <Image src={"/images/impactspeed.png"} width={60} height={60} />
                        <div className={styles.desc}>
                            {impactspeed}
                        </div>
                    </div> : null
                }
        </div>
        </div>
    )
}
import Image from "next/image"
import styles from "../cardinfo/cardinfo.module.css"
export default function CardInfoedit({ name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed, id, level }) {
    return (
        <div className={styles.CardInfo} >
            
            <h1 className={styles.cardName}>{name} Nível {level}</h1>
            <div className={styles.containerCards}>
                <div className={styles.cardImage}>
                    <Image src={image} width={250} height={300} />
                </div>
                <div className={styles.cardTroop}>
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
            <div className={styles.atributesCondition}>
                {hp ? <div className={styles.hp}>
                    <Image src={"/images/hp.png"} width={60} height={60} />
                    <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Pontos de vida
                        </h1>
                        <h1 className={styles.atributesNames}>
                        {hp}
                        </h1>
                    </div>
                </div> : null}
                {
                    deploytime ? <div className={styles.deploytime}>
                        <Image src={"/images/deploytime.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Tempo de mobilização
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {deploytime}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    shieldhp ? <div className={styles.shieldhp}>
                        <Image src={"/images/shieldhp.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Vida do escudo
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {shieldhp}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    damage ? <div className={styles.damage}>
                        <Image src={"/images/damage.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {damage}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    damagepersecond ? <div className={styles.damagepersecond}>
                        <Image src={"/images/damagepersecond.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano por segundo
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {damagepersecond}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    rangeddamage ? <div className={styles.rangeddamage}>
                        <Image src={"/images/rangeddamage.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano a distância
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {rangeddamage}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    damageondistance ? <div className={styles.damageondistance}>
                        <Image src={"/images/damageondistance.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano a distância
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {damageondistance}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    damageonarea ? <div className={styles.damageonarea}>
                        <Image src={"/images/damageonarea.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano em área
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {damageonarea}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    damageonimpact ? <div className={styles.damageonimpact}>
                        <Image src={"/images/damageonimpact.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano no impacto
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {damageonimpact}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    damageontower ? <div className={styles.damageontower}>
                        <Image src={"/images/damageontower.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano a torre
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {damageontower}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    chargedamage ? <div className={styles.chargedamage}>
                        <Image src={"/images/chargedamage.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                            Dano carregado
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {chargedamage}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    damageondeath ? <div className={styles.damageondeath}>
                        <Image src={"/images/damageondeath.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Dano na morte
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {damageondeath}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    spawnspeed ? <div className={styles.spawnspeed}>
                        <Image src={"/images/spawnspeed.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Tempo de mobilização    
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {spawnspeed}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    duration ? <div className={styles.duration}>
                        <Image src={"/images/duration.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Duração
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {duration}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    radius ? <div className={styles.radius}>
                        <Image src={"/images/radius.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Raio
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {radius}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    width ? <div className={styles.width}>
                        <Image src={"/images/width.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Largura
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {width}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    efecttime ? <div className={styles.efecttime}>
                        <Image src={"/images/efecttime.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Tempo de efeito
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {efecttime}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    freezetime ? <div className={styles.freezetime}>
                        <Image src={"/images/freezetime.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Tempo de congelamento
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {freezetime}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    unities ? <div className={styles.unities}>
                        <Image src={"/images/unities.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Unidades
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {unities}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    target ? <div className={styles.target}>
                        <Image src={"/images/target.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Alvos
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {target}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    projectilerange ? <div className={styles.projectilerange}>
                        <Image src={"/images/projectilerange.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Alcance do projétil
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {projectilerange}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    range ? <div className={styles.range}>
                        <Image src={"/images/range.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Alcance
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {range}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    speed ? <div className={styles.speed}>
                        <Image src={"/images/speed.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Velocidade
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {speed}
                            </h1>
                        </div>
                    </div> : null
                }
                {
                    impactspeed ? <div className={styles.impactspeed}>
                        <Image src={"/images/impactspeed.png"} width={60} height={60} />
                        <div className={styles.desc2}>
                        <h1 className={styles.atributesP}>
                        Velocidade de impacto
                        </h1>
                            <h1 className={styles.atributesNames}>
                            {impactspeed}
                            </h1>
                        </div>
                    </div> : null
                }
        </div>
        </div>
    )
}
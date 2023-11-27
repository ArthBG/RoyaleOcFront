import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

export const Footer = () => {
    return (

        <div /* className={styles.footer} */>
            <div className={styles.divfundo}>
                <div className={styles.divcontatos}>
                    <Image src={"/images/cartasclash.png"} width={67} height={70} className={styles.cartas} />
                </div>

                <div className={styles.divsobrenos}>
                    <Image src={"/images/espadaclash.png"} width={67} height={70} className={styles.espadas} />
                </div>

                <div className={styles.divhome}>
                    <Image src={"/images/bauclashroyale.png"} width={67} height={70} className={styles.bau} />
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.row} >
                        <div className={styles.sobrenos}>
                            <h6 className={styles.sobre}>Sobre nós</h6>
                            <p className={styles.justify}>Dentro e fora do código, a Octopus cultiva um ambiente acolhedor, onde a aprendizagem é contínua e a troca de conhecimentos é incentivada. Essa equipe do SENAI não só cria sistemas eficazes, mas também prepara seus membros para enfrentar os desafios em constante evolução do mundo da tecnologia.</p>
                        </div>

                        <div className={styles.texthome}>
                            <h6 className={styles.sobre}>Home</h6>
                            <p className={styles.justify}>Dentro e fora do código.</p>
                        </div>

                        <div className={styles.textcontato}>
                            <h6 className={styles.sobre}>Contato</h6>
                            <p className={styles.justify}>Dentro e fora do código.</p>
                        </div>

                        <div className={styles.divs} >
                            <ul className={styles.links}>
                                <li className={styles.li}>
                                    <Link href="https://github.com/Arthursenai" target="_blank">
                                    </Link>
                                </li>
                                <li className={styles.li}>
                                    <Link className={styles.icon} href="https://linktr.ee/octopusds" target="_blank">
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.row}>

                        <div>
                            <p className={styles.copyright} >Copyright &copy; 2023 Todos Os Direitos Reservados</p>
                        </div>

                    </div>
                </div>
            </footer>



        </div>




    )
}
export default Footer;


// contato sobre nos home
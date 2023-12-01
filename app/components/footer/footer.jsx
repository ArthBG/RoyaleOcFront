import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

export const Footer = () => {
    return (
        <div>
            <footer className={styles.rodape}>
                <div className={styles.rodapediv}>

                    <div className={styles.rodapediv1}>
                        <div className={styles.rodapediv1coluna}>
                            <span><strong className={styles.titulos}>Home</strong></span>
                            <p className={styles.home}><Link href={'/'}>Navegue clicando aqui!</Link></p>
                        </div>
                    </div>

                    <div className={styles.rodapediv2}>
                        <div className={styles.rodapediv2coluna}>
                            <span><strong className={styles.titulos}>Contato</strong></span>
                            <p className={styles.home}>Entre em contato com nossa equipe:</p>
                        </div>
                    </div>

                    <div className={styles.rodapediv3}>
                        <div className={styles.rodapediv3coluna}>
                            <span><strong className={styles.titulos}>Sobre Nós</strong></span>
                            <p><Link href={'/sobrenos'}>Integrantes</Link></p>
                            <p><Link href={'/sobrenos'}>Sobre</Link></p>
                            <p><Link href={'/sobrenos'}>Se torne um integrante!</Link></p>
                        </div>
                    </div>

                    <div className={styles.rodapediv4}>
                        <div className={styles.rodapediv4coluna}>
                            <span><strong className={styles.titulos}>Linktree</strong></span>
                            <p>
                                <Link href={'https://linktr.ee/joao.senai'} target={'parent'}>
                                    <Image src={'/images/linktree.png'} width={50} height={50} className={styles.linktree}>
                                    </Image>
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
                <p className={styles.rodapedireitos}>Octopus © 2023, Todos os Direitos Reservados.</p>
            </footer>
        </div>
    )
}
export default Footer;


// contato sobre nos home
import styles from './header.module.css'
import Image from 'next/image';
import Link from 'next/link';


export const Header = () => {
    return (
        <header className={styles.main}>
            <div className={styles.container1}>
                <Image className={styles.imagemain} src={'/images/coroaicone.png'} alt="Logo da empresa" width={60} height={60}></Image>
                <h1 className={styles.title}>Royale.oc</h1>
            </div>
            <div className={styles.container2}>

            <div className={styles.divbutton1}>
            <Link className={styles.a2} href={'/cards/createcard'} target='_parent'>
                 Criar cartas 
                </Link>
                </div>
                <div className={styles.divbutton2}>
                    <div className={styles.shortcut1}>
                        <Link className={styles.a} href={'/sobrenos'}>
                            <Image className={styles.image} src={'/images/sobrenosescudo.png'} width={60} height={40}></Image>
                            <h1 className={styles.contact}>Sobre Nós</h1>
                        </Link>
                        <Link className={styles.a} href={'/membros'} target='_parent'>
                            <Image className={styles.image} src={'/images/sobrenosescudo.png'} width={60} height={40}></Image>
                            <h1 className={styles.contact}>Sobre Nós</h1>
                        </Link>
                    </div>
                    <div className={styles.shortcut2}>
                        <Link className={styles.a} href={'/contato'} target='_parent'>
                            <Image className={styles.image1} src={'/images/contatoscr.png'} width={45} height={40}></Image>
                            <h1 className={styles.contact2}>Contato</h1>
                        </Link>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header;
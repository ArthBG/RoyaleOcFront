import styles from './header.module.css'
import Image from 'next/image';


export const Header = () => {
    return (
        <header className={styles.main}>
            <div className={styles.icones}>
            <Image className={styles.imagemain} src={'/images/coroaicone.png'} alt="Logo da empresa" width={60} height={60}></Image>
            <h1>sim</h1>
            </div>
        </header>

    )
}

export default Header;
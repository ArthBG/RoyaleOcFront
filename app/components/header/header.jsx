import styles from './header.module.css'
import Image from 'next/image';


export const Header = () => {
    return (
        <header className={styles.main}>
            <div className={styles.icones}>
            <Image src={'/coraicone.png'} alt="Logo da empresa" width={50} height={50}></Image>
            </div>
        </header>

    )
}

export default Header;
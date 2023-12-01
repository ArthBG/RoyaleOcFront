import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className={styles.customFooter}>
        <div className={styles.footerContainer}>
          <span>Octopus © 2023 creativeLabs.</span>
            <h2 className={styles.footerLink}>Powered by Octopus</h2> 
        </div>
      </footer>
    )
}
export default Footer;


// contato sobre nos home

import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodapediv}>

                <div className={styles.rodapediv1}>
                    <div className={styles.rodapediv1coluna}>
                        <span><strong>LOGO</strong></span>
                        <p>SIA Trecho 5 lote 000 bloco z sala 900 - Guará, Brasília - DF, 70000-010</p>
                    </div>
                </div>

                <div className={styles.rodapediv2}>
                    <div className={styles.rodapediv2coluna}>
                        <span><strong>Contatos</strong></span>
                        <p>contato@na.na</p>
                        <p>+55 63 99200-0000</p>
                    </div>
                </div>

                <div className={styles.rodapediv3}>
                    <div className={styles.rodapediv3coluna}>
                        <span><strong>Links</strong></span>
                        <p><a href="#servicos" className={styles.link}>Serviços</a></p>
                        <p><a href="#empresa">Empresa</a></p>
                        <p><a href="#sobre">Sobre</a></p>
                    </div>
                </div>

                <div className={styles.rodapediv4}>
                    <div className={styles.rodapediv4coluna}>
                        <span><strong>Outros</strong></span>
                        <p>Políticas de Privacidade</p>
                    </div>
                </div>

            </div>
            <p className={styles.rodapedireitos}>Copyright © 2023, Todos os Direitos Reservados.</p>
        </footer>
    )
}
export default Footer;


// contato sobre nos home
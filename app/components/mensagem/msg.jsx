import styles from './msg.module.css'


const Mensagem = ({ msg, type }) => {
    if (type == "error") {
        return (
            <p className={styles.erro}>
                {msg}
            </p>
        );
     
    }
    else if (type == "success") {
        return (
            <p className={styles.sucesso}>
                {msg}
            </p>
        );
    }
};

export default Mensagem;

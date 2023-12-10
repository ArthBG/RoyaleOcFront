import React, { useState, useEffect } from 'react';
import styles from './show.module.css';

const GameCharacter = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Função para mostrar o personagem
    const showCharacter = () => {
        setIsVisible(true);
    };

    // Função para esconder o personagem
    const hideCharacter = () => {
        setIsVisible(false);
    };

    // useEffect para controlar o tempo de exibição do personagem
    useEffect(() => {
        // Exibe o personagem após 1 segundo
        const showTimeout = setTimeout(showCharacter, 1000);

        // Esconde o personagem após 5 segundos
        const hideTimeout = setTimeout(hideCharacter, 5000);

        // Limpa os timeouts quando o componente é desmontado
        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
        };
    }, []); // O array vazio garante que o useEffect seja executado apenas uma vez, sem depender de estados específicos

    return (
        <div className={`${styles.characterContainer} ${isVisible ? styles.visible : styles.hidden}`}>
            <img className={styles.characterImage} src="https://i.pinimg.com/originals/59/c1/12/59c11283b296de5304965c833fb5b5d4.gif" alt="Personagem do jogo" />
        </div>
    );
};

export default GameCharacter;
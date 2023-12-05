import Option from "../../options/options.jsx";
import styled from "./select.module.css";
import { useState } from "react";
const SelectTroop = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showOptions, setShowOptions] = useState(false);
  
    const handleOptionClick = (value) => {
      setSelectedOption(value);
      setShowOptions(false);
    };
  
    const options = [
        { value: 'Pontos de Vida', label: 'Pontos de Vida', imageSrc: '/images/hp.png' },
        { value: 'Dano', label: 'Dano', imageSrc: '/images/damage.png' },
        { value: 'Dano por segundo', label: 'Dano por segundo', imageSrc: '/images/damagepersecond.png' },
        { value: 'Dano a distância', label: 'Dano a distância', imageSrc: '/images/damageondistance.png' },
        { value: 'Dano em área', label: 'Dano em área', imageSrc: '/images/damageonarea.png' },
        { value: 'Dano no impacto', label: 'Dano no impacto', imageSrc: '/images/damage.png' },
        { value: 'Dano na torre', label: 'Dano na torre', imageSrc: '/images/damageontower.png' },
        { value: 'Dano carregado', label: 'Dano carregado', imageSrc: '/images/damageondistance.png' },
        { value: 'Dano na morte', label: 'Dano na morte', imageSrc: '/images/damageondeath.png' },
        { value: 'Velocidade de mobilização', label: 'Velocidade de mobilização', imageSrc: '/images/deploytime.png' },
        { value: 'Duração', label: 'Duração', imageSrc: '/images/lifetime.png' },
        { value: 'Tempo de congelamento', label: 'Tempo de congelamento', imageSrc: '/images/freezetime.png' },
        { value: 'Unidades', label: 'Unidades', imageSrc: '/images/unities.png' },
        { value: 'Alvo', label: 'Alvo', imageSrc: '/images/target.png' },
        { value: 'Alcance do projétil', label: 'Alcance do projétil', imageSrc: '/images/radius.png' },
        { value: 'Alcance', label: 'Alcance', imageSrc: '/images/range.png' },
        { value: 'Velocidade', label: 'Velocidade', imageSrc: '/images/speed.png' },
        { value: 'Velocidade de impacto', label: 'Velocidade de impacto', imageSrc: '/images/impactspeed.png' },
        { value: 'Pontos de vida do escudo', label: 'Vida do escudo', imageSrc: '/images/shieldhp.png' },
    ];

    return (
        <div className={styled.main}>
            <div className={styled.select} onClick={() => setShowOptions(!showOptions)}>
                {selectedOption || 'Selecione os atributos'}
            </div>
            {showOptions && (
                <ul className={styled.selectUl}>
                    {options.map((option) => (
                        <Option
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            imageSrc={option.imageSrc}
                            onClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SelectTroop;

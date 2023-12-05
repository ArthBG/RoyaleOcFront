import Option from "../../options/options.jsx";
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
        { value: 'Dano', label: 'Dano', imageSrc: '/images/dano.png' },
        { value: 'Dano por segundo', label: 'Dano por segundo', imageSrc: '/images/danosegundo.png' },
        { value: 'Dano a distância', label: 'Dano a distância', imageSrc: '/images/danoadistancia.png' },
        { value: 'Dano de longa distância', label: 'Dano de longa distância', imageSrc: '/images/danoaodistancia.png' },
        { value: 'Dano em área', label: 'Dano em área', imageSrc: '/images/danoarea.png' },
        { value: 'Dano no impacto', label: 'Dano no impacto', imageSrc: '/images/danoimpacto.png' },
        { value: 'Dano na torre', label: 'Dano na torre', imageSrc: '/images/danotorre.png' },
        { value: 'Dano carregado', label: 'Dano carregado', imageSrc: '/images/danocarregado.png' },
        { value: 'Dano na morte', label: 'Dano na morte', imageSrc: '/images/danomorte.png' },
        { value: 'Velocidade de mobilização', label: 'Velocidade de mobilização', imageSrc: '/images/velocidadespawn.png' },
        { value: 'Duração', label: 'Duração', imageSrc: '/images/duracao.png' },
        { value: 'Tempo de congelamento', label: 'Tempo de congelamento', imageSrc: '/images/tempocongelamento.png' },
        { value: 'Unidades', label: 'Unidades', imageSrc: '/images/unidades.png' },
        { value: 'Alvo', label: 'Alvo', imageSrc: '/images/alvo.png' },
        { value: 'Alcance do projétil', label: 'Alcance do projétil', imageSrc: '/images/alcanceprojeto.png' },
        { value: 'Alcance', label: 'Alcance', imageSrc: '/images/alcance.png' },
        { value: 'Velocidade', label: 'Velocidade', imageSrc: '/images/velocidade.png' },
        { value: 'Velocidade de impacto', label: 'Velocidade de impacto', imageSrc: '/images/velocidadeimpacto.png' },
        { value: 'Pontos de vida do escudo', label: 'Pontos de vida do escudo', imageSrc: '/images/pontosvidaescudo.png' },
    ];

    return (
        <div className="custom-select">
            <div className="select-selected" onClick={() => setShowOptions(!showOptions)}>
                {selectedOption || 'Selecione os atributos'}
            </div>
            {showOptions && (
                <ul className="select-options">
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

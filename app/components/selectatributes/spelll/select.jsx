import Option from "../../options/options";    
const SelectSpell = () => {
    return (
        <select>
            <option value="">Selecione os atributos</option>
            <Option value="Dano em área" label="Dano em área" imageSrc="/images/danoarea.png" />
            <Option value="Dano na torre" label="Dano na torre" imageSrc="/images/danotorre.png" />
            <Option value="Duração" label="Duração" imageSrc="/images/duracao.png" />
            <Option value="Tempo de congelamento" label="Tempo de congelamento" imageSrc="/images/tempocongelamento.png" />
            <Option value="Unidades" label="Unidades" imageSrc="/images/unidades.png" />
            <Option value="Alcance" label="Alcance" imageSrc="/images/alcance.png" />
            <Option value="Alvo" label="Alvo" imageSrc="/images/alvo.png" />
            <Option value="Raio" label="Raio" imageSrc="/images/alcanceprojeto.png" />
            <Option value="Paralisação" label="Paralisação" imageSrc="/images/tempocongelamento.png" />
        </select>
    )
}

export default SelectSpell;

import Option from "../../options/options";

const SelectConstruction = () => {
    return (
        <select>
            <option value="">Selecione os atributos</option>
            <Option value="Pontos de Vida" label="Pontos de Vida" imageSrc="/images/hp.png" />
            <Option value="Dano" label="Dano" imageSrc="/images/dano.png" />
            <Option value="Dano por segundo" label="Dano por segundo" imageSrc="/images/danosegundo.png" />
            <Option value="Dano a distância" label="Dano a distância" imageSrc="/images/danoadistancia.png" />
            <Option value="Dano de longa distância" label="Dano de longa distância" imageSrc="/images/danoaodistancia.png" />
            <Option value="Dano em área" label="Dano em área" imageSrc="/images/danoarea.png" />
            <Option value="Dano na torre" label="Dano na torre" imageSrc="/images/danotorre.png" />
            <Option value="Dano carregado" label="Dano carregado" imageSrc="/images/danocarregado.png" />
            <Option value="Dano na morte" label="Dano na morte" imageSrc="/images/danomorte.png" />
            <Option value="Velocidade de mobilização" label="Velocidade de mobilização" imageSrc="/images/velocidadespawn.png" />
            <Option value="Duração" label="Duração" imageSrc="/images/duracao.png" />
            <Option value="Unidades" label="Unidades" imageSrc="/images/unidades.png" />
            <Option value="Alvo" label="Alvo" imageSrc="/images/alvo.png" />
            <Option value="Alcance" label="Alcance" imageSrc="/images/alcance.png" />
        </select>
    )
}

export default SelectConstruction;
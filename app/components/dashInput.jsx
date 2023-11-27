//componentize os inputs do dashboard   
const dashboardInput = (state, setState, tipo, nome, texto) => {
    return (
        <input
            value={state}
            type={tipo}
            name={nome}
            onChange={(e) => setState(e.target.value)}
            placeholder={texto}
        />
    );
};

export default dashboardInput;
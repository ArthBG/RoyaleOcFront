import Header from '@/app/components/header/header';
import style from './page.module.css';
import Footer from '@/app/components/footer/footer';

export default function Newsevo() {
  return (
    <>
    <Header />
    <main className={style.main}>
    <div className={style.containerAll}>
        <div className={style.containerdivTexts1}>
      <h2>EVOLUÇÃO DE CARTAS</h2>
      <p>A NOVA ATUALIZAÇÃO ESTÁ AQUI!</p>
      <p>Desbloqueie a evolução de cartas, ganhe força com níveis de elite, jogue no caminho estendido do troféu, aumente o nível do rei, desbloqueie novos domínios.</p>
      <p>É hora de EVOLUIR!</p>

      <p>A evolução de cartas permite aos jogadores desbloquear novos poderes para as cartas que já possuem!</p>
      </div>
    <div className={style.containerdivs}>
      <h3>BÁRBAROS</h3>
      <img src="/images/barbaroevo.webp" alt="Barbaros evoluidos"  width={250} height={300} />
      <p>A cada golpe que ele dá, ele fica furioso.</p>
      <p>Neste caso, é bom ter alguém irritado ao seu lado.</p>
      <p>Cada golpe aumenta sua velocidade de ataque e movimento.</p>
      <p>A raiva acumula infinitamente!</p>
      <h2>Ciclos:</h2>
      <p> 1.</p>
    </div>
    <div className={style.containerdivs}>
      <h3>ARQUEIRAS</h3>
        <img src="/images/arqueirasevo.webp" alt="Arqueira evoluida" width={250} height={300} />
      <p>Dispara uma flecha poderosa que perfura todos os inimigos em seu caminho.</p>
      <p>É bom tê-la ao seu lado.</p>
      <p>As flechas causam dano em área e dano ao longo do tempo.</p>
      <p>Ciclos: 2.</p>
    </div>
    <div className={style.containerdivs}>
      <h3>ESQUELETOS</h3>
        <img src="/images/esqueletosevo.webp" alt="Esqueletos evoluidos"  width={250} height={300} />
      <p>Invoca outro Esqueleto evoluído a cada golpe.</p>
      <p>Contagem máxima: 6.</p>
      <p>Tem um chapéu legal.</p>
      <p>Ciclos: 3.</p>
    </div>
    <div className={style.containerdivs}>
      <h3>ESPÍRITO DE GELO</h3>
        <img src="/images/espiritodegeloevo.webp" alt="Esqueletos evoluidos" width={250} height={300} />
      <p>Invoca outros congelamentos.</p>
        <p>Contagem máxima: 3.</p>
        <p>Tem um congelamento insano.</p>
      <p>Ciclos: 3.</p>
    </div>
    <div className={style.containerdivs}>
      <h3>PIROTÉCNICA</h3>
        <img src="/images/pirotecnicaevo.webp" alt="Pirotecnica evoluida"  width={250} height={300} />
      <p>Armas aprimoradas que disparam faíscas explosivas.</p>
      <p>As faíscas causam dano em área e dano ao longo do tempo.</p>
      <p>Grande fã de fogos.</p>
      <p>Ciclos: 2.</p>
    </div>
    <div className={style.containerdivs}>
      <h3>GIGANTE REAL</h3>
        <img src="/images/giganterealevo.webp" alt="Gigante real evoluido" width={250} height={300} />
      <p>Causa dano de repulsão ao disparar.</p>
      <p>Tem bolas (de canhão) gigantes douradas.</p>
      <p>O dano de repulsão empurra para trás e causa dano às tropas inimigas em seu raio.</p>
      <p>Ciclos: 1.</p>
    </div>
    <div className={style.containerdivs}>
        <h3>CAVALEIRO</h3>
        <img src="/images/cavaleiroevo.webp" alt="Cavaleiro evoluido" width={250} height={300} />
        <p>Um cavaleiro com armadura pesada.</p>
        <p>Dano contínuo e rápido.</p>
        <p>Tem um escudo potente.</p>
        <p>Ciclos: 2.</p>
    </div>
    <div className={style.containerdivs}>   
        <h3>MORTEIRO</h3>
        <img src="/images/morteiroevo.webp" alt="Morteiro evoluido" width={250} height={300} />
        <p>Atira projéteis que causam dano em área junto a um goblin.</p>
        <p>Tem um alcance incrível.</p>
        <p>As bombas causam dano em área e dano ao longo do tempo.</p>
        <p>Ciclos: 2.</p>
    </div>
    <div className={style.containerdivs}>
        <h3>MORCEGOS</h3>
        <img src="/images/morcegosevo.webp" alt="Morcegos evoluidos"width={250} height={300} />
        <p>Invoca vida extra a cada golpe.</p>
        <p>Vida regenerativa.</p>
        <p>Dano aumentado.</p>
        <p>Ciclos: 2.</p>
    </div>
    <div className={style.containerdivs}>
        <h3>RECRUTAS REAIS</h3>
        <img src="/images/recrutasreaisevo.webp" alt="Recrutas reais evoluidos" width={250} height={300} />
        <p>Recrutas ficam mais rápidos e com mais vida.</p>
        <p>Começam a correr quando seu escudo cai.</p>
        <p>Os recrutas ficam mais fortes.</p>
        <p>Ciclos: 1.</p>
    </div>
    <div className={style.containerdivTexts}>
      <h2>COMO FUNCIONAM AS EVOLUÇÕES?</h2>
      <p>Coletar fragmentos de evolução para desbloquear a evolução de uma carta.</p>
      <p>Depois de desbloqueado, coloque a carta em um slot de evolução para usar as novas habilidades no combate.</p>
      <p>Na batalha, mobilize a carta evoluída um número certo de vezes (ciclos) para ativar a evolução.</p>
      <p>Quando a evolução estiver pronta para ser usada, ela pode ser implantada na arena como qualquer outra carta.</p>
      <p>A carta evoluída executará seus ataques aprimorados automaticamente como qualquer outra carta. As habilidades não precisam ser ativadas manualmente.</p>
      <p>Depois que a evolução for implantada, a carta normal estará disponível para uso. Para obter a versão evoluída novamente, você precisa passar pelos ciclos.</p>

      <p>Fragmentos? Slots? Ciclos? Sobre o que estamos falando? Vamos aprofundar mais nos detalhes de como tudo funciona.</p>

      <h2>EVOLUÇÕES DE BATALHA</h2>
      <p>Se você entrar em batalha com uma carta evoluída em um dos seus slots de evolução, notará gotas de elixir escuro aparecendo no topo da carta em sua mão. O valor dessas gotas indica quantas vezes você precisa usar a carta (ciclos) para poder usar a versão evoluída.</p>
      <p>Depois de jogar a carta o suficiente, verá que todas as gotas de elixir escuro foram preenchidas, e a carta evoluída está ativada. Na próxima vez que usar a carta, a evolução será implantada! Depois que uma evolução for implantada, a carta voltará ao seu estado padrão, e você poderá iniciar o ciclo novamente.</p>
      <p>Seu oponente verá um ícone acima da sua carta implantada sempre que você jogar uma carta que ganha elixir escuro.</p>
      <p>As evoluções em jogo terão uma aparência única e um ícone roxo ao lado de seu nível para fácil identificação. Além disso, as evoluções causarão um rebuliço na arena com suas armas aprimoradas!</p>

      <h2>FRAGMENTOS DE EVOLUÇÃO</h2>
      <p>Colete 6 fragmentos de evolução para desbloquear a evolução de uma carta específica.</p>
      <p>Depois de coletar todos os fragmentos para a carta, sua evolução será desbloqueada!</p>
      <p>Acho que podemos simplificar isso chamando-os apenas de "fragmentos".</p>

      <h3>COMO OBTER FRAGMENTOS</h3>
      <ul>
        <li>Pass Royale (a partir do Nível 7 do Rei)</li>
        <li>Loja da Temporada (a partir do Nível 8 do Rei)</li>
        <li>Desafios</li>
        <li>Loja</li>
        <li>Novos baús de nível (a cada dois níveis a partir do Nível 50 do Rei)</li>
      </ul>
    </div>
    </div>
    </main>
    <Footer />
    </>
  );
}

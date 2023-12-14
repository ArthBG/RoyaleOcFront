import React from 'react';
import Header from '@/app/components/header/header';
import Styles from './page.module.css'; // Arquivo de estilos
import Footer from '@/app/components/footer/footer';
import Image from 'next/image';

function GameUpdate() {
  return (
    <div className={Styles.maindiv}>
    <Header />
    <div className={Styles.newsContainer}>
      <h1 className={Styles.title}>ATUALIZAÇÃO DO JOGO - 13 DE DEZEMBRO</h1>
      <h2 className={Styles.subtitle}>GRANDES MUDANÇAS NA SUA TORRE PRINCESA!</h2>
      <p className={Styles.paragraph}>Ao atualizar seu jogo a partir de 13 de dezembro, você verá que sua Princess Tower agora se tornou uma carta Tower Princess.</p>
      <p className={Styles.paragraph}>Este é o primeiro TOWER TROOP de todos os jogadores – o novo tipo de carta que chega ao Clash Royale!</p>
      <div className={Styles.img}>
              <Image  src={"/images/newstuff.webp"} width={600} height={400} />
            </div>
      <h3 className={Styles.sectionTitle}>COMO FUNCIONAM AS TROPAS DA TORRE?</h3>
      <h4 className={Styles.subsectionTitle}>Em batalha</h4>
      <ul className={Styles.list}>
        <li>Tower Troops são cartas diferentes que podem defender do topo de suas duas Crown Towers</li>
        <li>Eles só são revelados ao seu oponente quando a Batalha começa</li>
        <li>Cada Tower Troop possui uma habilidade diferente que a torna única</li>
      </ul>
      <h4 className={Styles.subsectionTitle}>Fora da batalha</h4>
      <ul className={Styles.list}>
        <li>Tower Troops é um novo espaço para cartas no seu Battle Deck que precisa ser preenchido</li>
        <li>Eles sobem de nível e são atualizados da mesma forma que outras cartas (múltiplas cópias de cartas e ouro)</li>
      </ul>
      <h4 className={Styles.subsectionTitle}>Atualizando as tropas da torre</h4>
      <ul className={Styles.list}>
        <li>Sua Princess Tower atual será automaticamente convertida em uma carta Tower Princess do mesmo nível da sua King Tower.</li>
        <li>Ao atingir um novo nível da Torre do Rei na Jornada do Rei, você receberá cartas de Princesa da Torre e ouro para que possa atualizá-la para corresponder ao seu nível da Torre do Rei.</li>
        <li>As tropas da Torre têm um limite de nível que corresponde ao seu nível da Torre do Rei. Isso significa que você não pode ‘superar’ suas Torres da mesma forma que faria com as cartas. (por exemplo, se você tiver uma King Tower de nível 12, não poderá ter uma Tower Troop de nível 13).</li>
        <li>Tower Troops podem ser encontradas em Tower Troop Chests, um novo tipo de baú que entra no Ciclo de Baús!</li>
      </ul>
      <p className={Styles.paragraph}>A maioria dos itens mágicos não podem ser usados ​​com tropas da torre, exceto a moeda mágica.</p>
    </div>
        <Footer />
      </div>
  );
}

export default GameUpdate;

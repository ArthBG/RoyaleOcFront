"use client"
import Image from "next/image"
import Header from "./components/header/header"
import styles from "./page.module.css"
import Link from "next/link"
import Footer from "./components/footer/footer"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <main className={styles.backgroundimage}>
      <Header />
      <div className={styles.cards}>
        <div className={styles.divcard1}>
          <div className={styles.a2}>
            <h2 className={styles.titulo}>O que é Clash Royale:</h2>
            <p className={styles.font}>
              Clash Royale é um jogo de estratégia em tempo real da Supercell, onde jogadores enfrentam uns aos outros em batalhas usando cartas
              colecionáveis. O objetivo é destruir as torres do oponente enquanto defende as suas. A chave para o sucesso está na construção inteligente
              do deck, na gestão eficiente de elixir e na habilidade de adaptação durante as batalhas. Com uma comunidade competitiva e recursos sociais, o jogo oferece uma experiência dinâmica e envolvente,
              desafiando os jogadores a aprimorar suas táticas e alcançar a vitória na arena.
            </p>
          </div>
        </div>
        <div className={styles.divcard2}>
          <div className={styles.a3}>
            <h2 className={styles.titulo}>Curiosidades sobre a Supercell:</h2>
            <p className={styles.font}>
              A Supercell, renomada desenvolvedora finlandesa de jogos mobile, destaca-se por sua abordagem única no setor.
              Famosa pelos sucessos como Clash of Clans e Clash Royale, a empresa adota uma cultura empresarial descentralizada,
              permitindo liberdade criativa às equipes. Seu modelo de negócios inovador foca em poucos jogos altamente polidos, com suporte contínuo. A empresa valoriza
              o desenvolvimento colaborativo, a reinvenção constante e não hesita em descontinuar jogos para manter a inovação.
              A sede em Helsinque reflete o ambiente descontraído e criativo que impulsiona a Supercell.
            </p>
          </div>
        </div>
      </div>

      <Carousel className={styles.carrossel} width={800}>
       
        <div>
          <h2>.......</h2>
          <img src={'/images/'} />
          <p>Arena 1</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 2</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 3</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 4</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 5</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 6</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 7</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 8</p>
        </div>

        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 9</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 10</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 11</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 12</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 13</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 14</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 15</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 16</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 17</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 18</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 19</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 20</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 21</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 22</p>
        </div>
        <div>
          <h2>.......</h2>
          <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" />
          <p>Arena 23</p>
        </div>
      </Carousel>


      <Footer />
    </main>
  )
}

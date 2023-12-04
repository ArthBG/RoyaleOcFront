"use client";
import styles from "./modalatributes.module.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ModalAtributes({ type }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    return (
      type == "Tropa" ? (
        <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Atributos para tropas
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <select>
                <option value="">Selecione os atributos</option>
                <option value="Pontos de Vida"><img src={"/images/hp.png"}/>Pontos de Vida</option>
                <option value="Dano"><img src={"/images/dano.png"}/>Dano</option>
                <option value="Dano por segundo<"><img src={"/images/danosegundo.png"}/>Dano por segundo</option>
                <option value="Dano a distância"><img src={"/images/danoadistancia.png"}/>Dano a distância</option>
                <option value="Dano de longa distância"><img src={"/images/danoaodistancia.png"}/>Dano de longa distância</option>
                <option value="Dano em área"><img src={"/images/danoarea.png"}/>Dano em área</option>
                <option value="Dano no impacto"><img src={"/images/danoimpacto.png"}/>Dano no impacto</option>
                <option value="Dano na torre"><img src={"/images/danotorre.png"}/>Dano na torre</option>
                <option value="Dano carregado"><img src={"/images/danocarregado.png"}/>Dano carregado</option>
                <option value="Dano na morte"><img src={"/images/danomorte.png"}/>Dano na morte</option>
                <option value="Velocidade de mobilização"><img src={"/images/velocidadespawn.png"}/>Velocidade de spawn</option>
                <option value="Duração"><img src={"/images/duracao.png"}/>Duração</option>
                <option value="Tempo de congelamento"><img src={"/images/tempocongelamento.png"}/>Tempo de congelamento</option>
                <option value="Unidades"><img src={"/images/unidades.png"}/>Unidades</option>
                <option value="Alvo"><img src={"/images/alvo.png"}/>Alvo</option>
                <option value="Alcance do projétil"><img src={"/images/alcanceprojeto.png"}/>Alcance do projétil</option>
                <option value="Alcance"><img src={"/images/alcance.png"}/>Alcance</option>
                <option value="Velocidade"><img src={"/images/velocidade.png"}/>Velocidade</option>
                <option value="Velocidade de impacto"><img src={"/images/velocidadeimpacto.png"}/>Velocidade de impacto</option>
                <option value="Pontos de vida do escudo"><img src={"/images/pontosvidaescudo.png"}/>Pontos de vida do escudo</option>
                </select>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <input type="text" className={styles.atributos} placeholder="Valor do atributo" />
              </Typography>
              <div className={styles.containerButtons}>
                <button className={styles.scbtnyellow} onClick={addAtributes}>Adicionar atributo</button>
                <button className={styles.scbtnyellow} onClick={removeAtributes}>Remover atributo</button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : (
        type == "Construção" ? (
          <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Atributos para construção
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <select>
                <option value="">Selecione os atributos</option>
                <option value="Pontos de Vida"><img src={"/images/hp.png"}/>Pontos de Vida</option>
                <option value="Dano"><img src={"/images/dano.png"}/>Dano</option>
                <option value="Dano por segundo<"><img src={"/images/danosegundo.png"}/>Dano por segundo</option>
                <option value="Dano a distância"><img src={"/images/danoadistancia.png"}/>Dano a distância</option>
                <option value="Dano de longa distância"><img src={"/images/danoaodistancia.png"}/>Dano de longa distância</option>
                <option value="Dano em área"><img src={"/images/danoarea.png"}/>Dano em área</option>
                <option value="Dano na torre"><img src={"/images/danotorre.png"}/>Dano na torre</option>
                <option value="Dano carregado"><img src={"/images/danocarregado.png"}/>Dano carregado</option>
                <option value="Dano na morte"><img src={"/images/danomorte.png"}/>Dano na morte</option>
                <option value="Velocidade de mobilização"><img src={"/images/velocidadespawn.png"}/>Velocidade de spawn</option>
                <option value="Duração"><img src={"/images/duracao.png"}/>Duração</option>
                <option value="Unidades"><img src={"/images/unidades.png"}/>Unidades</option>
                <option value="Alvo"><img src={"/images/alvo.png"}/>Alvo</option>
                <option value="Alcance"><img src={"/images/alcance.png"}/>Alcance</option>
                  </select>
                </Typography>
                <div className={styles.containerButtons}>
                <button className={styles.scbtnyellow} onClick={addAtributes}>Adicionar atributo</button>
                <button className={styles.scbtnyellow} onClick={removeAtributes}>Remover atributo</button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : (
        type == "Feitiço" ? (
          <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Atributos para feitiços
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <select>
                <option value="">Selecione os atributos</option>
                <option value="Dano em área"><img src={"/images/danoarea.png"}/>Dano em área</option>
                <option value="Dano na torre"><img src={"/images/danotorre.png"}/>Dano na torre</option>
                <option value="Duração"><img src={"/images/duracao.png"}/>Duração</option>
                <option value="Tempo de congelamento"><img src={"/images/tempocongelamento.png"}/>Tempo de congelamento</option>
                <option value="Unidades"><img src={"/images/unidades.png"}/>Unidades</option>
                <option value="Alcance"><img src={"/images/alcance.png"}/>Alcance</option>
                <option value="Alvo"><img src={"/images/alvo.png"}/>Alvo</option>
                <option value="Raio"><img src={"/images/alcanceprojeto.png"}/>Raio</option>
                <option value="Paralisação"><img src={"/images/tempocongelamento.png"}/>Paralisação</option>
  
                  </select>              
              </Typography>
              <div className={styles.containerButtons}>
                <button className={styles.scbtnyellow} onClick={addAtributes}>Adicionar atributo</button>
                <button className={styles.scbtnyellow} onClick={removeAtributes}>Remover atributo</button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : null
      )
      )
    )
  }
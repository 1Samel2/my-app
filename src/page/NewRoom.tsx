import React from "react";

import logoImg from '../assets/logo.svg';
import illustrationImg from '../assets/illustration.svg';
import googleIconImg from '../assets/google-icon.svg'
import '../styles/auth.scss'
import { Button } from "../Components/Button";

function NewRoom() {

    return (

        <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <h2>Crie uma nova sala</h2>
            <form>
              <input 
                type="text"
                placeholder="Nome da sala"
              />
              <Button type="submit">
                Criar sala
              </Button>
            </form>
            <p>Quer entrar em uma sala  já existente? <a href="http://">Clique aqui</a></p>
          </div>
        </main>
      </div>

    )
}

export default NewRoom
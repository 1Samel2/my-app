import React from "react";

import logoImg from '../assets/logo.svg';
import illustrationImg from '../assets/illustration.svg';
import googleIconImg from '../assets/google-icon.svg'
import '../styles/auth.scss'
export function Home() {

    return (

        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt=" Illustration" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-container">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room"><img src={googleIconImg} alt="Google" />Crie sua sala com o Google</button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input
                        type="text" placeholder="Digite o codigo da sala"/>
                        <button type="submit">Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>

    )
}

export default Home
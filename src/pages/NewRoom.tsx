import { Link } from 'react-router-dom';

import illustrationImg from '../assets/illustration.svg';
import logo from '../assets/logo.svg';

import { Button } from '../components/Button'
//import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss'

export function NewRoom() {
    //const { user } = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt='illustration' />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type='text'
                            placeholder='Nome da sala'
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?
                        <Link to="/"> Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
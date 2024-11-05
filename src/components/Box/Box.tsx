import { Login } from '../login/login'
import './Box.css'

export const Box = () =>{
    return (
    <div className='form-box'>

        <div className="form-box-content">
            <img src="https://assets.dio.me/VTgUqMiPAIgvsFdSvgSnVAB5lrqnNxY_N8h8LknnQys/f:webp/q:80/w:120/L2Fzc2V0cy9kaW9tZS9sb2dvLWZ1bGwuc3Zn" alt="" />
            <Login description="E-mail" typeBox="email" />
            <Login description="Senha" typeBox="password" />
        </div>

        <div className="form-box-button">
            <button type="button">Entrar</button>
        </div>

    </div>
    )
}
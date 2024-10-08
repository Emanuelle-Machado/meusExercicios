import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    //redirecionando o usuário de URL
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(`o usuário ${username} entrou`)

        navigate('/')
    }

    return (
        <div>
            <h2>login</h2>
            <form onSubmit={handleLogin}>
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <button type='submit'>entrar</button>
            </form>
        </div>
    )
}

export default Login
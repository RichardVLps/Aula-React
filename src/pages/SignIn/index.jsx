import { useState } from "react";

import { Container, Form, Backgrond } from "./style";
import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";



export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()
    
    function handleSignIn() {
        signIn({ email, password })
    }

    const handleKeyPress = (e) => {
        if ( e.key === 'Enter') {
            handleSignIn();
        }
    };

    return (
        <Container>
            <Form onKeyDown={handleKeyPress}>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

                <Button title="Entrar" onClick={ handleSignIn }/>
                
                <Link to="/register">
                    <ButtonText title="Criar conta" isActive/>
                </Link>
            </Form>
            <Backgrond />
        </Container>
    )
}
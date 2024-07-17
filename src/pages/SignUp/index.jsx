import { api } from "../../services/api";

import { useState } from "react";
import { Container, Form, Backgrond } from "../SignIn/style";
import { FiLock, FiUser, FiMail } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
          return alert("Você deve preecher todos os campos")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("usuario cadastrado")
            navigate("/")
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("nao foi possivel cadastrar")
            }
        })
    }

    const handlePress = (e) => {
        if(e.key === "Enter") {
            handleSignUp()
        }
    }

    return (    
        <Container>
            <Backgrond />
            <Form onKeyDown={handlePress}>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>

                <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>

                <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
                
                <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

                <Button title="Cadastrar" onClick={ handleSignUp } />

                <Link to="/">
                    <ButtonText title="Voltar para o login" isActive/>
                </Link>
            </Form>
        </Container>
    )
}
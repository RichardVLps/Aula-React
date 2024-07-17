import { useState } from "react";

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

import { Container, Form, Avatar } from "./style";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { FiLock, FiUser, FiArrowLeft, FiMail, FiCamera } from "react-icons/fi";

import { useNavigate } from 'react-router-dom';

import defaultAvatar from "../../assets/default_avatar.svg";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewpassword] = useState('')

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

    const [avatar, setAvatar] = useState(user.avatar)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const update = {
            name,
            email,
            password: newPassword,
            old_password: currentPassword
        }

        const userUpdate = Object.assign(user, update)

        await updateProfile({ user: userUpdate, avatarFile })
    }


    function handleAvatar(e) {
        const file = e.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    const navigate = useNavigate();
    
    return (
        <Container>
            <header>
                <FiArrowLeft onClick={() => navigate(-1)} />
            </header>
            <Avatar>
                <img src={ avatarURL } alt="imagem de perfil" />
                <label htmlFor="avatar">
                    <FiCamera />
                    <input id="avatar" type="file" onChange={handleAvatar}/>
                </label>
            </Avatar>
            <Form>
                <Input placeholder="Nome" type="text" icon={FiUser} value={ name } onChange={ e => setName(e.target.value) } />

                <Input placeholder="E-mail" type="text" icon={FiMail} value={ email } onChange={ e => setEmail(e.target.value) } />

                <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={ e => setCurrentPassword(e.target.value) } />

                <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={ e => setNewpassword(e.target.value)} />

                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}
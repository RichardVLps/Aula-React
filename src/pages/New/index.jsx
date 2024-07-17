import { useState } from "react";
import { api } from "../../services/api";

import { Container, Form } from "./style";
import { Link, useNavigate} from "react-router-dom";

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { Section } from "../../Components/Section";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";

export function New() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState('')

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate()

    function handleAddLik() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink('')
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter((link, index) => index !== deleted))
    }

    function handleAddTags() {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter((tag, index) => index !== deleted))
    }

    async function handleNewNote() {
        if (title === '') {
            return alert('Você deve criar um titulo para sua nota')
        }

        if (description === '') {
            return alert('Você deve criar uma descrição para sua nota')
        }

        if (links.length === 0) {
            return alert("Adicione pelo menos um link.");
        }

        if (tags.length === 0) {
            return alert("Adicione pelo menos uma tag.");
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })

        navigate("/")
    }

    return (
        <Container>
            <Header />
                <main>
                    <Form>

                        <div>
                            <h1>Criar nota</h1>
                            <Link to="/" >
                                <ButtonText title="voltar"/>
                            </Link>
                        </div>

                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <textarea placeholder="Observações" onChange={e => setDescription(e.target.value)}></textarea>

                        <Section title='links úteis'/>

                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={ String(index) }
                                    value={ link }
                                    onClick={ () => { handleRemoveLink(index) } }
                                />
                            ))
                        }

                        <NoteItem 
                            isNew
                            placeholder='Novo link'
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLik}
                        />

                        <Section title='Marcadores'/>

                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={ String(index) }
                                    value={ tag }
                                    onClick={ () => { handleRemoveTag(index) } }
                                />
                            ))
                        }

                        <div className="tags">
                            
                            <NoteItem 
                                isNew
                                placeholder='Novo marcador'
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTags}
                            />

                        </div>
                    </Form>
                    <Button title="Salvar" onClick={handleNewNote}/>
                </main>
        </Container>

    )
}
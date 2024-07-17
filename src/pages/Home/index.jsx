import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNotes} from "./style";

import { Header } from "../../Components/Header";
import {Section} from "../../Components/Section";
import { Input } from "../../Components/Input";
import { ButtonText } from "../../Components/ButtonText";
import { Note } from "../../Components/Note";

import { FaPlus } from "react-icons/fa6";
 
export function Home() {
    const navigate = useNavigate()

    const [notes, setNotes] = useState([])
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [search, setSearch] = useState('')

    function handleSelectedTags(nameTag) {
        if(nameTag === 'all' ) {
            return setSelectedTags([])
        }

        const activeTag = selectedTags.includes(nameTag)
        if(activeTag) {
            const alreadySelectedTags = selectedTags.filter(tag => tag !== nameTag)
            setSelectedTags(alreadySelectedTags)
        } else{
            setSelectedTags(prevState => [...prevState, nameTag])
        }
    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fatchTags() {
            const response = await api.get('/tags')
            setTags(response.data)    
        }
        fatchTags()
    }, [])

    useEffect(() =>{
        async function fatchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)

            setNotes(response.data)
        }
        fatchNotes()
    },[search, selectedTags])

    return (
        <Container>

            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText  
                        title='Todos'
                        onClick={() => handleSelectedTags('all')}
                        isActive={selectedTags.length === 0}
                    />
                </li>
                {
                    tags && tags.map( tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name} 
                                onClick={() => handleSelectedTags(tag.name)}
                                isActive={selectedTags.includes(tag.name) }
                            />
                            
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas"/>
                {
                    notes.map(note => (
                        <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)}/>
                    ))
                }

            </Content>

            <NewNotes to='/new' >
                <FaPlus />
                <span>Criar nota</span>
            </NewNotes>

        </Container>
    )
}
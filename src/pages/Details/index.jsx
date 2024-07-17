import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Content } from "./style";

import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Tags } from "../../Components/Tags";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

import { api } from "../../services/api";

export function Details() {

  const navigate = useNavigate()

  const [data, setData] = useState()

  const params = useParams()

  useEffect(() =>{
    async function fatchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fatchNotes()
  },[])

  async function handleRemove() {
    const confirm = window.confirm('Deseja excluir essa nota?')

    if(confirm) {
      await api.delete(`notes/${params.id}`)
      navigate('/')
    }
  }

    return (
      <Container>
        <Header/>
        { data &&
          <main>
            <Content>

              <ButtonText isActive onClick={handleRemove} title="Excluir a nota"/>
              <h1>{data.title}</h1>
              <p>{data.description}</p>

              <Section title="Links úteis">
                <ul>
                  { 
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target='_blanck'>{link.url}</a>
                      </li>
                    ))
                  }
                </ul>
              </Section>

              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tags 
                      key={String(tag.id)} 
                      title={tag.name}
                    />
                  ))
                }
              </Section>


                <Button onClick={() => navigate(-1)} title="Voltar"/>

            </Content>
          </main>             
        }
      </Container>
    )
}
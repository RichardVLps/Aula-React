/* eslint-disable react/prop-types */
import { Container } from "./style";
import { Tags } from "../Tags";

export function Note({data, ...rest}) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            {
            data.tags &&

            <footer>
                {
                    data.tags.map(tag => <Tags key={tag.name} title={tag.name} />)
                }
            </footer>
            
            }
        </Container>
    )
}
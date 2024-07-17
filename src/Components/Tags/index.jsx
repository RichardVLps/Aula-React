import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function Tags({title, ...rest}) {
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}
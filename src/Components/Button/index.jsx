import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function Button({ title, ...rest }) {
    return(
        <Container type="button" {...rest}>
            {title}
        </Container>
    )
}

import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function ButtonText({title, isActive, ...rest}) {
    return (
        <Container type="button" $isActive={isActive} {...rest}>
            {title}
        </Container>
    )
}
import { Container, Message } from "../listEmpty/styles";

interface Props {
    message: string;
}

const ListEmpty = ({ message }: Props) => {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    )
}

export default ListEmpty;
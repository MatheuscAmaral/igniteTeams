import { Container, SubTitle, Title } from '../highlight/style'

interface Props {
    title: string;
    subtitle: string
}

const HighLight = ({ title, subtitle }: Props) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    )
}

export default HighLight;
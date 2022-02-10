import {
    Container,
    Title,
    Button,
    Image,
    LeftContainer,
    RightContainer,
    SubTitle,
    ButtonBox,
} from "./styles";

export default function Home() {
    return (
        <Container>
            <LeftContainer>
                <Title>O mapa local da sua cidade</Title>
                <SubTitle>
                    Encontre no comércio local tudo o que precisa!
                </SubTitle>
                <Button>
                    <ButtonBox>{">"}</ButtonBox>
                    Cadastre um ponto comercial
                </Button>
            </LeftContainer>
            <RightContainer>
                <Image />
            </RightContainer>
        </Container>
    );
}

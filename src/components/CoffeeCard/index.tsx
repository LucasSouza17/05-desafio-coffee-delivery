
import { CoffeePrice } from "../CoffeePrice"
import { CoffeeData } from "../../@types/coffee"
import { Container, Content, ContentInfo, Description, Image, Title, TitleDescriptionContainer } from "./styles"

type Props = {
  coffee: CoffeeData
}

export function CoffeeCard({ coffee }: Props) {
  return (
    <Container >
      <Content >
        <Image source={coffee.image} />
        <ContentInfo >
          <TitleDescriptionContainer>
            <Title >{coffee.title}</Title>
            <Description >
              {coffee.description}
            </Description>
          </TitleDescriptionContainer>
          <CoffeePrice price={coffee.price} />
        </ContentInfo>
      </Content>
    </Container>
  )
}

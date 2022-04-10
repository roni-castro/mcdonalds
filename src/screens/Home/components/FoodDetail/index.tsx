import { formatPrice } from '../../../../utils/formatPrice';
import { FoodDetailProps } from './interface';
import {
  Container,
  TextContainer,
  FoodImageContainer,
  FoodImage,
  FoodName,
  FoodPriceContainer,
  FoodPrice,
  FoodDescription,
} from './styles';

export default function FoodDetail({ name, imageUrl, price, description }: FoodDetailProps) {
  return (
    <Container>
      <FoodImageContainer>
        <FoodImage source={{ uri: imageUrl }} />
      </FoodImageContainer>
      <TextContainer>
        <FoodName>{name}</FoodName>
        <FoodPriceContainer>
          <FoodPrice>{formatPrice(price)}</FoodPrice>
        </FoodPriceContainer>
        <FoodDescription>{description}</FoodDescription>
      </TextContainer>
    </Container>
  );
}

import styled from 'styled-components/native';
import { Typography } from '../../../../components/Typography';

export const Container = styled.View(({ theme }) => ({
  marginTop: theme.spacingSize.spacing8,
  marginBottom: theme.spacingSize.spacing36,
  backgroundColor: theme.color.neutralWhite,
  alignItems: 'center',
}));

export const FoodImageContainer = styled.View(({ theme }) => ({
  width: '100%',
  paddingHorizontal: theme.spacingSize.spacing8,
  marginBottom: theme.spacingSize.spacing48,
}));

export const FoodImage = styled.Image.attrs({
  resizeMode: 'contain',
})(() => ({
  height: 212,
}));

export const FoodName = styled(Typography).attrs({
  size: 'titleSmall',
  lineHeight: 'titleSmall',
  weight: 'bold',
  fontFamily: 'InterBold',
})(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacingSize.spacing20,
}));

export const TextContainer = styled.View(({ theme }) => ({
  marginHorizontal: theme.spacingSize.spacing32,
}));

export const FoodPriceContainer = styled.View(({ theme }) => ({
  borderRadius: 50,
  borderWidth: 1,
  alignSelf: 'center',
  borderColor: theme.color.neutral100,
  marginBottom: theme.spacingSize.spacing20,
  paddingHorizontal: theme.spacingSize.spacing24,
  paddingVertical: theme.spacingSize.spacing8,
}));

export const FoodPrice = styled(Typography).attrs({
  size: 'paragraphMedium',
  lineHeight: 'paragraphMedium',
  weight: 'regular',
  fontFamily: 'InterRegular',
})({
  textAlign: 'center',
});

export const FoodDescription = styled(Typography).attrs({
  size: 'paragraphMedium',
  lineHeight: 'paragraphMedium',
  weight: 'regular',
  fontFamily: 'InterRegular',
})(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacingSize.spacing20,
}));

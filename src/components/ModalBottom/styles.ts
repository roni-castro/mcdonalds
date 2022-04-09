import styled from 'styled-components/native';

export const ModalBottomBoxWrapper = styled.View(({ theme }) => ({
  paddingTop: theme.spacingSize.spacing48,
  backgroundColor: theme.color.neutralWhite,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
}));

export const ModalBottomContent = styled.View(() => ({
  justifyContent: 'center',
}));

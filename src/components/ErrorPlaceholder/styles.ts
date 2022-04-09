import styled from 'styled-components/native';
import errorOutlineIcon from '../../../assets/error-outline.png';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.color.neutral15,
}));

export const ErrorImage = styled.Image.attrs(() => ({
  source: errorOutlineIcon,
}))(({ theme }) => ({
  marginBottom: theme.spacingSize.spacing12,
}));

export const Text = styled.Text(({ theme }) => ({
  fontSize: theme.fontSize.paragraphMedium,
  fontFamily: theme.fontFamily.InterMedium,
  color: theme.color.neutral100,
  textAlign: 'center',
  paddingBottom: theme.spacingSize.spacing12,
}));

export const ReloadButton = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: theme.color.feedbackInfo,
  borderRadius: 4,
  padding: theme.spacingSize.spacing8,
}));

export const ReloadButtonText = styled.Text(({ theme }) => ({
  fontSize: theme.fontSize.paragraphSmall,
  fontFamily: theme.fontFamily.InterMedium,
  color: theme.color.neutralWhite,
}));

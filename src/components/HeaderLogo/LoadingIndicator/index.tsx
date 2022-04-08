import { LoadingIndicatorProps } from './interface';
import { LoadingIndicatorStyled, LoadingIndicatorContainer } from './styles';

export function LoadingIndicator(props: LoadingIndicatorProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <LoadingIndicatorStyled {...props} />;
}

export function LoadingIndicatorFull() {
  return (
    <LoadingIndicatorContainer>
      <LoadingIndicatorStyled />
    </LoadingIndicatorContainer>
  );
}

LoadingIndicator.Full = LoadingIndicatorFull;

export default LoadingIndicator;

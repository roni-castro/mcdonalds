import { ScrollView, useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ModalBottomProps } from './interface';
import { ModalBottomBoxWrapper, ModalBottomContent } from './styles';

const MinTopModalMargin = 28;

function ModalBottom({ isVisible, onCloseOrDismissModal, children }: ModalBottomProps) {
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onCloseOrDismissModal}
      onBackdropPress={onCloseOrDismissModal}
      onBackButtonPress={onCloseOrDismissModal}
      swipeDirection={['down']}
      propagateSwipe
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <ModalBottomBoxWrapper
        style={{ maxHeight: windowHeight - Math.max(insets.top, MinTopModalMargin) }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ModalBottomContent onStartShouldSetResponder={() => true}>{children}</ModalBottomContent>
        </ScrollView>
      </ModalBottomBoxWrapper>
    </Modal>
  );
}

export default ModalBottom;

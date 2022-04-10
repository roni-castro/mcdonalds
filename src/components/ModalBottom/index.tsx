import { useState } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ModalBottomProps } from './interface';
import { ModalBottomBoxWrapper, ModalBottomContent } from './styles';

const MinTopModalMargin = 28;

function ModalBottom({ isVisible, onCloseOrDismissModal, children }: ModalBottomProps) {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  const modalMaxHeight = windowHeight - Math.max(insets.top, MinTopModalMargin);
  const shouldActivateScroll = contentHeight > modalMaxHeight;

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onCloseOrDismissModal}
      onBackdropPress={onCloseOrDismissModal}
      onBackButtonPress={onCloseOrDismissModal}
      swipeDirection={['down']}
      useNativeDriver
      propagateSwipe={shouldActivateScroll}
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <ModalBottomBoxWrapper style={{ maxHeight: modalMaxHeight }}>
        <ScrollView scrollEnabled={shouldActivateScroll} contentContainerStyle={{ flexGrow: 1 }}>
          <ModalBottomContent
            onLayout={event => {
              const { height } = event.nativeEvent.layout;
              setContentHeight(height);
            }}
            onStartShouldSetResponder={() => true}
          >
            {children}
          </ModalBottomContent>
        </ScrollView>
      </ModalBottomBoxWrapper>
    </Modal>
  );
}

export default ModalBottom;

export interface ModalBottomProps {
  isVisible: boolean;
  children: React.ReactNode;
  onCloseOrDismissModal: () => void;
}

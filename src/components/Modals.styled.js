import { useEffect } from "react";
import styled from "styled-components";
import Button from "./Buttons.styled";
import Divider from "./Divider.styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 440px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.modal.border};
  background-color: ${({ theme }) => theme.colors.modal.background};
`;

const TopContent = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.colors.modal.iconContainer.background};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.colors.modal.title};
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.modal.text};
`;

const ButtonContainer = styled.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

const Modal = ({
  icon: Icon,
  title,
  text,
  open,
  closeable = false,
  onClose,
  confirmText,
  onConfirm,
  action: CinfirmAction,
}) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  if (!open) return null;

  return (
    <Overlay onClick={closeable ? () => onClose() : () => {}}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <TopContent>
          {Icon && (
            <IconContainer>
              <Icon />
            </IconContainer>
          )}
          <Flex>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Flex>
        </TopContent>

        <Divider $margin="0" />
        
        <ButtonContainer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          {CinfirmAction}
        </ButtonContainer>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;

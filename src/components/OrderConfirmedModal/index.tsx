import { Modal } from "react-native";

import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { Container, OkButton } from "./styles";

interface OrderConfirmedModalProps {
  visible: boolean;
}

export function OrderConfirmedModal({ visible }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <Container>
        <CheckCircle />
        <Text size={20} weight="600" color="#FFF" style={{ marginTop: 12, marginBottom: 4 }}>
          Pedido confirmado
        </Text>
        <Text color="#FFF" opacity={0.9}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton>
          <Text color="#D73035" weight="600">
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  )
}

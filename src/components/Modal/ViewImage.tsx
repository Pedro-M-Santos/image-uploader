import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  VStack,
} from '@chakra-ui/react';
// import type { ComponentStyleConfig } from '@chakra-ui/theme';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent overflow="hidden" maxW="fit-content">
        <ModalBody p="0px">
          <Image
            src={imgUrl}
            alt="img"
            objectFit="cover"
            maxW="900px"
            maxH="600px"
            borderTopRadius="md"
          />
        </ModalBody>
        <ModalFooter bg="gray.800">
          <VStack justifyItems="flex-start" w="full" alignItems="flex-start">
            <Link isExternal href={imgUrl}>
              Abrir original
            </Link>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

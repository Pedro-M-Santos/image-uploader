import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  const [imgUrl, setImgUrl] = useState('');
  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={40}>
        {cards.map(card => (
          <Card
            data={card}
            key={card.id}
            viewImage={() => {
              setImgUrl(card?.url);
              onOpen();
            }}
          />
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage imgUrl={imgUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

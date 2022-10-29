import { useState } from 'react';
import { Offer, OfferId } from '../../types/offer';

import RoomCard from '../../components/room-card/room-card';

type OfferListProps = {
  offers: Offer[];
};

function OfferList({offers}: OfferListProps) {
  const [activeCardId, setActiveCardId] = useState<null | OfferId>(null);

  return (
    <>
      {offers.map((offer) => (
        <RoomCard
          // TODO: удалить activeCardId из ключа,
          // когда он будет задействован в коде
          key={`${activeCardId || 'key'}-${offer.id}`}
          offer={offer}
          onActiveSet={() => setActiveCardId(offer.id)}
          onActiveUnset={() => setActiveCardId(null)}
        />
      ))}
    </>
  );
}

export default OfferList;

import { useState } from 'react';
import { Offer, OfferId } from '../../types/offer';

import RoomCard from '../../components/room-card/room-card';

type OfferListProps = {
  cssClass: string;
  offers: Offer[];
};

function OfferList(props: OfferListProps) {
  const {cssClass, offers} = props;
  const [activeCardId, setActiveCardId] = useState<null | OfferId>(null);

  return (
    <div className={`places__list ${cssClass}`}>
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
    </div>
  );
}

export default OfferList;

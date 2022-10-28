import { Offer } from '../../types/offer';
import RoomCard from '../../components/room-card/room-card';

type OfferListProps = {
  offers: Offer[];
};

function OfferList({offers}: OfferListProps) {
  return (
    <>
      {offers.map((offer) => (
        <RoomCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </>
  );
}

export default OfferList;

import { Offer } from '../../types/offer';

import RoomCard from '../../components/room-card/room-card';
import { useAppDispatch } from '../../hooks';
import { setActiveOffer } from '../../store/offers/actions';

type OfferListProps = {
  cssClass: string;
  offers: Offer[];
};

function OfferList(props: OfferListProps) {
  const {cssClass, offers} = props;

  const dispatch = useAppDispatch();

  return (
    <div className={`places__list ${cssClass}`}>
      {offers.map((offer) => (
        //TODO: подумать как оптимизировать выделение активного маркера на карте
        <RoomCard
          key={`key-${offer.id}`}
          offer={offer}
          onActiveSet={() => dispatch(setActiveOffer(offer))}
          onActiveUnset={() => dispatch(setActiveOffer(null))}
        />
      ))}
    </div>
  );
}

export default OfferList;

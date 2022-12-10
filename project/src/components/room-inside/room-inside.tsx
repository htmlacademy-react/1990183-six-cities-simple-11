import { OfferGoods } from '../../types/offer';

type RoomInsideProps = {
  goods: OfferGoods;
};

function RoomInside({goods}: RoomInsideProps) {
  return (
    <div className="property__inside" data-testid="room-inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>

      <ul className="property__inside-list">
        {goods.map((good) => (
          <li key={good} className="property__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomInside;

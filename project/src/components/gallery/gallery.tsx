import { OfferGallery } from '../../types/offer';

type GalleryProps = {
  images: OfferGallery;
  alt: string;
  maxLength: number;
};

function Gallery(props: GalleryProps) {
  const {images, alt, maxLength} = props;

  const visibleImages = images.slice(0, maxLength);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery" data-testid="gallery">
        {visibleImages.map((src) => (
          <div
            key={src}
            className="property__image-wrapper"
          >
            <img
              className="property__image"
              src={src}
              alt={alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

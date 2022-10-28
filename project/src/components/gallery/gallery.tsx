import { OfferGallery } from '../../types/offer';

type GalleryProps = {
  images: OfferGallery;
  alt: string;
};

function Gallery({images, alt}: GalleryProps) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((src) => (
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

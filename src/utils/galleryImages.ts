export type GalleryImageInput = {
  url: string;
  title?: string;
  description?: string;
};

export type GalleryImage = GalleryImageInput & { id: string };

const FLICKR_PHOTO_ID = /\/65535\/(\d+)_/;

/** Stable unique id from Flickr CDN URL — no manual renumbering when adding/removing. */
export function withFlickrIds(items: GalleryImageInput[]): GalleryImage[] {
  return items.map((item) => ({
    ...item,
    id: item.url.match(FLICKR_PHOTO_ID)?.[1] ?? item.url,
  }));
}

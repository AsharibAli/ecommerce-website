import createImageUrlBuilder from "@sanity/image-url";
import { Image } from "sanity";
import { client } from "@/lib/client";

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source) => {
  return imageBuilder?.image(source);
};

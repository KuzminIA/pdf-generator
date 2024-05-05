import React from 'react';
import { Image as ImageRenderer } from "@react-pdf/renderer";
import { ImageModel } from "../../../../models";

export interface ImageProps {
  section: ImageModel;
}

const Image = (props: ImageProps) => {
  return <ImageRenderer src={`data:image/png;base64,'${props.section.src}'`} />
}

export default Image;

import React from "react";
import ReactPDF from "@react-pdf/renderer";

import AiBusinessInsightsDocument from './AiBusinessInsightsDocument';
import type { DocumentModel } from './models';

export default async (document: DocumentModel) => {
  return await ReactPDF.renderToStream(<AiBusinessInsightsDocument document={document} />);
};
import React from 'react';
import { Document } from "@react-pdf/renderer";
import FrontPage from './pages/FrontPage/FrontPage';
import ContentPage from './pages/ContentPage/ContentPage';
import type { DocumentModel } from './models';
import './AiBusinessInsightsDocument.styles';

interface AiBusinessInsightsProps {
  document: DocumentModel;
}

const AiBusinessInsights = (props: AiBusinessInsightsProps) => {
  return (
    <Document>
      <FrontPage brandName={props.document.brandName} />
      {
        props.document.pages.map((page, i) => <ContentPage key={i} page={page} />)
      }
    </Document>
  );
};

export default AiBusinessInsights; 
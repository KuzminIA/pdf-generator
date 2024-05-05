import React from "react";
import { View } from "@react-pdf/renderer";
import PageTemplate from '../PageTemplate/PageTemplate';
import { styles } from './ContentPage.styles';
import Header from "./components/Header/Header";
import Paragraph from './components/Paragraph/Paragraph';
import Image from './components/Image/Image';
import List from './components/List/List';
import TableOfContnet from "./components/TableOfContentItem/TableOfContentItem";
import type { PageModel, PageSection } from "../../models";

interface ContentPageProps {
  page: PageModel;
}

const renderSection = (section: PageSection, i: number) => {
  switch (section.type) {
    case "header": {
      return <Header key={i} section={section} />;
    }
    case "text": {
      return <Paragraph key={i} section={section} />;
    }
    case "image": {
      return <Image key={i} section={section} />;
    }
    case "list": {
      return <List key={i} section={section} />;
    }
    case "tableOfContentItem": {
      return <TableOfContnet key={i} section={section} />;
    }
  }

  return null;
}

const ContentPage = (props: ContentPageProps) => {
  return (
    <PageTemplate variant="content">
      <View style={styles.content}>
        {
          props.page.sections.map((section, i) => renderSection(section, i))
        }
      </View>
    </PageTemplate>
  )
};

export default ContentPage;

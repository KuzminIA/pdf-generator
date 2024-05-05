import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import PageTemplate from '../PageTemplate/PageTemplate';
import { styles } from './FrontPage.styles';
import { logo } from './FrontPage.constants';

export interface FrontPageProps {
  brandName: string;
}

const FrontPage = (props: FrontPageProps) => {
  return (
    <PageTemplate variant="front">
      <View style={styles.content}>
        <View style={styles.preTitle}>
          <Image style={styles.preTitleLogo} src={`data:image/png;base64,'${logo}'`} />
          <Text style={styles.preTitleText}>Ai Business Insights</Text>
        </View>
        <View style={styles.titleWrapper}>
          <View style={styles.title}>
            <Text>Маркетинговый</Text>
            <Text>анализ бренда</Text>
            <Text>     </Text>
            <Text>"{props.brandName}"</Text>
          </View>
        </View>
      </View>
    </PageTemplate>
  )
};

export default FrontPage;

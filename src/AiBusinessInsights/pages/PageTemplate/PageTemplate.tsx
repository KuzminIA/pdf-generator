import React from "react";
import { Page, Svg, Rect, Text, View } from "@react-pdf/renderer";
import type { PageSize } from '@react-pdf/types';
import { styles, frontPageStyles, contentPageStyles, logoFill } from './PageTemplate.styles';

const pageSize: PageSize = [1080, 1920];
export type PageVariant = 'front' | 'content';

export interface FrontPageProps extends React.PropsWithChildren {
  variant: PageVariant;
}

const FrontPage = (props: FrontPageProps) => {

  const variantStyles = props.variant === 'front' ? frontPageStyles : contentPageStyles;
  const iconFill = logoFill[props.variant];

  return (
    <Page size={pageSize} style={[styles.page, variantStyles.page]}>
      <View fixed style={styles.backgroundWrapper}>
        <View fixed style={[styles.backgroundLayer1, variantStyles.backgroundLayer1]} />
        <View fixed style={[styles.backgroundLayer2, variantStyles.backgroundLayer2]} />
      </View>
      <View fixed style={[styles.header, variantStyles.header]}>
        <View style={styles.headerDocumentNameAndLogo}>
          <Svg style={styles.headerLogo}>
            <Rect
              width="10"
              height="10"
              fill={iconFill}
            />
          </Svg>
          <Text> AI Business Insights</Text>
        </View>
        <Text>Москва, 2024 год</Text>
      </View>

      {props.children}

      <View fixed style={[styles.footer, variantStyles.footer]}>
        <Text>Presentation</Text>
        <Text render={({ pageNumber }) => pageNumber.toString().padStart(2, '0')} />
      </View>
    </Page>
  );
};

export default FrontPage;

import React from 'react';
import { Text, TextProps } from '@react-pdf/renderer';
import { FontStyle } from "../../../../models";
import { styles } from './StyledText.styles';

export interface StyledTextProps extends TextProps, React.PropsWithChildren {
  fontStyle?: FontStyle[];
}

const StyledText = (props: StyledTextProps) => {
  const { style, fontStyle } = props;
  const combinedStyle: any[] = [style];
  
  if (fontStyle) {
    for (const s of fontStyle) {
      if (s === 'bold') {
        combinedStyle.push(styles.bold);
      }
  
      if (s === 'italic') {
        combinedStyle.push(styles.italic);
      }
    }
  }

  return <Text {...props} style={combinedStyle}>{props.children}</Text>
}

export default StyledText;
